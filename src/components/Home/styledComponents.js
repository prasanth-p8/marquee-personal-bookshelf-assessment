import styled from 'styled-components'

export const HomeMainContainer = styled.div`
   background-image: linear-gradient(to bottom, #da45ff, #740091);
   min-height:100vh;
   padding:30px;
   max-width:400px;
   @media (min-width:401px){
   max-width:800px;
   padding-left:40px;
   padding-right:40px;
   }
   @media (min-width:861px){
   max-width:100%;
    padding-left:60px;
   padding-right:60px;
   }
`

export const SearchContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
export const SearchHeading = styled.h1`
font-family:roboto;
font-size:20px;
color:#bcbdbb;
@media (min-width:401px){
   font-size:24px;
   }
   @media (min-width:861px){
   font-size:28px;
   }
`

export const SearchBox = styled.div`
background-color:#ffffff;
border-radius:4px;
border:2px solid #7e8f8d;
height:30px;
padding-left:5px;
padding-right:5px;
display:flex;
justify-content:space-between;
align-items:center;
@media (min-width:401px){
 width:280px;
 height:40px;
   }
   @media (min-width:861px){
 width:320px;
 height:50px;
   }
` 

export const SearchInput = styled.input`
border:none;
outline:none;
color:#2e2e2e;
height:100%;
width:100%;
font-size:16px;
padding:10px;
@media (min-width:401px){
font-size:17px;
   }
@media (min-width:861px){
font-size:18px;
   }
`
export const SearchButton = styled.button`
border:none;
background-color:transparent;
`
export const BooksListContainer = styled.div``

export const BookListHeading = styled.h1`
font-size:24px;
font-family:"Segoe UI";
@media (min-width:401px){
font-size:28px;
}
@media (min-width:861px){
font-size:32px;
}
`

export const RenderBooksList = styled.div``

export const BookListContainer = styled.ul`
padding-left:0;
list-style-type:none;
display:flex;
flex-wrap:wrap;
justify-content:center;
`



export const RenderingMainContainer = styled.div``

export const NoBooksFound = styled.div`
background-image:url("https://t4.ftcdn.net/jpg/00/78/48/79/360_F_78487923_cordV8UB0ZUyu3WRbLG4IRVCP65BExyh.jpg");
background-size:cover;
background-position:center;
min-height:60vh;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
border-radius:10px;
`
export const NoBookHeading = styled.h1`
font-size:60px;
`
export const LoadingContainer= styled.div`
min-height:70vh;
display:flex;
justify-content:center;
align-items:center;
`

export const FailureContainer = styled.div`
text-align:center;
` 

export const FailureViewImage = styled.img`
margin-top:40px;
width:300px;
border-radius:10px;
@media (min-width:521px){
width:400px;
border-radius:20px;
}
`
export const FailureViewContent = styled.h1`
color:#fa5c5c;
@media (min-width:521px){
font-size:34px;
}
`

export const FailureButton = styled.button`
width:100px;
height:40px;
font-weight:600;
padding:2px 6px 2px 6px;
font-size:15px;
border:none;
background-color:#ffffff;
cursor:pointer;
outline:none;
border-radius:4px;
@media (min-width:521px){
width:120px;
height:50px;
}
` 