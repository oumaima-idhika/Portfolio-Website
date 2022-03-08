import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
background-color : #171717;

height:80px ;
display:flex;
justify-self : center;
font-size : 1rem;
font-weight : bold;
position:sticky;
top:0;
z-index : 10;

@media screen and (max-width:960px){


    transition : 0.8s all ease;
}


`
export const NavbarContainer = styled.div`
display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;

`
export const NavLogo = styled(LinkS) `
color:#fff;
justify-content : flex-start;
cursor:pointer;
font-size : 1.7rem;
display : flex;
align-items:center;
margin-left : 100px;
font-weight:bold;
text-decoration : none;
@media screen and (max-width: 768px) {
    margin-left : 0px;
  }

`;

export const MobileIcon = styled.div`
display:none;
@media screen and (max-width:768px){
    display:block;
    position:absolute;
    top : 0;
    right:0;
    transform : translate(-100% , 60%);
    font-size : 1.8rem ;
    cursor : pointer;
    color : #d9d9d9 ;
}

`

export const NavMenu = styled.ul `
display:flex;
justify-content: center;
list-style: none;
text-align: center;
color : #f5e9db ;

margin-right: -22px;
@media screen and (max-width: 768px) {
  display: none;
}

`;

export const NavItem = styled.li`
height:80px;
color : #f5e9db ;

`

export const NavLinks = styled(LinkS)`


  color : #f5e9db ;
  display: flex; 
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
 
  &:hover{
      color : #66faff ;
      transition : 0.4S ease-in-out
  }

`

