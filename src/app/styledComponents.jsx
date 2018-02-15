import styled,{css} from 'styled-components';
import {NavLink} from 'react-router-dom';


export const flexRow = styled.div`
   display : flex;
   flex-direction : row;

`

export const flexColumn = styled.div`
   display : flex;
   flex-direction : column;

`
export const StyledAppTemplate = styled.div`
  position : absolute;
  width : 100%;
  top : 0 ;
  left : 0 ;
  background: #5db3e9;
  height : 100vh;
  overflow-y: auto;
`

export const AppTemplateBody = styled.div`
  margin : 110px 0 0 0 ;
`

export const StyledAppBar = styled.div`
  position : absolute;
  top : 0 ;
  left : 0 ;
  /*padding : 10px 0 0 20px ;*/
  text-align: left;
  width : 100%;
  height : 63px;
  background-color: white;
  z-index : 10;
  box-shadow: 2px 2px 5px #111;
`

export const BarLeftBox = styled.div`
  float : left;
  margin : 20px 0 0 20px;
  display: flex;
  flex-direction: row;

`

export const BarRightBox = styled.div`
  float: right;
  margin : 5px 30px 0 0;
  display: flex ;
  flex-direction: row;
  /*border : 1px solid black;*/
  justify-content: space-between;

`

export const StyledLink = styled.a`
  text-decoration: none;
  color : #444;
  &:hover {
    text-decoration: none;
  }
  &:active {
    color : #ddd;
  }
  &:focus {
    text-decoration: none
  }
`

export const StyledBarIcon = styled.img`
  width : 150px;
  height : 30px ;
`


export const StyledAppMenu = styled.ul`
  list-style: none ;
  margin : 0 0 0 50px;
  padding : 0;
`

export const AppMenuItem = styled.li`
  display: inline;
  margin : 0 0 0 20px;
  padding : 0 0 17px 0 ;
  font-family: 'Patua One', cursive;
  ${({active}) => active && css`
    border-bottom : 4px solid #2014ac;
  `  }

`

export const AppMenuLink = styled.a`
    color : #2014ac;
    text-decoration: none;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600

`

export const StyledSearchField = styled(flexColumn)`
   width : 700px;
   margin: auto;

   p {
     font-size: 20px;
     color : #55f;
   }

   input {
     border-radius: 20px;
     height : 50px ;
     width : 600px;
     font-size: 20px;
     margin : 0 auto 10px auto;
     padding : 5px 0 5px 40px;
     border: 3px dashed #31e25b;

     &:focus{
       outline: none;
     }

     ::placeholder{

     }
   }

   button{
     width : 80px;
     height : 30px;
     margin : auto;
     background: white;
     color : #18d447;
     font-size: 15px;
     font-weight: bold;
     border : 2px solid #18d447;
     border-radius: 10px;
     cursor: pointer;

     transition: height .5s ease;
     transition: background: .5s ease;
     &:hover{
       /*background: #cff1a4;*/
       height : 35px;
     }
   }
`
