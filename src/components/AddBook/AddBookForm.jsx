import { useContext, useState } from 'react'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@/components/Button'
import { FormGroup, Grid } from '@mui/material'
import Switch from '@mui/material/Switch'
import BookListContext from '@/contexts/BookListContext/BookListContext'
import FormControlLabel from '@mui/material/FormControlLabel'

const initialState = {
  title: '',
  author: '',
  cover: '',
  isRead: false,
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
  
  const handleInputChange = event => {
    setBook(prev => ({...prev, [event.target.name] : event.target.value}))
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
              onChange={handleInputChange}
              sx={{
                marginBottom: 2,
              }}
              autoComplete="off"
            />
            
            <TextField
              type="text"
              name="author"
              label="Author"
              size="small"
              value={book.author}
              onChange={handleInputChange}
              sx={{
                marginBottom: 2,
              }}
              autoComplete="off"
            />
            
            <TextField
              type="text"
              name="cover"
              label="Url of Cover Image"
              size="small"
              value={book.cover}
              onChange={handleInputChange}
              sx={{
                marginBottom: 2,
              }}
              autoComplete='off'
            />
            
            <FormGroup
              sx={{
                marginBottom: 2,
              }}
            >
              <FormControlLabel
                control={
                  <Switch
                    name="isRead"
                    color="primary"
                    value={book.isRead}
                    onChange={handleInputChange}
                  />
                }
                label="Read"
              />
            </FormGroup>
            
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
