import { useState } from 'react'
import PropTypes from 'prop-types'
import BookListContext from './BookListContext'

const BookListContextProvider = ({ children }) => {
  const [books, setBooks] = useState([])
  
  const addBook = book => {
    setBooks(prev => [...prev, book])
  }
  
  const removeBook = id => {
    setBooks(prev => prev.filter(book => book.id !== id))
  }
  
  const updateBook = updatedBook => {
    setBooks(prev => {
      return prev.map(book => {
        if (book.id === updatedBook.id) {
          return updatedBook
        }
        return book
      })
    })
  }
  
  const providerValue = {
    books,
    addBook,
    removeBook,
    updateBook,
  }
  
  return (
    <BookListContext.Provider value={providerValue}>
      {children}
    </BookListContext.Provider>
  )
}

BookListContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BookListContextProvider