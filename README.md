# 23.vue-study

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## node.js 기본제공 모듈
~~~js
const os = require('os');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
~~~

## express 기본 제공 모듈 및 미들웨어
- Express
- App
- Router
- Request
- Response
- 기본제공 미들웨어: express.static()

## 개발의 편리를 위한 Global 프로그램
~~~bash
# 하나의 컴퓨터에서 한번만 설치하면 됨
npm i -g supervisor
npm i -g pm2
~~~

## node.js 프로젝트 구현을 위한 외부 모듈 및 미들웨어 목록
~~~bash
npm i express
npm i morgan
npm i http-errors
npm i pug
npm i multer
npm i mysql
npm i mysql2
npm i sequelize
npm i sequelize-cli
npm i express-session
npm i session-file-store
npm i cookie-parser
npm i method-override

# 본 프로젝트에 설치한 모듈 및 미들웨어
npm i express
npm i morgan
npm i http-errors
npm i mysql2
npm i sequelize
npm i method-override


# 본 프로젝트에 설치한 모듈 및 미들웨어
# Vue에서 Pug를 사용하기 위한 방법
npm i pug
npm i pug-plain-loader
~~~
~~~pug
<template lang="pug">
... 퍼그문법
</template>
~~~

~~~bash
# vue에서 bootstrap을 쓰는 방법
npm i bootstrap-vue bootstrap
~~~

