import { useContext } from 'react'
import MenuContext from '@/contexts/MenuContext/MenuContext'
import { Spiral as Hamburger } from 'hamburger-react'
import { useTheme } from '@mui/material/styles'
import ThemeContext from '@/contexts/ThemeContext/ThemeContext'

const MenuButton = () => {
  const { isMenuOpen, toggleMenu } = useContext(MenuContext)
  const {isLightTheme } = useContext(ThemeContext)
  const theme = useTheme()
  
  return (
      <Hamburger
        toggled={isMenuOpen}
        toggle={toggleMenu}
        size={32}
        color={isLightTheme ? theme.palette.primary.main : theme.palette.primary.contrastText}
      />
  )
}

export default MenuButton