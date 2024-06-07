import {Book,
        LabelContainer,
        LabelTitle,
        Title,
        BookButton,
        HighLight
    } from  './styledComponents'
    
    const getMyBookShelf = JSON.parse(localStorage.getItem("bookshelf"))

const BookList = props => {

    const {bookData,addBooks,deleteBooks} = props
    const {id,title,editionCount,authorName,publishedYear,ratingsAverage,ratingsCount} = bookData
    const rating = Math.round(ratingsAverage*10)/10
    const displayRating = isNaN(rating)? "No Rating" : rating 
    const displayRatingCount = ratingsCount === undefined ? "0" : ratingsCount

    const searchBook = getMyBookShelf.find(eachBook => eachBook.id === id)

    const buttonText = searchBook === undefined

    const addToMyBookshelf = () => {
        addBooks(id)
    }

    const deleteFromMyBookshelf = () => {
        deleteBooks(id)
    }

    return (
        <Book>
            <LabelContainer>
            <LabelTitle>Book Title:</LabelTitle>
            <Title><HighLight>{title}</HighLight></Title>
            </LabelContainer>
            <LabelContainer>
            <LabelTitle>Edition Count:</LabelTitle>
            <Title>{editionCount}</Title>
            </LabelContainer>
            <LabelContainer>
            <LabelTitle>Author Name:</LabelTitle>
            <Title>{authorName}</Title>
            </LabelContainer>
            <LabelContainer>
            <LabelTitle>Published Year:</LabelTitle>
            <Title>{publishedYear}</Title>
            </LabelContainer>                
            <LabelContainer>
            <LabelTitle>Average Rating:</LabelTitle>
            <Title>{displayRating}</Title>
            </LabelContainer>
            <LabelContainer>
            <LabelTitle>Rating Count:</LabelTitle>
            <Title>{displayRatingCount}</Title>
            </LabelContainer>
            {buttonText && <BookButton onClick={addToMyBookshelf} add="true">Add to Bookshelf</BookButton>}
            {!buttonText && <BookButton onClick={deleteFromMyBookshelf}>Delete from Bookshelf</BookButton>}
        </Book> 
    )
}

export default BookList