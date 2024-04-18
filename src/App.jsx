import { ThemeProvider, CssBaseline } from '@mui/material'
import { createTheme } from '@mui/material/styles'

const theme = createTheme()

function App () {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <h1>Hello world!</h1>
    </ThemeProvider>
  )
}

export default App
