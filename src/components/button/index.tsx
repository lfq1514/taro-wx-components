import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.less";

import { TYButtonProps } from "types/button";
class Index extends Component<TYButtonProps> {
  render() {
    const { btnText, circle, style } = this.props;
    return (
      <View className="index">
        <View
          className={["buttonArea", circle&&"circleStyle"].filter(i=>i).join(" ")}
          style={style}
        >
          {this.props.children?this.props.children:btnText}
        </View>
      </View>
    );
  }
}

export default Index;
