import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.styl'
export default function BarTitle({ text }) {
    return <View className='con'>
        {text}
    </View>
}