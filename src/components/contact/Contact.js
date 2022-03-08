import React, { useEffect }  from 'react';
import { InfoContainer, InfoWrapper , Heading , InfoRow , Column1, Column2 , ImgWrap , Img ,Empty , GridForm , InputEmail ,InputName,InputTitle,  InputSubmit ,InputMessage } from './ContactStyle';
import img from '../images/contact.svg';

export default function Contact() {

  return (
    
    <InfoContainer id='about'>
        <Heading>Contact</Heading>
      <InfoWrapper>
      <InfoRow>
          <Column2>
        <GridForm>
        <InputTitle>Interested to work together? Let's talk</InputTitle>
        <InputName type="text" name="name" placeholder="Name" />
        <InputEmail type="email" name="email" placeholder="Email" />
        <InputMessage name="message" rows="12"  placeholder="Message" />
        <Empty />
        <InputSubmit type = "submit" value = "Send Message " />
        

        </GridForm>

          </Column2>
          <Column1>
          <ImgWrap>
              <Img src={img} alt="contact"/>
            </ImgWrap>
          </Column1>
         
          </InfoRow>
    </InfoWrapper>
    </InfoContainer>
 
  )
}
