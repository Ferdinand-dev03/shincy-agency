import React from "react";
import styled from "styled-components";
import color from "../../uttils/style/color";

const CardLabel = styled.span`
  color: #5843e4 ;
  font-size: 22px;
  font-weight: bold;
  `

  const CardImage= styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%
  `

  const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${color.backgroundLight};
  border-radius: 30px;
  width: 300px;
  transition: 0.5s;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3;
  }

  `

export default function Card({label, title, picture}){

  return(
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" height={80} width={80} />
      <span>{title}</span>
    </CardWrapper>
  )
}