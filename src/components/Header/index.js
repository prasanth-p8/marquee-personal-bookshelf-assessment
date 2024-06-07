import {Link} from 'react-router-dom'
import {HeaderMainCotainer,LogoContainer,LogoImage,WebsiteHeading,BookshelfButton,MobileBookshelfButton} from './styledComponents'

const Header = () => {

return(
    <HeaderMainCotainer>
        <Link to='/'>
        <LogoContainer >
            <LogoImage src='https://res.cloudinary.com/dlefoxknm/image/upload/v1717744147/favicon_benghl-removebg-preview_sb3gko.png' alt='website logo' />
            <WebsiteHeading>Bookshelf</WebsiteHeading>
        </LogoContainer>
        </Link>
        <Link to='/shelf'>
            <MobileBookshelfButton  />
             <BookshelfButton>My Bookshelf</BookshelfButton>
        </Link>
    </HeaderMainCotainer>
 
)}


export default (Header)