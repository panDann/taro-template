import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import BarTitle from '@src/components/bar-title'


import './index.styl'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '首页',
  }
  render () {
    return (
      <View className='index'>
        {/* <Text>Hello worl</Text> */}
        <BarTitle text='title' />
      </View>
    )
  }
}
