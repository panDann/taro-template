import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import * as Path from '@src/consts/paths'

import '@src/app.styl'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  config = {
    pages: [
      'pages/index/index',
      'pages/canteen/index',
      'pages/task/index',
      'pages/mine/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor:'#3390FB',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'white',
      backgroundColor:'#EFEFF4',
    },
    tabBar: {
      color: "#cccccc",
      selectedColor: "#3a8df3", //颜色
      list: [ 
        {
          pagePath: "pages/index/index",
          text: "首页",
          iconPath: "assets/tab-icon/first.png",
          selectedIconPath: "assets/tab-icon/first-selected.png"
        },
        {
          pagePath: "pages/canteen/index",
          text: "食堂",
          iconPath: "assets/tab-icon/canteen.png",
          selectedIconPath: "assets/tab-icon/canteen-selected.png"
        },
        {
          pagePath: "pages/task/index",
          text: "任务",
          iconPath: "assets/tab-icon/task.png",
          selectedIconPath: "assets/tab-icon/task-selected.png"
        },
        {
          pagePath: "pages/mine/index",
          text: "我的",
          iconPath: "assets/tab-icon/mine.png",
          selectedIconPath: "assets/tab-icon/mine-selected.png"
        }
      ]
    },
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
