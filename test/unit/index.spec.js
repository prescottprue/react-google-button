import React from 'react'
import GoogleButton from '../../src'
import { shallow } from 'enzyme'

const defaults = {
  label: 'Sign in with Google',
  backgroundColor: '#4285f4'
}

const disabledStyle = {
  backgroundColor: 'rgba(37, 5, 5, .08)'
}

describe('react-google-button Library', () => {
  describe('exports a component', () => {
    expect(GoogleButton).to.exist
  })

  describe('Component', () => {
    let _component

    describe('Default Props', () => {
      beforeEach(() => {
        _component = shallow(<GoogleButton />)
      })
      it('Renders div', () => {
        const firstDiv = _component.find('div')
        expect(firstDiv).to.exist
      })

      it('Sets correct label text', () => {
        const firstDiv = _component.find('span')
        expect(firstDiv.first().text()).to.equal(defaults.label)
      })

      it('Applies styles', () => {
        const firstDiv = _component.find('div')
        expect(firstDiv.first()).to.have.style(
          'background-color',
          defaults.backgroundColor
        )
      })
    })

    describe('Custom Label', () => {
      const customLabel = 'Custom Label'

      beforeEach(() => {
        _component = shallow(<GoogleButton label={customLabel} />)
      })

      it('Renders div', () => {
        const firstDiv = _component.find('div')
        expect(firstDiv).to.exist
      })

      it('Sets correct label text', () => {
        const firstDiv = _component.find('span')
        expect(firstDiv.first().text()).to.equal(customLabel)
      })
    })

    describe('Disabled', () => {
      beforeEach(() => {
        _component = shallow(<GoogleButton disabled />)
      })

      it('Renders div', () => {
        const firstDiv = _component.find('div')
        expect(firstDiv).to.exist
      })

      it('Applies background color', () => {
        const firstDiv = _component.find('div')
        expect(firstDiv.first()).to.have.style(
          'background-color',
          disabledStyle.backgroundColor
        )
      })
    })
  })
})
