import { createApp } from './main'
export default context => {
  // 因为有可能会是异步路由钩子函数或组件，所以我们将返回一个 Promise，
  // 以便服务器能够等待所有的内容在渲染前，
  // 就已经准备就绪。
  return new Promise((resolve, reject) => {
    let { app, store, router } = createApp()
    // eslint-disable-next-line
    // console.log('app => ', app)
    // eslint-disable-next-line
    // console.log('router =>', router)
    // 设置服务器端 router 的位置
    // eslint-disable-next-line
    router.push(context.url)
    // eslint-disable-next-line
    // 等到 router 将可能的异步组件和钩子函数解析完
    router.onReady(() => {
      // eslint-disable-next-line
      console.log('ready')
      const matchedComponents = router.getMatchedComponents()

      const asyncFns = []
      matchedComponents.forEach(c => {
        c.asyncData && asyncFns.push(c.asyncData({store}))
      })
     
      console.log('matchedComponents => ', matchedComponents)
      // 匹配不到的路由，执行 reject 函数，并返回 404
      if (!matchedComponents.length) {
        // eslint-disable-next-line
        return reject({ code: 404 })

      }
      Promise.all(asyncFns).then(() => {
        context.state = store.state
        resolve(app)
      })
      // resolve(app)
      // Promise 应该 resolve 应用程序实例，以便它可以渲染
      
    }, reject)
  })
}