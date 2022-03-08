
import {BiChevronRightCircle} from 'react-icons/bi';
import styled, { keyframes } from 'styled-components';
import { zoomOut } from 'react-animations';

export const InfoContainer = styled.div`
  color: #fff;
  background: #171717;
  height: calc(100vh - 80px);
  width: 100%;

  @media screen and  (max-width: 768px) {
    padding: 100px 0;
  }
`
export const ItemIcon = styled(BiChevronRightCircle)`
color : #66faff ;
font-size : 30px ;
margin-right : 10px;
`


export const InfoWrapper = styled.div`

max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;
  margin-top : 30px ;
`
export const bounceAnimation = keyframes`${zoomOut}`;
 
export const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;
export const Heading = styled.h1`
  

padding-top: 60px;
  
text-align : center ;
  font-size: 2rem;
  line-height: 1.1;
  font-weight: 600px;
  color: #66faff;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const SkillLeft= styled.div`
  

padding-top: 40px;
display : flex ;
justify-content : flex-start ;
  font-size: 1.5rem;
  font-weight: 500px;
  color: gray;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`
export const Details= styled.span`
  
color : #66faff ;
font-size: 1rem;

`

export const SkillRight= styled.div`

padding-top: 40px;
text-align: right;
display : flex ;
justify-content : flex-end ;
  font-size: 1.5rem;
  
  color: gray;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`
