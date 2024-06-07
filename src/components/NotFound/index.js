import {NotFoundContanier, NotFoundImage, NotFoundButton}from  './styledComponents'

const NotFound = () => <NotFoundContanier>
    <NotFoundImage src='https://res.cloudinary.com/dlefoxknm/image/upload/v1717780148/404-error-page-not-found-on-website-vector-20897697_byuumf.jpg' alt='not found image'/>
    <NotFoundButton>Go to Homepage</NotFoundButton>
</NotFoundContanier>

export default NotFound