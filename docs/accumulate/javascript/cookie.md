<!--  -->
# JavaScript学习笔记（二十六）-- cookie

## **COOKIE**

- `cookie` 是一个以字符串的形式存储数据的位置
- 每一个 HTTP 请求都会在请求头中携带 cookie 到服务端

- 每一个 HTTP 响应都会在响应头中携带 cookie 到客户端
- 也就是说，cookie 是不需要我们手动设置，就会自动在 客户端 和 服务端之间游走的数据

- 我们只是需要设置一下 cookie 的内容就可以

## **COOKIE 的存储形式**

- cookie 是以字符串的形式存储，在字符串中以 `key=value` 的形式出现
- 每一个 `key=value` 是一条数据

- 多个数据之间以 `;` 分割

```js
// cookie 的形态
'a=100; b=200; c=300;'
```

## **COOKIE 的特点**

1. 存储大小有限制，一般是 4 KB 左右
2. 数量有限制，一般是 50 条左右

1. 有时效性，也就是有过期时间，一般是 **会话级别**（也就是浏览器关闭就过期了）
2. 有域名限制，也就是说谁设置的谁才能读取

## **使用方式**

- 读取 cookie 的内容使用 `document.cookie`

```js
const cookie = document.cookie
console.log(cookie) // 就能得到当前 cookie 的值
```

- 设置 cookie 的内容使用 `document.cookie`

```js
// 设置一个时效性为会话级别的 cookie
document.cookie = 'a=100'
// 设置一个有过期时间的 cookie
document.cookie = 'b=200;expires=Thu, 18 Dec 2043 12:00:00 GMT";'
// 上面这个 cookie 数据会在 2043 年 12 月 18 日 12 点以后过期，过期后会自动消失
```

- 删除 cookie 的内容使用 `document.cookie`

```js
// 因为 cookie 不能直接删除
// 所以我们只能把某一条 cookie 的过期时间设置成当前时间之前
// 那么浏览器就会自动删除 cookie
document.cookie = 'b=200;expires=Thu, 18 Dec 2018 12:00:00 GMT";'
```

## **COOKIE 操作封装**

- 因为 js 中没有专门操作 COOKIE 增删改查的方法
- 所以需要我们自己封装一个方法

### **设置 cookie**

```js
/**
 * setCookie 用于设置 cookie
 * @param {STRING} key  要设置的 cookie 名称
 * @param {STRING} value  要设置的 cookie 内容
 * @param {NUMBER} expires  过期时间
 */
function setCookie (key, value, expires) {
  const time = new Date()
  time.setTime(time.getTime() - 1000 * 60 * 60 * 24 * 8 + expires) // 用于设置过期时间
  document.cookie = `${key}=${value};expires=${time};`
}
```

### **读取 cookie**

```js
/**
 * getCookie 获取 cookie 中的某一个属性
 * @param {STRING} key 你要查询的 cookie 属性
 * @return {STRING} 你要查询的那个 cookie 属性的值
 */
function getCookie(key) {
  const cookieArr = document.cookie.split(';')
  let value = ''
  cookieArr.forEach(item => {
    if (item.split('=')[0] === key) {
      value = item.split('=')[1]
    }
  })
  return value
}
```

### **删除 cookie**

```js
/**
 * delCookie 删除 cookie 中的某一个属性
 * @param {STRING} name 你要删除的某一个 cookie 属性的名称
 */
function delCookie(name) {
  setCookie(name, 1, -1)
}
```