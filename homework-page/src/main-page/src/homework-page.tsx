import './homework-page.css';
import React from 'react';
import Toggle from "../toggle/toggle";


function HomeworkPage() {
    const [toggled, setToggled] = React.useState(false);
    const hundleClick = () => {
        setToggled((s) => !s);
    }
    return (
        <div className="container">
            <header className="title">
                <h1>Homepage</h1>
            </header>
            <nav className="navbar">
                <Toggle toggled={toggled} onClick={hundleClick}/>
            </nav>

        </div>
    );
}

export default HomeworkPage;