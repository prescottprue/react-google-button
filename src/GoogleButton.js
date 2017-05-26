import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { GoogleIcon } from './icons'
import { darkStyle, lightStyle, disabledStyle, hoverStyle } from './styles'

export default class GoogleButton extends Component {
  static propTypes = {
    label: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.oneOf([
      'light',
      'dark'
    ])
  }

  static defaultProps = {
    label: 'Sign in with Google',
    disabled: false,
    type: 'dark',
    onClick: () => {}
  }

  state = {
    hovered: false
  }

  getStyle = () => {
    const baseStyle = this.props.type === 'dark' ? darkStyle : lightStyle
    if (this.state.hovered) {
      return { ...baseStyle, ...hoverStyle }
    }
    if (this.props.disabled) {
      return { ...baseStyle, ...disabledStyle }
    }
    return baseStyle
  }

  mouseOver = () => {
    if (!this.props.disabled) {
      this.setState({ hovered: true })
    }
  }

  mouseOut = () => {
    if (!this.props.disabled) {
      this.setState({ hovered: false })
    }
  }

  click = (e) => {
    if (!this.props.disabled) {
      this.props.onClick(e)
    }
  }

  render () {
    const { label } = this.props

    return (
      <div
        {...this.props}
        onClick={this.click}
        style={this.getStyle()}
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
      >
        <GoogleIcon {...this.props} />
        <span>{label}</span>
      </div>
    )
  }
}
