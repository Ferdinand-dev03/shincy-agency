import React from "react";
import DefaultPicture from '../assets/profile.png'
import Card from "../components/card";
import PropTypes from "prop-types";
import styled from "styled-components";

const freelanceProfile = [
  {
    name: 'Ferdinand',
    jobTitle: 'Devops',
    picture: DefaultPicture,
  },
  {
    name: 'Doue',
    jobTitle: 'Developpeur Web',
    picture: DefaultPicture,
  },
  {
    name: 'Kouya',
    jobTitle: 'Dev App',
    picture: DefaultPicture,
  },
]

const CardsContainer = styled.div`
display: grid;
gap: 24px;
grid-template-rows: 350px 350px;
grid-tenplate-columns: repeat(2, 1fr)
`

export default function Freelances(){

  Card.PropTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
  }
  Card.defaultProps = {
    title: '',
    label: '',
    picture: DefaultPicture
  }

  return(
    <div>
      <h1>Freelance 👩🏾‍💻👩🏾‍💻👩🏾‍💻</h1>
      <CardsContainer>
        {freelanceProfile.map((profile)=> (
          <Card 
            key={profile.name}
            label={profile.jobTitle}
            picture={profile.picture}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </div>
  )
}