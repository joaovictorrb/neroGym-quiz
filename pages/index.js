import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import db from '../db.json'

import Widget from '../source/components/Widget'
import Footer from '../source/components/Footer'
import GitHubCorner from '../source/components/GitHubCorner'
import QuizBackground from '../source/components/QuizBackground'
import QuizContainer from '../source/components/QuizContainer'
import QuizLogo from '../source/components/QuizLogo'
import Link from '../source/components/Link'
import Input from '../source/components/Input'
import Button from '../source/components/Button'

export default function Home() {
  return (
    <QuizBackground backgroundImage = {db.bg}>
      <Head>
        <title>
          AluraQuiz -
          {db.title}
        </title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Background>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>
              <form onSubmit={function (eventInfo) {
                eventInfo.preventDefault();
                router.push(`/quiz?name=${name}`);
                console.log('Making a submission through react.');
              }}
              >
                <Input
                  name="userName"
                  onChange={(eventInfo) => setName(eventInfo.target.value)}
                  placeholder="Input your name here."
                  value={name}
                />
                <Button type="submit" disabled={name.length === 0}>
                  {`Play ${name}`}
                </Button>
              </form>
            </Widget.Content>
          </Widget.Background>
        </Widget>

        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Background>
            <Widget.Content>
              <h1>Quizes</h1>

              <ul>
                {db.external.map((externalLink) => {
                  const [projectName, githubUser] = externalLink
                    .replace(/\//g, '')
                    .replace('https:', '')
                    .replace('.vercel.app', '')
                    .split('.');

                  return (
                    <li key={externalLink}>
                      <Widget.Topic
                        as={Link}
                        href={`/quiz/${projectName}___${githubUser}`}
                      >
                        {`${githubUser}/${projectName}`}
                      </Widget.Topic>
                    </li>
                  );
                })}
              </ul>
            </Widget.Content>
          </Widget.Background>
        </Widget>
        <Footer
          as={motion.footer}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/joaovictorrb"/>
    </QuizBackground>
  )
}
