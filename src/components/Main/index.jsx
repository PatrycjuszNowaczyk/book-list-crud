import { Route, Routes } from 'react-router-dom'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import BookList from '@/components/BookList'
import AddBook from '@/components/AddBook'

const Main = () => {
  
  return (
    <Box component="main">
      <Container maxWidth="xl">
        <Routes>
          <Route path="/books" element={<BookList/>}/>
          <Route path="/add-book" element={<AddBook/>}/>
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