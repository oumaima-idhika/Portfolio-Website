import React, { useEffect , useState } from 'react';
import { featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio
    
    
    } from './data';
import ProjectItem from './ProjectItem';
import { Project , ListProjects , Item , ImgProject, Container , ItemTitle   } from './ProjectsStyle';
import { InfoWrapper , InfoContainer , Heading } from '../skills/SkillsStyle';

export default function Projects() {
    const [selected,setSelected]=useState("featured");
    const [data,setData]=useState([]);

    const list =[
        {
            id: "featured",
            title: "Featured",
          },
          {
            id: "web",
            title: "Web App",
          },
          {
            id: "mobile",
            title: "Mobile App",
          },
          {
            id: "design",
            title: "Design",
          },
          {
            id: "content",
            title: "Content",
          },
    ];


    useEffect(() =>{
        switch (selected) {
            case "featured":
              setData(featuredPortfolio);
              break;
            case "web":
              setData(webPortfolio);
              break;
            case "mobile":
              setData(mobilePortfolio);
              break;
            case "design":
              setData(designPortfolio);
              break;
            case "content":
              setData(contentPortfolio);
              break;
            default:
              setData(featuredPortfolio);
          }

    } ,[selected])
  return (
    <InfoContainer id='about'>
    <Heading>Projects</Heading>
  <InfoWrapper>
    <Project id= 'projects'>
     
     <ListProjects>
{list.map((item )=> (
    
    <ProjectItem title={item.title} 
    active = {selected === item.id} 
    setSelected= {setSelected} 
    id = {item.id}
    />
    
    ))}
     </ListProjects>
<Container>
    {data.map((item) => 
    
    <Item>
        <ImgProject src={item.img} />
        <ItemTitle>{item.title}</ItemTitle>
        </Item>
    
    
    )}
    
        </Container>

    </Project>
    </InfoWrapper>
    </InfoContainer>
  )
}