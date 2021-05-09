import Head from 'next/head'
import {GetServerSideProps} from 'next';
import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { CountdownContext, CountdownProvider } from '../contexts/CountdownContext';
import styles from '../styles/pages/Home.module.css';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps{
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {

  console.log(props);

  return (
    <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}>

      <div className = {styles.container}>
        <Head>
          <title>Inicio | MoveIt</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
          </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  /* const user = {
    level: 1,
    currentExperience: 50,
    challengeCompleted: 2,
  } */

  const {level, currentExperience, challengesCompleted} = ctx.req.cookies;

  /* console.log(user); */

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}

//Back end (Ruby) -> A interface eh alimentada com dados que vem dessa camada em terceiro lugar
//Next.js (node.js) -> Ao acessar a aplicação ele atinge essa camada primeiro
//front end (react) -> O next constroi a inteface atravez dessa camada em segundo lugar
