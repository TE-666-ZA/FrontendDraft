import React, {useEffect, useState} from 'react';
import styles from './ThemeSwitcher.module.css';

interface IThemeSwitcher {
    onClick: (value: boolean) => void;
}
    const ThemeSwitcher = ({onClick}: IThemeSwitcher): JSX.Element => {
        const [toggled, setToggled] = useState(false);
        const handleSwitch = () => {
            setToggled(prevValue => !prevValue)
            onClick(toggled)
        }

        useEffect(() => {
            document.body.style.backgroundColor = toggled ? '#282c34' : 'white'
        })

        return (
            <div onClick={handleSwitch} className={`${styles.toggle} ${toggled && styles.night}`}>
                <div className={styles.sunMoon}>
                    <div className={styles.crater}/>
                    <div className={styles.crater}/>
                </div>
                <div>
                    <div className={`${styles.shape} ${styles.sm}`}/>
                    <div id='nightShape' className={`${styles.shape} ${styles.sm}`}/>
                    <div className={`${styles.shape} ${styles.sm}`}/>
                    <div className={`${styles.shape} ${styles.md}`}/>
                    <div className={`${styles.shape} ${styles.lg}`}/>
                </div>
            </div>
        )
    }
export default ThemeSwitcher