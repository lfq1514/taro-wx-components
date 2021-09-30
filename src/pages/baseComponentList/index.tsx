import Taro, { Component, Config } from '@tarojs/taro';
import { ScrollView, View, Text } from '@tarojs/components';
import config from './config';
import './index.less';
class Index extends Component {
  config: Config = {
    navigationBarTitleText: '基础组件',
  };
  componentDidHide() {}
  toPages = (page) => {
    console.log('page', page);
    Taro.navigateTo({
      url: page,
    });
  };
  render() {
    return (
      <ScrollView className="scrollPage" scrollY>
        <View className="index">
          {config.map((page, index) => {
            return (
              <View
                key={index}
                className="itemBox"
                onClick={() => {
                  this.toPages(page.page);
                }}
              >
                <Text>{page.title}</Text>
                <Text>&gt;</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

export default Index;
