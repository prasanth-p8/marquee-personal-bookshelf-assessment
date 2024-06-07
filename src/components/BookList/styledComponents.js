import styled from "styled-components";

export const Book = styled.li`
background-image:linear-gradient(to bottom, #f2a600, #fff5e0);
background-size:cover;
display:flex;
flex-direction:column;
justify-content:space-between;
padding:20px;
border-radius:6px;
margin-bottom:20px;
width:270px;
height:350px;
box-shadow: 4px 3px 2px 2px #e7ff61;
@media (min-width:401px){
width:300px;
margin-right:20px;
}
`

export const LabelContainer = styled.div`
display:flex;
align-items:center;
`


export const LabelTitle = styled.label`
min-width:100px;
font-size:16px;
font-weight:600;
`

export const HighLight = styled.span`
font-weight:700;
font-size:16px;
color:#363636;
`

export const Title = styled.p`
margin-left:10px;
font-size:14px;
`

export const BookButton = styled.button`
align-self:center;
width:200px;
height:50px;
color:${props => props.add? "#000000" : "#ffffff"};
font-size:15px;
background-color:${props => props.add? "#00cc36" : "#eb1737"} ;
font-weight:600;
border:none;
outline:none;
cursor:pointer;
border-radius:5px;
`