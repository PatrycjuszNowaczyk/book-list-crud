import { useContext, useState } from 'react'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@/components/Button'
import { Grid } from '@mui/material'
import BookListContext from '@/contexts/BookListContext/BookListContext'

const initialState = {
  title: '',
}

const AddBookForm = () => {
  const { addBook } = useContext(BookListContext)
  const [book, setBook] = useState(initialState)
  
  const handleSubmit = event => {
    event.preventDefault()
    const id = new Date().getTime()
    const bookToAdd = { id, ...book }
    addBook(bookToAdd)
    setBook(initialState)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={0} sm={2} md={3} xl={4}/>
        
        <Grid item xs={12} sm={8} md={6} xl={4}>
          <Stack>
            <TextField
              type="text"
              name="title"
              label="Title"
              size="small"
              value={book.title}
              onChange={event => setBook({ ...book, title: event.target.value })}
              sx={{
                marginBottom: 2,
              }}
              autoComplete='off'
            />
            
            <Button
              type="submit"
              variant="contained"
            >
              Add Book
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </form>
  )
}

export default AddBookForm