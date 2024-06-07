import BookList from '../BookList'
import Header from '../Header'
import {RenderBookShelf,MyBooksContainer,
    MyBooksHeading,BookListContainer,
    NoBookAvaliable} from './styledComponents'

const getMyBookShelf = JSON.parse(localStorage.getItem("bookshelf"))


const Bookshelf = () => {

    const bookAvailable = getMyBookShelf.length !== 0

    console.log(bookAvailable)
    const deleteMyBookshelf = bookId => {
        const updatedBookshelf = getMyBookShelf.filter(eachBook => eachBook.id !== bookId)
        localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf))   
    }

return(
    <RenderBookShelf>
           <Header />
        {bookAvailable && <MyBooksContainer>
            <MyBooksHeading>My Bookshelf</MyBooksHeading>
            <BookListContainer>
                {getMyBookShelf.map(eachBook => <BookList key={eachBook.id}  
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