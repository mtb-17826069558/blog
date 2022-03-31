---
title: 使用Github Action发布项目到阿里云
date: 2022-3-31
tags:
 - github
---


## 1.创建一个[GitHub](https://so.csdn.net/so/search?q=GitHub&spm=1001.2101.3001.7020) action

在GitHub仓库选中action，创造一个action

![image-20220331110338704](image-20220331110338704.png)

```
name: 打包press博客

on:
  push:
    # push 代码的时候 哪个分支会受到影响 这里是 master 主分支
    branches:
      - master

# 推送之后执行一系列的任务
jobs:
  build:
    # 运行 ubuntu虚拟机系统
    runs-on: ubuntu-latest
    steps:
      # 获取代码
      - name: 迁出代码
        # 使用action库 action/checkout获取大妈
        uses: actions/checkout@master
      # 安装Node10

      - name: 安装node.js
        # 使用action库  actions/setup-node安装node
        uses: actions/setup-node@v1
        with:
          node-version: 14.18.0

      # 忽略版本
      - name: yarn set config
        run: yarn config set ignore-engines true
        
      - name: 安装yarn
        run: npm install -g yarn

      # 安装依赖
      - name: 安装依赖
        run: yarn

      # 打包
      - name: 打包
        run: yarn build

      # 上传到阿里云
      - name: 发布到阿里云
        uses: easingthemes/ssh-deploy@v2.1.1
        env:
          # 私钥 PRIVATE_KEY 要和 仓库的私钥名一致 也就是私钥名也要叫 PRIVATE_KEY
          SSH_PRIVATE_KEY: ${{ secrets.PRIVATE_KEY }}
          # SCP参数
          ARGS: '-avzr --delete'
          # 源目录 -- 打包后的文件目录，也就是这个文件会被传到服务器上.
          SOURCE: './public'
          # 服务器ip
          REMOTE_HOST: '121.40.166.6'
          # 用户
          REMOTE_USER: 'root'
          # 目标地址 -- 上传到服务器的地址
          TARGET: '/www/blog'
```

## 2.配置 secret

到服务器中，运行

```
 ssh-keygen -m PEM -t rsa -b 4096
```

一定要用PEM格式，不然会报错Load key “/home/runner/.ssh/deploy_key”: invalid format

```
cd ~/.ssh
cat id_rsa.pub >> ~/.ssh/authorized_keys
```

将公钥写入.ssh/authorized_keys

```
vim ~/.ssh/authorized_keys 
```

vim查看,此时authorized_keys会多出密钥

```
cat id_rsa
```

将内容复制下来，来到GitHub仓库，进入 Secrets 配置

![image-20220331110846377](image-20220331110846377.png)

![image-20220331110902428](image-20220331110902428.png)

New 一个 secret，名字叫ALIYUN_SERVER_ACCESS_TOKEN，然后把刚刚复制的值放进去，保存
接着再创建几个

```
ALIYUN_SERVER_HOST = 阿里云服务器的地址
ALIYUN_REMOTE_USER = 阿里云user，一般是root
ALIYUN_TARGET = 目标路径
```

这样只要代码一push，就会自动运行action，然后构建发布到阿里云上去

![image-20220331110951205](image-20220331110951205.png)

可以在GitHub 里面查看action的运行情况，如图是一个成功的例子

## 报错bash: rsync: command not found

这是因为服务器没有安装rsync
去安装rsync即可：

```
yum install rsync
```

## 报错 Load key “/home/runner/.ssh/deploy_key”: invalid format

说明ssh的key格式不匹配，可以参考上面配置 secret重新生成key，也可以将现有的转换成PEM格式：

```
ssh-keygen -p -f ~/.ssh/id_rsa -m pem
```

