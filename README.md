# miniapp-wx-promise

微信小程序异步 API 的 promise 集成, 在运行时会注册微信小程序的异步 api 接口.

> 注: 如果您的运行环境不支持 Promise, 您应该自己对 Promise 进行 Polyfill

## 使用方式

您将得到一个与原生 API 一模一样的使用方式, 因此无需额外的学习.

例如: request 的使用

**原生 request 接口的使用**

```javascript
// 传入一个对象作为参数
// 请求成功会执行 success 回调
// 请求失败会执行 fail 回调
wx.request({
  success: ()=> {},
  fail: ()=>{},
  // ... 其他参数
})
```

**Promise 集成后的使用**

```javascript
// 首先应该引入次库, 假设把词库放在 lib/apis.js 下
const awx = require('./lib/apis.js');

// 依然传入一个对象作为参数, 方式和原来一样
// 但无需传入 success 或 fali 回调
// 接口会返还一个 promise
// 请求成功会 resolve
// 请求失败会 reject
awx.request({
  // ... 其他参数
})
  .then(rut=>{}),
  .catch(e=>{})

```

## 原理

微信小程序所有的异步接口都有着规范的格式:

1. 都是传入一个 Object 作为参数
2. 都使用 `success`, `fail`, `complete` 回调函数, 作为异步结果的回调


基于这些规律, 我们会在引入库的时候统一注册所有的异步回调接口. 在 sucess 的时候 resolve, 在 fail 的时候 reject.

> 注: 如果需要使用 complete, 您可以在 finally 中实现. 但请注意 Polyfill.

## 注意事项

某些接口并不是异步接口, 例如:

```JavaScript
wx.setStorageSync(KEY,DATA);
```

对于这一类接口您应该直接直接从 `wx` 中调用. `awx` 并不会对这一类接口进行 Promise 化.

在未来我们可能会让这一类接口进行 Promise 化.
