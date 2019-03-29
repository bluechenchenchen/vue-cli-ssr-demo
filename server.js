const fs = require("fs");
const Koa = require("koa");
const path = require("path");
const send = require('koa-send')
const koaStatic = require('koa-static')
const app = new Koa();
/* eslint-disable */
const resolve = file => path.resolve(__dirname, file);
// 开放dist目录
app.use(koaStatic(resolve('./dist')))

// 第 2 步：获得一个createBundleRenderer
const { createBundleRenderer } = require("vue-server-renderer");
const bundle = require("./dist/vue-ssr-server-bundle.json");
const clientManifest = require("./dist/vue-ssr-client-manifest.json");

const renderer = createBundleRenderer(bundle, {
  runInNewContext: false,
  template: fs.readFileSync(resolve("./src/index.ssr.temp.html"), "utf-8"),
  clientManifest: clientManifest
});

function renderToString(context) {
  return new Promise((resolve, reject) => {
    renderer.renderToString(context, (err, html) => {
      err ? reject(err) : resolve(html);
    });
  });
}
// 第 3 步：添加一个中间件来处理所有请求
app.use(async (ctx, next) => {
  const url = ctx.path
  if (/\w+.[js|css|jpg|jpeg|png|gif|map]/.test(url)) {
    console.log(`proxy ${url}`)
    return await send(ctx, url, { root: path.resolve(__dirname, '../dist') })
  }
  const context = {
    title: "ssr test",
    url: ctx.url
  };
  // 将 context 数据渲染为 HTML
  const html = await renderToString(context);
  ctx.body = html;
});

const port = 3002;
app.listen(port, function() {
  console.log(`server started at localhost:${port}`);
});