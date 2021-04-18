import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import style from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar(){

    const {currentExperience, experienceToNextLevel} = useContext(ChallengesContext);
    const percentToNextLevel = Math.round(currentExperience * 100) /  experienceToNextLevel;

    return(
        <header className={style.experienceBar}>
            <span>0 XP</span>
            <div>
                <div style = {{width: /* '50%' */ `${percentToNextLevel}%`}} />

                <span className = {style.currentExperience} 
                    style = {{left: /* '50%' */ `${percentToNextLevel}%`}}>
                    {/* 300xp */}
                    {currentExperience} xp
                </span>
            </div>
            {/* <span>600 XP</span> */}
            <span>{experienceToNextLevel}</span>
        </header>
    );
}