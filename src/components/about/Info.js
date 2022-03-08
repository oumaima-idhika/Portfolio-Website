import React , {useRef , useEffect , useState} from 'react';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2,Github , Linkedin ,Round , Kaggle, TextWrapper,IconWrapper, TopLine, Heading, Media , Subtitle,Span ,DownIcon,  BtnWrap, ImgWrap, Img  , Button1 , Button2} from './InfoStyle'
import img from '../images/svg-girl.svg';
import './about.scss';
import {init} from 'ityped';


export default function Info() {
    const [isVisible, setIsVisible] = useState(true);
    const [height, setHeight] = useState(0)
    
    useEffect(() => {   
      window.addEventListener("scroll", listenToScroll);
      return () => 
         window.removeEventListener("scroll", listenToScroll); 
    }, [])
    
    const listenToScroll = () => {
      let heightToHideFrom = 200;
      const winScroll = document.body.scrollTop || 
          document.documentElement.scrollTop;
      setHeight(winScroll);
  
      if (winScroll > heightToHideFrom) {  
           isVisible && setIsVisible(false);
      } else {
           setIsVisible(true);
      }  
    };
    const Emoji = props => (
        <span
          className="emoji"
          role="img"
          aria-label={props.label ? props.label : ""}
          aria-hidden={props.label ? "false" : "true"}
        >
          {props.symbol}
        </span>
      );

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, { 
            showCursor: false, 
            backDelay: 1500,
            backSpeed:60,
            showCursor:true,
            strings: ['Oumaima Idhika','Data engineer', 'ML and AI enthusiast'] 
        })
    } , [])

  return (
    
    <InfoContainer id='about'>
        <Media>
           <Round><Github /> </Round> 
            <Round> <Kaggle /></Round> 
            <Round><Linkedin /></Round> 
            </Media> 
      <InfoWrapper>
        <InfoRow>
          <Column1>
            <TextWrapper>
              <TopLine>Welcome to my Portfolio website 👋 </TopLine>
              <Heading>Hi there <Emoji symbol="✨" />, I'm <Span ref={textRef}></Span> </Heading>
              <Subtitle>I am Oumaima , a second year data engineer , passionately curious about Machine Learning and AI , Feel free to check my projects and contact me :)</Subtitle>
              <BtnWrap>
                <Button1 to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                
                >Download CV
                </Button1>
                <Button2 to='contact'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                
                >Contact me
                </Button2>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt="girl"/>
            </ImgWrap>
          
          </Column2>
        </InfoRow>
        
      </InfoWrapper>
      {
        isVisible 
         && 
         <IconWrapper>
         <DownIcon/>
         </IconWrapper>
      }
     
    </InfoContainer>
 
  )
}
