import React from 'react';
import { SidebarContainer , Icon , CloseIcon  } from './SidebarStyle';
import { SidebarMenu ,  SidebarWrapper , SidebarLink} from './SidebarStyle';
export default function Sidebar({isOpen , toggle}) {
  return (
    <SidebarContainer isOpen = {isOpen} onClick = {toggle}>
        <Icon onClick={toggle}>
        <CloseIcon />
        </Icon>
<SidebarWrapper>
    <SidebarMenu>
        <SidebarLink to = 'about' onClick={toggle}>
            About
        </SidebarLink>
        <SidebarLink to = 'education' onClick={toggle}>
            Education
        </SidebarLink>
        <SidebarLink to = 'skills' onClick={toggle}>
            Skills
        </SidebarLink>
        <SidebarLink to = 'contact' onClick={toggle}>
            Contact
        </SidebarLink>
        <SidebarLink to = 'projects' onClick={toggle}>
           Projects
        </SidebarLink>
        <SidebarLink to = 'about' onClick={toggle}>
            Home
        </SidebarLink>
    </SidebarMenu>
</SidebarWrapper>

        </SidebarContainer>
  )
}
