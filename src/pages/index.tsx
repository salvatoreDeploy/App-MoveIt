import Head from 'next/head'
import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { CountdownContext, CountdownProvider } from '../contexts/CountdownContext';
import styles from '../styles/pages/Home.module.css';


export default function Home(props) {

  /* console.log(props); */

  return (
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
  )
}

export const getServerSideProps = async () => {

  const user = {
    level: 1,
    currentExperience: 50,
    challengeCompleted: 2,
  }

  console.log(user);

  return {
    props: user
  }
}

//Back end (Ruby) -> A interface eh alimentada com dados que vem dessa camada em terceiro lugar
//Next.js (node.js) -> Ao acessar a aplicação ele atinge essa camada primeiro
//front end (react) -> O next constroi a inteface atravez dessa camada em segundo lugar
