import Taro, { Component, Config } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.less';

class Index extends Component {
  config: Config = {
    navigationBarTitleText: '按钮组件',
  };
  render() {
    return <View className="index">switchView</View>;
  }
}

export default Index;
