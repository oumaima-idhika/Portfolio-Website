import React from 'react';
import "./projects.scss";

export default function ProjectItem({id , title, active,setSelected}) {
  return (
    <li className={active ? "projectsList active" : "projectsList"}
    
    onClick={() => setSelected (id)}
    >

     {title}
    </li>
  )
}
