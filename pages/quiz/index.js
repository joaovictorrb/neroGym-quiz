import React from 'react';
import { ThemeProvider } from 'styled-components'
import QuizScreen from '../../source/screens/Quiz'
import db from '../../db.json'

export default function NeroQuiz() {
  return (
    <ThemeProvider theme={db.theme}>
      <QuizScreen
        externalQuestions={db.questions}
        externalBg={db.bg}
      />
    </ThemeProvider>
  );
}