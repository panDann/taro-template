import Taro from '@tarojs/taro'
import { View,Text } from '@tarojs/components'

import BarTitle from '@src/components/bar-title'
import './index.styl'

export default function CardNavigation({ title, list }) {
    return <View className='con'>
        <BarTitle text={title} />
        {list.map(el => <View className="list-con" onClick={Taro.navigateTo({url:el.path})}>
                <View className={'iconfont icon' + el.iconName} />
                <Text>{el.label}</Text>
        </View>)}
    </View>
}