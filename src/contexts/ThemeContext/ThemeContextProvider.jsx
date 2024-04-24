import { useState } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@mui/material'
import { CssBaseline } from '@mui/material'
import { lightTheme, darkTheme } from '@/configs/theme'
import ThemeContext from './ThemeContext'

const ThemeContextProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(true)
  
  const toggleTheme = () => {
    setIsLightTheme(prev => !prev)
  }
  
  return (
    <ThemeContext.Provider value={{ isLightTheme, toggleTheme }}>
      <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
        <CssBaseline/>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ThemeContextProvider