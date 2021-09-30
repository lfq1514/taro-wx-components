import Taro, { Component, Config } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.less';
import { QYButton } from '../../../index';

class Index extends Component {
  config: Config = {
    navigationBarTitleText: '基础组件',
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View className="index">alertView</View>;
  }
}

export default Index;
