import PropTypes from 'prop-types'
import { Button as MaterialButton } from '@mui/material'

function Button ({ children, disableElevation, ...props }) {
  return (
    <MaterialButton disableElevation={disableElevation ?? true} {...props}>
      {children}
    </MaterialButton>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disableElevation: PropTypes.bool,
  props: PropTypes.object,
}

export default Button