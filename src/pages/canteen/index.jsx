import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import CardNavigation from '@src/components/card-navigation'

import {statusList,
  dailyList,} from './const'
import './index.styl'

export default class Index extends Component {
  constructor(){
    super()
    this.state = {
      statusList,
      dailyList,
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '食堂'
  }

  render () {
    return (
      <View className='index'>
        {/* <Text>Hello world!</Text> */}
        <CardNavigation title={'食安动态'} list={statusList} />
        <CardNavigation title={'日常公示'} list={dailyList} />
      </View>
    )
  }
}
