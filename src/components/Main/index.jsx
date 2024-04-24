import { Route, Routes } from 'react-router-dom'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

const Main = () => {
  
  return (
    <Box component="main">
      <Container maxWidth="xl">
        <Routes>
          <Route path='/add-book' element={
            <>
              Add book
            </>
          }/>
          <Route path='/books' element={
            <>
              Books
            </>
          }/>
          <Route path={'/'} element={
            <>
              Home
            </>
          }/>
        </Routes>
      </Container>
    </Box>
  )
}

export default Main