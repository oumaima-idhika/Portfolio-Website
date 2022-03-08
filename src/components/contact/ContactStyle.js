

import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #fff;
  background: #171717;
  height: calc(100vh - 80px);
  width: 100%;

  @media screen and  (max-width: 768px) {
    padding: 100px 0;
  }
`


export const InfoWrapper = styled.div`

max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;
  margin-top : 30px ;
`

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
export const ImgWrap = styled.div`
  max-width: 500px;
  height: 100%;
`;
export const Img = styled.img`
  width: 100%;
  height : 400px;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
export const GridForm = styled.form`
display: grid;
grid-template-areas:
  'title title'
  'name email'
  'message message'
  'empty submit';
gap: 40px;
padding: 10px;
@media screen and (max-width: 768px) {
    grid-template-areas:'title' 'name' 'email' 'message' 'submit' ;
  }

`
export const InputTitle = styled.h2`

  font-size: 1.6rem;
  line-height: 1.1;
  font-weight: 600px;
  margin-bottom : 10px;
 
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
        grid-area: title ;

`
export const InputName = styled.input`
background: transparent;
border-radius: 4px;
outline: none;
border : solid 1px white ;
height : 40px;
box-shadow: none;
padding-left : 10px;
font-size : 1rem ;
color :white;
font-weight : bold;
		&:hover,
		&:focus {
			border-color: #66faff;
		}
        grid-area: name ;

`
export const InputEmail = styled.input`
background: transparent;
border-radius: 4px;
outline: none;
box-shadow: none;
padding-left : 10px;
font-size : 1rem ;
font-weight : bold;
border : solid 1px white ;
color : white ;
		
		&:hover,
		&:focus {
			border-color: #66faff;
		}
        grid-area: email ;

`

export const InputMessage = styled.textarea`
background: transparent;
border-radius: 4px;
outline: none;
box-shadow: none;
border : solid 1px white ;
padding: 10px;
font-size : 1rem ;
color : white ;
font-weight : bold;
		
		&:hover,
		&:focus {
			border-color: #66faff;
		}
        grid-area: message ;

`

export const InputSubmit = styled.input`
border-radius : 5px ;
background : #66faff;

height : 50px;
color :  #737373;
font-weight :bold;
font-size : 16px;
border : none ;
outline : none ;
cursor : pointer;

transition : all 0.2S ease-in-out;
&:hover {
  transition : all 0.2S ease-in-out; 
  background : #737373;
  color : white ;
}
        grid-area: submit ;

`
export const Empty = styled.div`
grid-area: empty ;

`