import Header from '@/components/Header'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
import ThemeContextProvider from '@/contexts/ThemeContext/ThemeContextProvider'
/*style imports START*/
import '@fontsource/merienda/300.css'
import '@fontsource/merienda/400.css'
import '@fontsource/merienda/500.css'
import '@fontsource/merienda/700.css'
/*style imports END*/

function App () {
  
  return (
    <ThemeContextProvider>
      <Header/>
      <Main/>
      <Footer/>
    </ThemeContextProvider>
  )
}

export default App
