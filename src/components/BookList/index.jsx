import { useContext } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import BookListContext from '@/contexts/BookListContext/BookListContext'
import { CardMedia } from '@mui/material'

const BookList = () => {
  const { books } = useContext(BookListContext)
  
  return (
    <Grid
      container
      spacing={{xs: 2, md: 3}}
      sx={{
        marginTop: 2,
      }}
    >
      {books.map(book => (
        <Grid key={book.id} item xs={12} sm={6} lg={4} xl={3}>
          <Card>
            <CardHeader
              title={book.title}
              subheader={book.author ?? null}
              sx={{
                textAlign: 'center',
              }}
            />
            
            <CardMedia
              component="img"
              image={book.cover ?? 'https://via.placeholder.com/300'}
              alt={book.title}
              sx={{ aspectRatio: '16/9'}}
            />
            
            is read: {book.isRead ? 'yes' : 'no'}
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default BookList