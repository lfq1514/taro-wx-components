import Taro, { Component, Config } from '@tarojs/taro';
import { View, Image, Text, Canvas } from '@tarojs/components';

import { tuyalogo } from '../../assets/img';

import './index.less';
class Index extends Component {
  config: Config = {
    navigationBarTitleText: '基于Taro的Ui组件库',
  };

  componentDidMount() {
    const ctx = Taro.createCanvasContext('canvas', this.$scope);

    ctx.drawImage(tuyalogo, 95, 20);

    const fonts = '一起创造无限可能！';
    ctx.font = '20px Arial';
    const grd = ctx.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, '#efefef');
    grd.addColorStop(1, '#000');

    ctx.setTextAlign('center');
    ctx.setStrokeStyle(grd);
    ctx.strokeText(fonts, 150, 120);
    ctx.draw();
  }

  toPage = (pageType) => {
    Taro.navigateTo({
      url: `/pages/${pageType}/index`,
    });
  };

  render() {
    return (
      <View className="index">
        <View className="logoArea">
          <Canvas style="width: 300px; height: 150px" canvasId="canvas" />
        </View>
        <View className="componentsList">
          <View className="item" onClick={this.toPage.bind(this, 'baseComponentList')}>
            基础组件
          </View>
          <View className="item" onClick={this.toPage.bind(this, 'businessComponentList')}>
            业务组件
          </View>
          <View className="item" onClick={this.toPage.bind(this, 'visualComponentList')}>
            可视化组件
          </View>
        </View>
      </View>
    );
  }
}

export default Index;
