import React from 'react';
import {Nav, NavbarContainer,NavLogo , MobileIcon,NavMenu,NavItem,NavLinks , LinkHover , LinkContainer ,Mask , Title ,Title1 , Title2} from "./NavbarStyle.js"
import {FaBars} from 'react-icons/fa';
import './Navbar.scss'
export default function Navbar({toggle}) {



  return (
     
    <>
<Nav>
    <NavbarContainer>
        <NavLogo  to = "/" >
            Oumaima.
        </NavLogo>
        <MobileIcon onClick = {toggle}>
            <FaBars />
        </MobileIcon>
        <NavMenu>
            <NavItem>
                <NavLinks to="home" spy={true} smooth={true}>
                 <a href="#" class="link">
                <span class="mask">
                    <div class="link-container">
                    <span class="link-title1 title">Home</span>
                    <span class="link-title2 title">Home</span>
                    </div>
                </span>
                </a>
                </NavLinks>
                </NavItem>

                <NavItem>
                <NavLinks to = "about"  spy={true} smooth={true}> 
                <a href="#" class="link">
                <span class="mask">
                    <div class="link-container">
                    <span class="link-title1 title">About</span>
                    <span class="link-title2 title">About</span>
                    </div>
                </span>
                </a>
                
                </NavLinks>
                </NavItem>

                <NavItem>
                <NavLinks to = "education" spy={true} smooth={true}> 
                <a href="#" class="link">
                <span class="mask">
                    <div class="link-container">
                    <span class="link-title1 title">Education</span>
                    <span class="link-title2 title">Education</span>
                    </div>
                </span>
                </a>
                </NavLinks>
                </NavItem>

                <NavItem>
                <NavLinks to = "projects" spy={true} smooth={true}> 
                <a href="#" class="link">
                <span class="mask">
                    <div class="link-container">
                    <span class="link-title1 title">Projects</span>
                    <span class="link-title2 title">Projects</span>
                    </div>
                </span>
                </a>
                </NavLinks>
                </NavItem>

                <NavItem>
                <NavLinks to = "skills" spy={true} smooth={true}> 
                <a href="#" class="link">
                <span class="mask">
                    <div class="link-container">
                    <span class="link-title1 title">Skills</span>
                    <span class="link-title2 title">Skills</span>
                    </div>
                </span>
                </a>
                </NavLinks>
                </NavItem>

                <NavItem>
                <NavLinks to = "contact" spy={true} smooth={true}> 
                <a href="#" class="link">
                <span class="mask">
                    <div class="link-container">
                    <span class="link-title1 title">Contact</span>
                    <span class="link-title2 title">Contact</span>
                    </div>
                </span>
                </a>
                </NavLinks>
                </NavItem>
        </NavMenu>
    </NavbarContainer>
</Nav>

    </>
  )
}
