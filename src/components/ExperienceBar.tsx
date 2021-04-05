export function ExperienceBar(){
    return(
        <header className="experience_bar">
            <span>0 XP</span>
            <div>
                <div style = {{width: '50%'}} />

                <span className = "current_experience" style = {{left: '50%'}}>
                    300xp
                </span>
            </div>
            <span>600 XP</span>
        </header>
    );
}