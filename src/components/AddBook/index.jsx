import Box from '@mui/material/Box'
import AddBookForm from './AddBookForm'
import Typography from '@mui/material/Typography'

const AddBook = () => {
  
  return (
    <Box component="section">
      <Typography
        gutterBottom
        variant="h4"
        sx={{
          paddingTop: 2,
          textAlign: 'center',
        }}
      >
        Add Book
      </Typography>
      <AddBookForm/>
    </Box>
  )
}

export default AddBook