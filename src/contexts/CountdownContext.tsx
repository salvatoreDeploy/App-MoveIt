import {createContext, ReactNode, useContext, useState, useEffect } from 'react';
import {ChallengesContext} from './ChallengesContext';

interface CountdownContextData{
    minutes: number,
    seconds: number,
    hasFinished: boolean,
    isActive: boolean,
    startCountdown: () => void,
    resetCountdown: () => void;
}

interface CountdownProviderProps {
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeOut: NodeJS.Timeout;

export function CountdownProvider({children}: CountdownProviderProps){

    const {startNewChallenge} = useContext(ChallengesContext)

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setisActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false)

    let countdownTimeOut: NodeJS.Timeout;

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown(){
        setisActive(true);
    }

    useEffect(() => {
        if(isActive && time > 0){
            countdownTimeOut =  setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        }else if(isActive && time === 0){
            /* console.log("Finalizou!!"); */
            setHasFinished(true);
            setisActive(false);
            startNewChallenge();
        }
    },[isActive, time])

    function resetCountdown(){
        clearTimeout(countdownTimeOut);
        setisActive(false);
        setHasFinished(false);
        setTime(0.1 * 60);
    }

    return(
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown
        }}>
            {children}
        </CountdownContext.Provider>
    )
}