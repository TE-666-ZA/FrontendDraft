import styles from './homework-page.module.css';
import React, {useState} from 'react';
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";



function HomeworkPage() {

    const [toggled, setToggled] = useState(true);
        const handleClick = (switchedValue: boolean) => {
        setToggled(switchedValue);
    }


    return (
        <div className={`${styles.container} ${!toggled && styles.night}`}>
            <header className={styles.header}>
                <h1>
                    <div className={styles.toggleDiv}>
                       < ThemeSwitcher onClick={handleClick} />
                    </div>
                    <span>Homework page</span>
                </h1>
            </header>
            <nav className={styles.navbar}>
              navigation

            </nav>
        </div>
    );
}

export default HomeworkPage;