import { useContext } from 'react'
import BookListContext from '@/contexts/BookListContext/BookListContext'

const BookList = () => {
  const { books } = useContext(BookListContext)
  
  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>
          {book.title}
        </li>
      ))}
    </ul>
  )
}

export default BookList