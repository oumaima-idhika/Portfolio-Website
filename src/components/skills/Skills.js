import React, { useEffect }  from 'react';
import { InfoContainer, InfoWrapper , Heading , Details , SkillLeft , SkillRight , ItemIcon , BouncyDiv} from './SkillsStyle';
import {BiChevronRightCircle} from 'react-icons/bi';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Skills() {

  useEffect(() => {

Aos.init({duration:2000});

  },[]);
  return (
    
    <InfoContainer id='about'>
        <Heading>Skills</Heading>
      <InfoWrapper>
    <SkillLeft data-aos = "fade-right"><ItemIcon /> <div>  Machine Learning : <Details>Supervised/unsupervised (nltk , tensorflow , keras )</Details></div></SkillLeft>
     <SkillRight data-aos = "fade-left"> <ItemIcon /> <div>  Machine Learning : <Details>Supervised/unsupervised (nltk , tensorflow , keras )</Details></div></SkillRight>
     <SkillLeft  data-aos = "fade-right"><ItemIcon /> <div> Machine Learning : <Details>Supervised/unsupervised (nltk , tensorflow , keras )</Details></div></SkillLeft>
     <SkillRight data-aos = "fade-left"><ItemIcon /> <div>  Machine Learning : <Details>Supervised/unsupervised (nltk , tensorflow , keras )</Details></div></SkillRight>
     <SkillLeft  data-aos = "fade-right"><ItemIcon /> <div>  Machine Learning : <Details>Supervised/unsupervised (nltk , tensorflow , keras )</Details></div></SkillLeft>
     <SkillRight data-aos = "fade-left"> <ItemIcon /> <div>  Machine Learning : <Details>Supervised/unsupervised (nltk , tensorflow , keras )</Details></div></SkillRight>
     <SkillLeft  data-aos = "fade-right"><ItemIcon /> <div> Machine Learning : <Details>Supervised/unsupervised (nltk , tensorflow , keras )</Details></div></SkillLeft>
    </InfoWrapper>
    </InfoContainer>
 
  )
}
