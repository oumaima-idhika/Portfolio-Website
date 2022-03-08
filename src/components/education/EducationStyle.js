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
  
  margin-top : 50px ;
`

export const Heading = styled.h1`
  

padding-top: 100px;
  
text-align : center ;
  font-size: 2rem;
  line-height: 1.1;
  font-weight: 600px;
  color: #66faff;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`