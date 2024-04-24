import { useContext } from 'react'
import BookListContext from '@/contexts/BookListContext/BookListContext'
const AddBook = () => {
  const { addBook } = useContext(BookListContext)

  const handleAddBook = (event) => {
    event.preventDefault()
    const id = new Date().getTime()
    const title = event.target.title.value
    addBook({ id, title })
  }

  return (
    <form onSubmit={handleAddBook}>
      <label>
        Title:
        <input type="text" name="title"/>
      </label>
      <button type="submit">Add Book</button>
    </form>
  )
}

export default AddBook