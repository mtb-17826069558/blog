## 1.**Git 复习**

**(1). 复习git的基本使用**

git config --global --unset http.proxy  删除缓存代理

git pull 拉取并merge代码

git add .; //添加 暂存区

git commit -m 'zhu shi'// 提交到本地仓库并加上注释

git push origin master //往远程仓库推送代码

**(2). 多人协作方式**

**a) 分支的构建**

git branch -a 查看所有的分支

git checkout -b aaa 创建新的分支aaa

git checkout aaa 切换到aaa分支

git push origin aaa 推送aaa 分支到远程仓库aaa分支

git push origin master:aaa 推送master 到远程的aaa 分支

git branch -d 删除一个分支

git status// 显示有变更文件的状态

**b) 冲突的产生与解决**

两人同时修改同一个文件，一个人上传远程仓库成功， 另一个人再上传会失败。

（1）git pull, （拉取服务器的代码， 会造成自动合并失败，需要手动合并）

(2) 手动合并代码（小乌龟等可视化git工具 进行代码对比）



一、创建分支   git checkout -b aaa 创建新的分支aaa

（2）git add .

(3) git commit -m '注释'

(4)git checkout aaa 切换分支

（5）git merge aaa  合并分支

(6)git push origin master //往远程仓库推送代码