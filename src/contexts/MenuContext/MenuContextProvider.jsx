import { useState } from 'react'
import PropTypes from 'prop-types'
import MenuContext from './MenuContext'

const MenuContextProvider = ({children}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }
  
  return (
    <MenuContext.Provider value={{isMenuOpen, toggleMenu}}>
      {children}
    </MenuContext.Provider>
  )
}

MenuContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
export default MenuContextProvider