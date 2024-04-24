import { useContext } from 'react'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import ThemeContext from '@/contexts/ThemeContext/ThemeContext'
import Box from '@mui/material/Box'

const ThemeToggle = (props) => {
  const { isLightTheme, toggleTheme } = useContext(ThemeContext)
  
  return (
    <Box {...props}>
      <FormControlLabel
        control={
          <Switch
            checked={isLightTheme}
            onChange={toggleTheme}
            label={isLightTheme ? 'Light' : 'Dark'}
            size='small'
          />
        }
        label={isLightTheme ? 'Light' : 'Dark'}
      />
    </Box>
  )
}

export default ThemeToggle