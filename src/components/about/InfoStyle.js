import styled from 'styled-components';
import {Link} from 'react-scroll';
import {BsArrowDownSquareFill} from 'react-icons/bs';
import {FaKaggle} from 'react-icons/fa';
import {RiLinkedinFill} from 'react-icons/ri';
import {FiGithub} from 'react-icons/fi';


export const InfoContainer = styled.div`
  color: #fff;
  background: #171717;
  @media screen and  (max-width: 768px) {
    padding: 100px 0;
  }
`
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: calc(100vh - 80px);
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`
export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';
  @media screen and (max-width: 768px) {
    grid-template-areas:'col1' 'col2' ;
  }
`
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`
export const TopLine = styled.p`
color : #f5e9db ;
  font-size: 0.8rem;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 2rem;
  line-height: 1.1;
  font-weight: 600px;
  color: #f7f8fa;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`
export const Subtitle  = styled.p`
  max-width: 500px;
  margin-bottom: 35px;
  font-size: 1rem;
  line-height: 24px;
  color : #737373 ;
`
export const BtnWrap = styled.div`
  display:flex;
  justify-content: start;
  
  
  
`;
export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const  Button1 = styled(Link)`
border-radius : 5px ;
background : #737373;
white-space : nowrap;
padding :   14px 48px;
margin-right : 1.5rem;
color :  #fff;
font-size : 16px;
border : none ;
outline : none ;
cursor : pointer;
display:flex;
justify-content : center ;
align-items : center;
transition : all 0.2S ease-in-out;
&:hover {
  transition : all 0.2S ease-in-out; 
  background : #66faff;
  color : #737373 ;

`;

export const  Button2 = styled(Link)`
border-radius : 5px ;
border : 1px solid #66faff ;
white-space : nowrap;
padding :   14px 48px;
color :  #fff;
font-size : 16px;
outline : none ;
cursor : pointer;
display:flex;
justify-content : center ;
align-items : center;
transition : all 0.2S ease-in-out;
&:hover {
  transition : all 0.2S ease-in-out; 
  background : #66faff;
  color : #737373 ;

`;

export const Span = styled.span`
 color : #66faff ;
`;

export const DownIcon = styled(BsArrowDownSquareFill)`
color : #66faff;
font-size : 30px;
box-shadow: inset 0 0 10px #000000;
cursor : pointer;
animation: MoveUpDown 2s linear infinite;
 
    position: absolute;
    
    bottom: 20px;
  
  
  @keyframes MoveUpDown {
    0%, 100% {
      bottom: 20;
    }
    50% {
      bottom: 30px;
    }
  };
  opacity : 1;

@media screen and (max-width: 480px) {
  opacity: 0;
}
  
 

`
export const IconWrapper = styled.div`
display : flex ;
justify-content : center;


`

export const Media = styled.div`
display : block ;
position: fixed;
top: 50%;
margin-left : 30px;
-webkit-transform: translateY(-50%);
-ms-transform: translateY(-50%);
transform: translateY(-50%);
@media screen and (max-width: 1380px) {
  display: none;
}


`
export const Linkedin = styled(RiLinkedinFill)`
display: block;
 


`
export const Kaggle = styled(FaKaggle)`
display: block;
  

`
export const Github = styled(FiGithub)`
display: block;


`
export const Round = styled.div`

padding : 12px;
border-radius : 50%;
background-color : grey ;
margin : 14px;
cursor : pointer;
transition : all 0.2S ease-in-out;
&:hover {
  transition : all 0.2S ease-in-out; 
  background : #66faff;
  color : #737373 ;


`
