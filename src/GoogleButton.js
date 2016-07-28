import React, {Component, PropTypes} from 'react'

export default class ClassName extends Component {
  static propTypes = {
    onClick: PropTypes.func
  }
  render () {
    return (
      <button {...this.props} type="button">Sign in To Google</button>
    )
  }
}
