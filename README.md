## 1. 技术栈
1. vue + vuex + vue-router 全家桶
2. sass | scss 样式
3. axios网络请求
4. vant vue 移动端UI框架
5. eslint + prettier + husky 代码校验和git commit管理

## 2. 安装
使用下面命令安装依赖
```bash
npm install
```

## 3. 开发
根据环境变量的不同，有以下3种开发环境：
```bash
# 直接运行这个
# development & development BASE_URL
npm start

# development & production BASE_URL
npm run dev:staging

# production & production BASE_URL
npm run dev:prod
```

## 4. 打包
```bash
# 直接运行这个
# production & production BASE_URL
npm run build

# development & development BASE_URL
npm run build:dev

# development & production BASE_URL
npm run build:staging
```