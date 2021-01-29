import styled from 'styled-components'
import db from '../db.json'
import Widget from '../source/components/Widget'
import Footer from '../source/components/Footer'
import GitHubCorner from '../source/components/GitHubCorner'
import QuizBackground from '../source/components/QuizBackground'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
  return (
    <QuizBackground backgroundImage = {db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>NeroAcademia</h1>
          </Widget.Header>
          <Widget.Content>   
            <h2>Voce conhece as vantagens do exercicio físico?</h2>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quiz!</h1>
            <p>Quais os benefícios a baixo advem de uma vida ativa?</p>
            </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/joaovictorrb"/>
    </QuizBackground>

  )
}
