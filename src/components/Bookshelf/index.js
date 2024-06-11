import { useState, useEffect } from 'react'
import BookList from '../BookList'
import Header from '../Header'
import {RenderBookShelf,MyBooksContainer,
    MyBooksHeading,BookListContainer,
    NoBookAvaliable} from './styledComponents'

const getMyBookShelfItems = () => {
    const parsedBookshelf = JSON.parse(localStorage.getItem("bookshelf"))
    return parsedBookshelf ? parsedBookshelf : [];
}

const Bookshelf = () => {

    const [myBookshelf, setMyBookshelf] = useState(getMyBookShelfItems)

useEffect(() => {
    localStorage.setItem('bookshelf',JSON.stringify(myBookshelf))
},[myBookshelf])

   

    const deleteMyBookshelf = bookId => {
        const updatedBookshelf = myBookshelf.filter(eachBook => eachBook.id !== bookId)
        setMyBookshelf(updatedBookshelf)
    }

    const bookAvailable = myBookshelf.length !== 0

return(
    <RenderBookShelf>
           <Header />
        {bookAvailable && <MyBooksContainer>
            <MyBooksHeading>My Bookshelf</MyBooksHeading>
            <BookListContainer>
                {myBookshelf.map(eachBook => <BookList key={eachBook.id}  
                deleteBooks={deleteMyBookshelf}
                bookData={eachBook}/> )}
            </BookListContainer>
            </MyBooksContainer>}
        {!bookAvailable && <NoBookAvaliable>
            <MyBooksHeading>My Bookshelf</MyBooksHeading>
            <MyBooksHeading>EMPTY</MyBooksHeading>
            </NoBookAvaliable>}
    </RenderBookShelf>

)

}

export default Bookshelf