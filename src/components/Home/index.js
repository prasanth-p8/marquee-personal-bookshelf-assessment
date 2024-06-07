import { useEffect, useState } from 'react'
import Header from '../Header'
import {HomeMainContainer, Heading} from './styledComponents'


const ApiConstants = {
    initial:"INITIAL",
    inProgress:"IN_PROGRESS",
    success:"SUCCESS",
    failure:"FAILURE"
}

const Home = () => {
    const [userSearch, setUserSearch] = useState('')
    const [apiStatus, setApiStatus] = useState({
        status: ApiConstants.initial,
        data:null
    })



    return (
        <HomeMainContainer>
            <Header />
            <Heading>Hello</Heading>
        </HomeMainContainer>
    )


}

export default Home