# taro-wx-components
基于taro的微信小程序组件库
## 运行小程序组件库，查看小程序组件库支持的组件
yarn dev:weapp
##  打包组件库

第一步：执行taro打包命令
yarn build:weapp

第二步：gulp 对dist进行二次压缩
gulp build


##  发布组件库到npm上

1. 登录npm（登录公司的npm）
npm login
2. 发布
- 发布之前要修改版本号
npm publish

## 目录说明

config 打包编译执行的相关文件
lib  打包出来的组件库，不会上传到github，但是会上传npm上
types 组件类型定义相关
.npmignore    npm上传忽略文件
.gitignore    git上传忽略文件
gulpfile.js   gulp打包执行文件（针对taro打包出来的文件，进行二次打包压缩）
README.md     组件库概述
开发文档.md    组件库开发说明文档

src------assets------ 静态资源及公共配置
                 |---css 样式公共文件，全局定义的主题色，样式等
                 |---img 图片等静态资源
                 
      |--components     组件
      |--pages          组件汇总页面，用于展示所有组件
                |---baseComponentList       基础组件     
                |---businessComponentList   业务组件
                |---visualComponentList     可视化组件

      |--app.tsx        整个项目的入口文件
      |--index.ts       这个是所有组件的入口，最终所有组件都是从哪里导出的  ******
      |--actions        状态管理相关  组件库暂未用到，暂不予关注
      |--reducers       状态管理相关  组件库暂未用到，暂不予关注
      |--store          状态管理相关  组件库暂未用到，暂不予关注











