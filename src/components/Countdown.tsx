import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {

    /* const {startNewChallenge} = useContext(ChallengesContext)

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setisActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false)

    let countdownTimeOut: NodeJS.Timeout;

    const minutes = Math.floor(time / 60);
    const seconds = time % 60; */

    const {
        minutes, 
        seconds, 
        hasFinished,
        isActive, 
        startCountdown, 
        resetCountdown} = useContext(CountdownContext);

    const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('');
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

    /* function startCountdown(){
        setisActive(true);
    } */

    /* useEffect(() => {
        if(isActive && time > 0){
            countdownTimeOut =  setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        }else if(isActive && time === 0){
            /* console.log("Finalizou!!"); */
            /* setHasFinished(true);
            setisActive(false);
            startNewChallenge();
        }
    },[isActive, time]); */ 

    /* function resetCountdown(){
        clearTimeout(countdownTimeOut);
        setisActive(false);
        setTime(0.1 * 60);
    } */

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minutesLeft}</span>
                    <span>{minutesRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button 
                    disabled
                    className={styles.countdownButton}
                >
                    Ciclo encerrado
                </button>
            ): (
                <>
                    {isActive ? (
                        <button 
                        type="button" 
                        className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                        onClick={resetCountdown}
                    >
                        Abandonar ciclo
                    </button>

                    ) : (
                        <button 
                        type="button" 
                        className={styles.countdownButton}
                        onClick={startCountdown}
                    >
                        Iniciar Ciclo
                    </button>
                    )}
                </>
                )}
            {/* <button 
                type="button" 
                className={styles.countdownButton}
                onClick={startCountdown}
            >
                Abandonar ciclo
            </button>

            <button 
                type="button" 
                className={styles.countdownButton}
                onClick={startCountdown}
            >
                {{isActive ? 'Abandonar ciclo' : 'Iniciar um ciclo'}}
                Iniciar Ciclo
            </button> */}
        </div>
    );
}