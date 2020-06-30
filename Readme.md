
# 当前taro 2.0.7

# 使用 npm 安装 CLI
$ npm install -g @tarojs/cli
# OR 使用 yarn 安装 CLI
$ yarn global add @tarojs/cli
# OR 安装了 cnpm，使用 cnpm 安装 CLI
$ cnpm install -g @tarojs/cli

# 注意事项
# 值得一提的是，如果安装过程出现sass相关的安装错误，请在安装mirror-config-china后重试。

$ npm install -g mirror-config-china

# 使用命令创建模板项目

$ taro init myApp
# npm 5.2+ 也可在不全局安装的情况下使用 npx 创建模板项目

$ npx @tarojs/cli@2.0.7 init myApp