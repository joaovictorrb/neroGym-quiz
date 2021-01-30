import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../source/screens/Quiz';

export default function NeroQuiz({ externalDb }) {
  return (
    <ThemeProvider theme={externalDb.theme}>
      <QuizScreen
        externalQuestions={externalDb.questions}
        externalBg={externalDb.bg}
      />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');

  try {
    const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then((serverResponse) => {
        if (serverResponse.ok) {
          return serverResponse.json();
        }
        throw new Error('An Error occured while fetching data');
      })
      .then((answerToObject) => answerToObject)
    return {
      props: {
        externalDb,
      },
    };
  } catch(err) {
    throw new Error(err);
  }
}