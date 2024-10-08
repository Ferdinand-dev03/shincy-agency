import React, { useEffect, useState } from 'react'
import { Link, Outlet, useParams} from 'react-router-dom'
import color from '../uttils/style/color'
import styled from 'styled-components'
import { Loader } from '../uttils/style/Atoms'



const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${color.primary};
`

const QuestionContent = styled.span`
  margin: 30px;
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`

const Survey = () => {

  const {questionNumber} = useParams()
  const questionInt = parseInt(questionNumber)
  const prevQuestion = questionInt === + 1 ? 1 : questionInt - 1
  const nextQuestion = questionInt + 1
  const [surveyData, setSurveyData] = useState({})
  const [dataLoagin, setDataLogin] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {

    async function fetchQuestions (){
    setDataLogin(true)
    try{
      const res = await fetch(`http://localhost:8000/survey`)
      const {surveyData} = await res.json()
      setSurveyData(surveyData)
      console.log(surveyData)
    } catch(err){
      console.log(err)
      setError(true)
    } finally{
      setDataLogin(false)
      
    }
  }
  fetchQuestions()
  }, []
  )

  if(error){
    return <span>Oups il ya une erreur🙈</span>
  }

  return (
    <SurveyContainer>
      
      <QuestionTitle>Question {questionNumber} </QuestionTitle>
      { dataLoagin ? (<QuestionContent>{surveyData[questionInt]}</QuestionContent> ) : <Loader/>}
      <LinkWrapper>
        <Link to={`/survey/${prevQuestion}`} > Precedent </Link>
        { surveyData[questionInt + 1] ? ( <Link to={`/survey/${nextQuestion}`} > Suivant </Link>) :
        (<Link to='resultat' >Resultat</Link>)}
        <Outlet/>
      </LinkWrapper>
    </SurveyContainer>

  )
}


export default Survey