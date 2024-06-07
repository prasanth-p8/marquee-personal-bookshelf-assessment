import { useEffect, useState } from 'react'
import Loader from 'react-loader-spinner'
import BookList from '../BookList'
import Header from '../Header'
import { FaSearch } from "react-icons/fa";
import {HomeMainContainer, SearchHeading,SearchContainer,
    SearchBox, SearchInput,SearchButton,BooksListContainer,
    BookListHeading,RenderBooksList,BookListContainer,
    RenderingMainContainer,NoBooksFound,NoBookHeading,
    LoadingContainer,FailureContainer,FailureViewImage,
    FailureViewContent,FailureButton
} from './styledComponents'


const apiConstants = {
    initial:"INITIAL",
    inProgress:"IN_PROGRESS",
    success:"SUCCESS",
    failure:"FAILURE"
}

const getMyBookShelf = JSON.parse(localStorage.getItem("bookshelf"))


const Home = () => {
    const [userSearch, setUserSearch] = useState('')
    const [apiStatus, setApiStatus] = useState({
        status: apiConstants.initial,
        data:null
    })

    const [myBookShelf, setMyBookShelf] = useState(getMyBookShelf === null ? [] : getMyBookShelf)
    

    const changeInput = event => {
        setUserSearch(event.target.value)
    }

    const searchBooks = () => {
        getBooksList()
    }
    const getBooks = event => {
        if(event.key==="Enter"){
            getBooksList()
        }
    }

    const onSuccess = bookList => {
        const formatBookData =  bookList.map(book => ({
            title:book.title,
            authorName: book.author_name[0],
            publishedYear: book.first_publish_year,
            ratingsAverage: book.ratings_average,
            ratingsCount:book.ratings_count,
            editionCount:book.edition_count,
            id:book.cover_i
        }))

        
        setApiStatus({status: apiConstants.success,
            data:formatBookData})

    }

    const searchQuery = userSearch === "" ? "Harry Potter" : userSearch
const getBooksList = async() => {
    setApiStatus({status: apiConstants.inProgress,
        data:null})

        

        const url = `https://openlibrary.org/search.json?q=${searchQuery}&limit=10&page=1`

        const response = await fetch(url)
        const responseData = await response.json()
        if(response.ok){
            onSuccess(responseData.docs)
        }else{
            setApiStatus({status: apiConstants.failure,
                data:null})
        }

}

const addMyBookshelf = bookId => {
    const {data} = apiStatus

    const findBook = data.filter(eachBook => eachBook.id === bookId)
    const chechBook = myBookShelf.find(eachBook => eachBook.id === bookId)
   
    if(chechBook === undefined){
        setMyBookShelf(prevState => [...prevState, findBook[0]])
    }
}

const deleteMyBookshelf = bookId => {
    const updatedBookshelf = myBookShelf.filter(eachBook => eachBook.id !== bookId)
    setMyBookShelf(updatedBookshelf)
}


useEffect(() => {
    localStorage.setItem('bookshelf', JSON.stringify(myBookShelf))
},[myBookShelf])


    useEffect(() => {
getBooksList()
    }, [myBookShelf])

    


    const renderLoadingView = () => (
    <LoadingContainer>
        <Loader type='TailSpin' color="#740091" height={70} width={70} />
    </LoadingContainer>
    )

    const renderSuccessView = () => {
const {data} = apiStatus

const display = data.length !== 0


        return(
            <RenderingMainContainer>
                <BookListHeading>Search Result for {userSearch === '' ? "Harry Potter" : userSearch}</BookListHeading>
                {display &&  <BookListContainer>
                                {data.map(eachBook => 
                                <BookList 
                                key={eachBook.id}
                                 bookData={eachBook}
                                 addBooks={addMyBookshelf}
                                 deleteBooks={deleteMyBookshelf}
                                 />)}
                            </BookListContainer>}
                    {!display && <NoBooksFound>
                                    <NoBookHeading>No Book Found</NoBookHeading>
                                </NoBooksFound>}
            </RenderingMainContainer>
            
        )
    }
    const renderFailureView = () => <FailureContainer>
<FailureViewImage src='https://www.shutterstock.com/image-vector/3d-website-testing-warning-error-600nw-2256309005.jpg' alt='failure view image'/>
    <FailureViewContent>Oops! An Error Occurred...</FailureViewContent>
    <FailureButton onClick={getBooksList}>Try Again</FailureButton>
    </FailureContainer>



    const renderBooksList = () => {
        const {status} = apiStatus

        switch(status){
                case apiConstants.inProgress:
                    return renderLoadingView()
                case apiConstants.success:
                    return renderSuccessView()
                case apiConstants.failure:
                    return renderFailureView()
                default:
                    return null    
        }
    }

    

    return (
        <HomeMainContainer>
            <Header />
            <SearchContainer>
                <SearchHeading>Search A Book</SearchHeading>
                <SearchBox>
                    <SearchInput type='search' 
                    placeholder='seach for a book name' 
                    onChange={changeInput}
                    value={userSearch}
                    onKeyDown={getBooks}
                    />
                    <SearchButton onClick={searchBooks}><FaSearch size={20} /></SearchButton>
                </SearchBox>
            </SearchContainer>
            <BooksListContainer>
                <RenderBooksList>{renderBooksList()}</RenderBooksList>
            </BooksListContainer>
        </HomeMainContainer>
    )


}

export default Home