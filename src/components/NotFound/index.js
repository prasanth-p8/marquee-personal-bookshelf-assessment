import {NotFoundContanier, NotFoundImage, NotFoundButton}from  './styledComponents'
import { Link } from 'react-router-dom'

const NotFound = () => <NotFoundContanier>
    <NotFoundImage src='https://res.cloudinary.com/dlefoxknm/image/upload/v1717780148/404-error-page-not-found-on-website-vector-20897697_byuumf.jpg' alt='not found image'/>
    <Link to='/'>
    <NotFoundButton>Go to Homepage</NotFoundButton>
    </Link>
</NotFoundContanier>

export default NotFound