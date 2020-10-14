# law-web

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

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 打包docker并上传到华为云
1.需要改两个文件：interface.js，login中的router文件，不要提交git
2.npm run build
3.docker build -f ./docker/law-web -t swr.cn-north-1.myhuaweicloud.com/bayesba/law-web:auth2 .
4.docker push swr.cn-north-1.myhuaweicloud.com/bayesba/law-web:auth2
