/*
* @Author: edmond
* @Date:   2018-04-03 16:47:44
* @Last Modified by:   edmond
* @Last Modified time: 2018-04-06 23:28:48
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

class CountDownHint extends Component {
  constructor(props) {
    super(props)

    const {duration = 60} = props
    this.duration = duration
    this.state = {
      duration: duration,
    }
  }

  componentDidMount() {
    this.start()
  }

    static propTypes = {
      textleft: PropTypes.string,
      duration: PropTypes.number,
      textright: PropTypes.string,
      containerStyle: PropTypes.object,
      textleftStyle: PropTypes.object,
      durationStyle: PropTypes.object,
      textrightStyle: PropTypes.object,
    }

    render() {
      const {
        textleft = `剩余`,
        textright = `S`,
        containerStyle = styles.view,
        textleftStyle = styles.textleft,
        durationStyle = styles.duration,
        textrightStyle = styles.textright,
      } = this.props
      const {duration} = this.state
      return (
        <View style={containerStyle}>
          <Text style={textleftStyle}>{textleft}</Text>
          <Text style={durationStyle}>{duration}</Text>
          <Text style={textrightStyle}>{textright}</Text>
        </View>
      )
    }

    start = () => {
      this.interval = setInterval(
        () => {
          if (this.state.duration > 0) {
            this.setState({
              duration: this.state.duration - 1
            })
          } else {
            this.stop()
          }
        },
        1000
      )
    }

    stop = () => {
      this.setState({duration: 0}, () => this.interval && clearInterval(this.interval))
    }

    pause = () => {
      this.interval && clearInterval(this.interval)
    }

    resume = () => {
      this.interval && clearInterval(this.interval)
      this.start()
    }

    reset = (duration) => {
      this.interval && clearInterval(this.interval)
      if (duration) {
        this.duration = duration
      } else {
        duration = this.duration
      }
      this.setState({duration: this.duration}, this.start)
    }
}

const styles = StyleSheet.create({
  view: {
    width: 100,
    height: 35,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#999',
  },
  textleft: {
    fontSize: 13,
    color: '#FFF',
  },
  duration: {
    fontSize: 13,
    color: '#FFF',
    marginLeft: 3,
    marginRight: 3,
  },
  textright: {
    fontSize: 13,
    color: '#FFF',
  },
})

export default CountDownHint
