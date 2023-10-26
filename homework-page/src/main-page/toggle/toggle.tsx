import React from 'react';
import "./toggleStyle.css";

export default function Toggle({ toggled, onClick }: { toggled: boolean, onClick: () => void }): JSX.Element {
    return (
        <div onClick={onClick} className={`toggle ${toggled ? 'night' : ''}`}>
            <div className="sunMoon" >
            <div className='crater'> </div>
            <div className='crater'> </div>
            </div>
            <div>
                <div className="shape sm"></div>
                <div id='nightShape' className="shape sm"></div>
                <div className="shape sm"></div>
                <div className="shape md"></div>
                <div className="shape lg"></div>
            </div>
        </div>
    )
}
