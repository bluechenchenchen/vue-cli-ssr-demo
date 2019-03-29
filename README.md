# vue-cli-ssr-demo

### 安装相关依赖
```
npm install
```

### 开发模式&&热更新
```
npm run start
```

### 项目构建
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

-----------------------

### SSR启动

#### windows启动
```
npm run build:win

```

#### 服务器（centos）启动
```
npm run build:linux

forever start server.js
```
使用forever进程守护

### forever相关
https://github.com/foreverjs/forever
```
# 作为前台任务启动
$ forever server.js

# 作为服务进程启动 | 停止服务进程
$ forever start server.js | forever stop server.js

# 停止服务进程
$ forever stop Id

# 重启服务进程
$ forever restart Id

# 监视当前目录的文件变动，一有变动就重启
$ forever -w server.js

# -m 参数指定最多重启次数
$ forever -m 5 server.js 

# 列出所有进程
$ forever list
```