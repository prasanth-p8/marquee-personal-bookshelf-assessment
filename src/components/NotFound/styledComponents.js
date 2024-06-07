import styled from "styled-components";

export const  NotFoundContanier = styled.div`
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
min-height:70vh;
@media (min-width:600px){
min-height:90vh;
}
` 
export const NotFoundImage = styled.img`
width:200px;
@media (min-width:600px){
width:400px;
}
`
export const NotFoundButton = styled.button`
width:180px;
height:40px;
padding:2px 6px 2px 6px;
border:none;
color:#ffffff;
font-weight:700;
background-color:#03a7ff;
cursor:pointer;
outline:none;
border-radius:20px;
@media (min-width:600px){
width:230px;
height:60px;
padding:6px 16px 6px 16px;
font-size:18px;
}
`