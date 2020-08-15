import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { GoogleIcon } from './icons'
import { darkStyle, lightStyle, disabledStyle, hoverStyle } from './styles'

type GoogleButtonProps = {
  label: string,
  disabled: boolean,
  tabIndex: number,
  onClick: (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => any,
  type: 'light' | 'dark',
  style: object
}

type GoogleButtonState = {
  hovered: boolean
}

export default class GoogleButton extends PureComponent<GoogleButtonProps, GoogleButtonState> {
  constructor(props: GoogleButtonProps) {
    super(props)
  }
  static propTypes = {
    label: PropTypes.string,
    disabled: PropTypes.bool,
    tabIndex: PropTypes.number,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['light', 'dark']),
    style: PropTypes.object
  }

  static defaultProps = {
    label: 'Sign in with Google',
    disabled: false,
    type: 'dark',
    tabIndex: 0,
    onClick: () => {}
  }

  state = {
    hovered: false
  }
  
  getStyle = (): React.CSSProperties => {
    const baseStyle = this.props.type === 'dark' ? darkStyle : lightStyle
    if (this.state.hovered) {
      return { ...baseStyle, ...hoverStyle, ...this.props.style }
    }
    if (this.props.disabled) {
      return { ...baseStyle, ...disabledStyle, ...this.props.style }
    }
    return { ...baseStyle, ...this.props.style }
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

  click = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!this.props.disabled && this.props.onClick) {
      this.props.onClick(e)
    }
  }

  render() {
    const { label, style, type, disabled, ...otherProps } = this.props
    return (
      <div
        {...otherProps}
        role="button"
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
