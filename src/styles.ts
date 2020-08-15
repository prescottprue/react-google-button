const baseStyle = {
  height: '50px',
  width: '240px',
  border: 'none',
  textAlign: 'center' as 'center',
  verticalAlign: 'center',
  boxShadow: '0 2px 4px 0 rgba(0,0,0,.25)',
  fontSize: '16px',
  lineHeight: '48px',
  display: 'block',
  borderRadius: '1px',
  transition: 'background-color .218s, border-color .218s, box-shadow .218s',
  fontFamily: 'Roboto,arial,sans-serif',
  cursor: 'pointer',
  userSelect: 'none' as 'none'
}

export const darkStyle = {
  backgroundColor: '#4285f4',
  color: '#fff',
  ...baseStyle
}

export const lightStyle = {
  backgroundColor: '#fff',
  color: 'rgba(0,0,0,.54)',
  ...baseStyle
}

export const hoverStyle = {
  boxShadow: '0 0 3px 3px rgba(66,133,244,.3)',
  transition: 'background-color .218s, border-color .218s, box-shadow .218s'
}

export const disabledStyle = {
  backgroundColor: 'rgba(37, 5, 5, .08)',
  color: 'rgba(0, 0, 0, .40)',
  cursor: 'not-allowed'
}

