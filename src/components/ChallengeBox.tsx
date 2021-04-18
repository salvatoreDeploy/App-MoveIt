import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){

    /* const contextData = useContext(ChallengesContext); */
    /* console.log(contextData); */

    const {activeChallenge, resetChallenge} = useContext(ChallengesContext);

    const hasActiveChallenge = true;

    return (
        <div className={styles.challengeBoxContainer}>
           {/* {hasActiveChallenge ? ( */}
            {activeChallenge ? (
               <div className={styles.challengeActive}>
                   {/* <header>Ganhe 400xp</header> */}
                   <header>Ganhe {activeChallenge.amount}xp</header>

                   <main>
                       {/* <img src="icons/body.svg" /> */}
                       <img src={`icons/${activeChallenge.type}.svg`} />
                       <strong>Novo desafio</strong>
                       {/* <p>Levante e faça uma caminha de 3 minutos</p> */}
                       <p>{activeChallenge.description}</p>
                   </main>

                   <footer>
                       <button 
                       type="button"
                       className={styles.challengeFailedButton}
                       onClick={resetChallenge}
                       >
                           Falhei
                        </button>

                       <button 
                       type="button"
                       className={styles.challengeSucceededButton}>
                           Completei
                        </button>
                   </footer>
               </div>
           ) : (
                <div className={styles.challengeNotActive}>
                <strong>Finalize um ciclo para receber um desafio a serem completados</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    Avance de Level completando desafios
                </p>
            </div>
           )}
        </div>
    )
}