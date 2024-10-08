import React, { useContext, useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { SurveyContext } from '../uttils/Context'
import { Loader } from '../uttils/style/Atoms'
import color from '../uttils/style/color'

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

const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${color.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`
const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const Survey = () => {
  const { questionNumber } = useParams()
  const questionInt = parseInt(questionNumber)
  const prevQuestion = questionInt === +1 ? 1 : questionInt - 1
  const nextQuestion = questionInt + 1
  const [surveyData, setSurveyData] = useState({})
  const [dataLogin, setDataLogin] = useState(false)
  const [error, setError] = useState(false)
  const [answers, SaveAnswers] = useContext(SurveyContext)

  function saveReply(answer) {
    SaveAnswers({ [questionNumber]: answer })
  }

  useEffect(() => {
    async function fetchQuestions() {
      setDataLogin(true)
      try {
        const res = await fetch(`http://localhost:8000/survey`)
        const { surveyData } = await res.json()
        setSurveyData(surveyData)
        console.log(surveyData)
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setDataLogin(false)
      }
    }
    fetchQuestions()
  }, [])

  if (error) {
    return (
      <span>Oups il ya une erreur🙈 de connection a la base de donnee</span>
    )
  }

  return (
    <SurveyContainer>
      <QuestionTitle>Question {questionNumber} </QuestionTitle>
      {!dataLogin ? (
        <QuestionContent>{surveyData[questionInt]}</QuestionContent>
      ) : (
        <Loader />
      )}
      <ReplyWrapper>
        <ReplyBox
          onClick={() => saveReply(true)}
          isSelected={answers[questionNumber] === true}
        >
          Oui
        </ReplyBox>
        <ReplyBox
          onClick={() => saveReply(false)}
          isSelected={answers[questionNumber] === false}
        >
          Non
        </ReplyBox>
      </ReplyWrapper>
      <LinkWrapper>
        <Link to={`/survey/${prevQuestion}`}> Precedent </Link>
        
        {surveyData[questionInt + 1] ? (
          <Link to={`/survey/${nextQuestion}`}> Suivant </Link>
        ) : (
          <Link to="Results">Results</Link>
        )}
        <Outlet />
      </LinkWrapper>
    </SurveyContainer>
  )
}

export default Survey
