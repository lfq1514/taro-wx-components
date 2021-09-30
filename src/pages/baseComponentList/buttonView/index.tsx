import Taro, { Component, Config } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.less';
import { QYButton } from '../../../index';

class Index extends Component {
  config: Config = {
    navigationBarTitleText: '按钮',
  };
  render() {
    return (
      <View className="index">
        <QYButton circle>hello</QYButton>
      </View>
    );
  }
}

export default Index;
