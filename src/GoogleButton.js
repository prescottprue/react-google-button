import React, {Component} from 'react'

const style = {
  backgroundColor: '#4285f4',
  color: '#fff',
  height: '50px',
  width: '240px',
  border: 'none',
  textAlign: 'center',
  verticalAlign: 'center',
  fontSize: '16px',
  lineHeight: '48px',
  display: 'block',
  transition: 'background-color .218s,border-color .218s,box-shadow .218s',
  fontFamily: 'Roboto,arial,sans-serif'
}
const iconStyle = {
  width: '48px',
  height: '48px',
  textAlign: 'center',
  display: 'block',
  marginTop: '1px',
  marginLeft: '1px',
  float: 'left',
  backgroundColor: '#fff',
  borderRadius: '1px',
  whiteSpace: 'nowrap'
}

export default class GoogleButton extends Component {
  render () {
    return (
      <div {...this.props} style={style}>
        <div style={iconStyle}></div>
        <span>Sign in To Google</span>
      </div>
    )
  }
}
