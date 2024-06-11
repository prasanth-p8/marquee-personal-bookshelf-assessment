import styled from "styled-components";
import { GiBookshelf } from "react-icons/gi";

export const HeaderMainCotainer = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:30px;
`


export const LogoContainer = styled.div`
max-width:80px;
text-align:center;
@media (min-width:401px){
max-width:100px;
}
@media (min-width:861px){
max-width:120px;
}
`

export const LogoImage = styled.img`
width:50px;
@media (min-width:401px){
width:70px;
}
@media (min-width:861px){
width:90px;
}
`

export const WebsiteHeading = styled.h1`
font-size:16px;
color:#ffffff;
font-weight:500;
font-family:Segoe UI;
display:inline;
@media (min-width:401px){
font-size:18px;
}
@media (min-width:861px){
font-size:20px;
}

`

export const BookshelfButton = styled.button`
@media (max-width:860px){
display:none
}
@media (min-width:861px){
width:170px;
font-size:20px;
height:60px;
padding:8px 14px 8px 14px;
border:none;
background-color:#00cc36;
color:#ffffff;
font-weight:500px;
cursor:pointer;
outline:none;
border-radius:8px;
box-shadow: 4px 3px 2px 2px #69fa90;
}

`
export const MobileBookshelfButton = styled(GiBookshelf)`
width:80px;
height:40px;
padding:2px 6px 2px 6px;
border:none;
background-color:#ffffff;
cursor:pointer;
outline:none;
border-radius:4px;
box-shadow: 4px 3px 2px 2px #dedede;

@media (min-width:401px){
width:100px;
height:50px;
padding:5px 10px 5px 10px;
border-radius:8px;
}

@media (min-width:861px){
display:none;
}
`