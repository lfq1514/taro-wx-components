import Taro, { Component} from '@tarojs/taro'
import { View} from '@tarojs/components'
import './index.less'
class Index extends Component {
  render () {
    return (
      <View className='index'>
        <View className='buttonArea'>button</View>
      </View>
    )
}
}

export default Index
