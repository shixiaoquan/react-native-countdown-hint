A countdown component for waiting for verification code reception

### Screen Capture

![react-native-countdown-hint-ios](https://raw.githubusercontent.com/shixiaoquan/react-native-countdown-hint/master/screencaptures/react-native-countdown-hint-ios.gif)

支持停止、暂停、继续、重置等方法

### Installation

`react-native-countdown-hint`

### Properties

| Prop | PropType | Default Value | isRequired | Description |
|:-:|:-:|:-:|:-:|:-:|
| textleft | string | 剩余 | NO | 倒计时刻度左侧显示的内容 |
| duration | number | 60 | NO | 倒计时的间隔 |
| textright | string | S | NO | 倒计时刻度右侧显示的内容 |
| containerStyle | object || NO | 倒计时组件外部容器的样式 |
| textleftStyle | object || NO | 倒计时组件左侧文本的样式 |
| durationStyle | object || NO | 倒计时组件刻度的样式 |
| textrightStyle | object || NO | 倒计时组件右侧文本的样式 |

### APIs

| Name | isRequired | Description |
|:-:|:-:|:-:|
| stop | NO | 停止倒计时，时间清零 |
| pause | NO | 暂停倒计时 |
| resume | NO | 继续倒计时 |
| reset | NO | 重置倒计时，可以重新设置duration，开始一个新的倒计时 |
