import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import color from "../../uttils/style/color";
import _defaultPicture from "../../assets/dark-logo.png";



const StyledLink = styled(Link)`
paddind: 15px;
color: #666;
align-items: center;
text-decoration: none;
padding: 5px 10px;
font-size: 18px;
${(props)=>
  props.$isFullLink &&
  `color: white; border-radius: 30px; background-Color: ${color.primary}; ;`
}
`
const NavStyleLink = styled(Link)`
display: flex;
gap: 15px;
justify-content: center;
align-item: center;
margin-right: 50px;
`

const StylesLink = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
text-align: center;
width: 100%;
height: 80px;
z-index: 1000;
text-decoration: none;
position: sticky;
`
const Logo = styled.img`
margin-left: 20px;
font-size: 10px;
width: 130px;
`

export default function Header(){
  return(
    <StylesLink>
      <Logo src={_defaultPicture} />
      <NavStyleLink>
        <StyledLink to='/'>Acceuil</StyledLink>
        <StyledLink to='/Freelance'>Profils</StyledLink>
        <StyledLink to='/Survey/1'$isFullLink >Faire le test</StyledLink>
      </NavStyleLink>
    </StylesLink>
  )
}