import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { GoogleIcon } from './icons'
import { darkStyle, lightStyle, disabledStyle, hoverStyle } from './styles'

export default function GoogleButton({
  label = 'Sign in with Google',
  disabled = false,
  tabIndex = 0,
  onClick = () => {},
  type = 'dark',
  style
}) {
  const [hovered, setHovered] = useState(false)
  const mouseOver = () => {
    if (!disabled) {
      setHovered(true)
    }
  }

  const mouseOut = () => {
    if (!disabled) {
      setHovered(false)
    }
  }

  const getStyle = () => {
    const baseStyle = type === 'dark' ? darkStyle : lightStyle
    if (hovered) {
      return { ...baseStyle, ...hoverStyle, ...style }
    }
    if (disabled) {
      return { ...baseStyle, ...disabledStyle, ...style }
    }
    return { ...baseStyle, ...style }
  }

  const handleClick = (e) => {
    if (!disabled) {
      onClick(e)
    }
  }

  return (
    <div
      disabled={disabled}
      tabIndex={tabIndex}
      onClick={handleClick}
      role="button"
      style={getStyle()}
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
    >
      <GoogleIcon disabled={disabled} type={type} />
      <span>{label}</span>
    </div>
  )
}

GoogleButton.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  tabIndex: PropTypes.number,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['light', 'dark']),
  style: PropTypes.object
}
