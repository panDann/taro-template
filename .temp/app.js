import Taro, { Component } from "@tarojs/taro-h5";


import "./app.styl";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

import Nerv from 'nervjs';
import { View, Tabbar, TabbarContainer, TabbarPanel } from '@tarojs/components';
import { Router, createHistory, mountApis } from '@tarojs/router';
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});

const _taroHistory = createHistory({
  mode: "hash",
  basename: "/",
  customRoutes: {},
  firstPagePath: "/pages/index/index"
});

mountApis({
  "basename": "/",
  "customRoutes": {}
}, _taroHistory);
class App extends Component {
  state = {
    __tabs: {
      color: "#cccccc",
      custom: true,
      selectedColor: "#3a8df3", //颜色
      list: [{
        pagePath: "/pages/index/index",
        text: "首页",
        iconPath: require("./assets/tab-icon/first.png"),
        selectedIconPath: require("./assets/tab-icon/first-selected.png")
      }, {
        pagePath: "/pages/mine/index",
        text: "个人中心",
        iconPath: require("./assets/tab-icon/personal-center.png"),
        selectedIconPath: require("./assets/tab-icon/personal-center-selected.png")
      }],
      mode: "hash",
      basename: "/",
      customRoutes: {}
    }
  };


  componentDidMount() {
    this.componentDidShow();
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  config = {
    pages: ["/pages/index/index", "/pages/mine/index"],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: { color: "#cccccc", custom: true, selectedColor: "#3a8df3", list: [{ pagePath: "/pages/index/index", text: "首页", iconPath: require("./assets/tab-icon/first.png"), selectedIconPath: require("./assets/tab-icon/first-selected.png") }, { pagePath: "/pages/mine/index", text: "个人中心", iconPath: require("./assets/tab-icon/personal-center.png"), selectedIconPath: require("./assets/tab-icon/personal-center-selected.png") }], mode: "hash",
      basename: "/",
      customRoutes: {}
    }

    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数
  };render() {
    return <TabbarContainer>
          
        <TabbarPanel>
          
                <Router mode={"hash"} history={_taroHistory} routes={[{
          path: '/pages/index/index',
          componentLoader: () => import( /* webpackChunkName: "index_index" */'./pages/index/index'),
          isIndex: true
        }, {
          path: '/pages/mine/index',
          componentLoader: () => import( /* webpackChunkName: "mine_index" */'./pages/mine/index'),
          isIndex: false
        }]} tabBar={this.state.__tabs} customRoutes={{}} />
                
        </TabbarPanel>
        <Tabbar conf={this.state.__tabs} homePage="pages/index/index" />
        </TabbarContainer>;
  }

  componentWillUnmount() {
    this.componentDidHide();
  }

  constructor(props, context) {
    super(props, context);
    Taro._$app = this;
  }

  componentWillMount() {
    Taro.initTabBarApis(this, Taro);
  }

}

Nerv.render(<App />, document.getElementById('app'));