import styled from "styled-components";

export const RenderBookShelf = styled.div`
background-color:#da45ff;
   padding:30px;
`

export const MyBooksContainer = styled.div`
background-image:url("https://wallpapers.com/images/hd/bookshelf-zoom-background-ha74tyl8r5ix631u.jpg");
background-size:cover;
min-height:100vh;
`

export const MyBooksHeading = styled.h1`
text-align:center;
padding-top:10px;
padding-bottom:10px;
color:#ffffff;
background-color:#000000;
font-family:Segoe UI;
margin-top:0;
margin-bottom:0;
@media (min-width:401px){
padding-top:20px;
padding-bottom:20px;
font-size:40px;
}

`

export const BookListContainer = styled.ul`
padding-left:0;
list-style-type:none;
display:flex;
flex-wrap:wrap;
justify-content:center;
`
export const NoBookAvaliable = styled.div`
margin-top:20px;
background-image:url("https://img.freepik.com/premium-vector/empty-wooden-bookshelves_78072-673.jpg");
background-size:cover;
min-height:100vh;
background-position:center;
display:flex;
flex-direction:column;
justify-content:space-between;
`