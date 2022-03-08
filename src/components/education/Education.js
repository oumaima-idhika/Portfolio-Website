import React , {useRef , useEffect} from 'react';
import { InfoContainer , InfoWrapper , Heading} from './EducationStyle';
import img from '../images/svg-girl.svg';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../about/about.scss';

export default function Education() {
   

  return (
    
    <InfoContainer id='about'>
      <Heading>Education</Heading>
      <InfoWrapper>
      
      <VerticalTimeline className='vertical-timeline'>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#545454', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #66faff' }}
    date="2011 - present"
    dateClassName="date-timeline"
    iconStyle={{ background: '#a6a6a6', color: '#737373' }}
   
  >
    <h3 className="vertical-timeline-element-title title-timeline">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle title-timeline">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    contentStyle={{ background: '#545454', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #66faff' }}
    iconStyle={{ background: '#a6a6a6', color: '#737373'  }}
    
  >
    <h3 className="vertical-timeline-element-title title-timeline">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle title-timeline">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  </VerticalTimeline >
    </InfoWrapper>
    </InfoContainer>
 
  )
}
