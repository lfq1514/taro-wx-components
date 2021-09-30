//页面路由跳转配置
type IConfig = Array<{ title: string; page: string }>;

const config: IConfig = [
  {
    title: '按钮',
    page: '/pages/baseComponentList/buttonView/index',
  },
  {
    title: '开关',
    page: '/pages/baseComponentList/switchView/index',
  },
];
export default config;
