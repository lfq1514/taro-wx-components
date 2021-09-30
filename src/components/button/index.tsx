import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import classNames from 'classnames';
import './index.less';

import { QYButtonProps } from 'types/button';
class Index extends Component<QYButtonProps> {
  static defaultProps = {
    circle: false,
    customStyle: {},
    onClick: () => {},
  };
  render() {
    const { circle, customStyle, size, onClick } = this.props;
    const btnClass = classNames({
      index: true,
      circleStyle: circle,
      'ty-button--small': size === 'small',
      'ty-button-circle--small': size === 'small',
    });
    return (
      <View className={btnClass} style={customStyle} onClick={onClick}>
        {this.props.children}
      </View>
    );
  }
}

export default Index;
