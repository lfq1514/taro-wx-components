import Taro, { Component, Config } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';

import { tuyalogo } from '../../assets/img';

import './index.less';
class Index extends Component {
    config: Config = {
        navigationBarTitleText: '涂鸦KA组件库',
    };

    toPage = (pageType) => {
        Taro.navigateTo({
            url: `/pages/${pageType}/index`,
        });
    };
    render() {
        return (
            <View className="index">
                <View className="logoArea">
                    <Image className="logo" src={tuyalogo} />
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
