// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/dubiaoqi/Documents/spare-time-workspace/dogiant.github.io/.cache/layouts/index.js"))
}

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": preferDefault(require("/Users/dubiaoqi/Documents/spare-time-workspace/dogiant.github.io/node_modules/gatsby-plugin-offline/app-shell.js")),
  "component---src-templates-blog-post-js": preferDefault(require("/Users/dubiaoqi/Documents/spare-time-workspace/dogiant.github.io/src/templates/blog-post.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/dubiaoqi/Documents/spare-time-workspace/dogiant.github.io/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/dubiaoqi/Documents/spare-time-workspace/dogiant.github.io/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/dubiaoqi/Documents/spare-time-workspace/dogiant.github.io/.cache/json/layout-index.json"),
  "offline-plugin-app-shell-fallback.json": require("/Users/dubiaoqi/Documents/spare-time-workspace/dogiant.github.io/.cache/json/offline-plugin-app-shell-fallback.json"),
  "hi-folks.json": require("/Users/dubiaoqi/Documents/spare-time-workspace/dogiant.github.io/.cache/json/hi-folks.json"),
  "my-second-post.json": require("/Users/dubiaoqi/Documents/spare-time-workspace/dogiant.github.io/.cache/json/my-second-post.json"),
  "hello-world.json": require("/Users/dubiaoqi/Documents/spare-time-workspace/dogiant.github.io/.cache/json/hello-world.json"),
  "404.json": require("/Users/dubiaoqi/Documents/spare-time-workspace/dogiant.github.io/.cache/json/404.json"),
  "index.json": require("/Users/dubiaoqi/Documents/spare-time-workspace/dogiant.github.io/.cache/json/index.json"),
  "404-html.json": require("/Users/dubiaoqi/Documents/spare-time-workspace/dogiant.github.io/.cache/json/404-html.json")
}