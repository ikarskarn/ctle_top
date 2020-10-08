import React from 'react';

export default function Speaker(props) {
    return (
        <div className="speaker">
            <div className="ad-content">
                <h3>
                    Speaker Series: J. Luke Wood
                </h3>
                <p className="center">This event will be held virtually. Registration is available in AbilityLMS</p>
                <div className="date-and-time b-blue">
                    <p>October 28th, 2020<br/>10:00 AM</p>
                    <base target="_parent"/>
                    <a className="b-orange b-shadow link" href="https://pd.cpcc.edu/CPCC/LearnerWeb_PTM.php?ActionID=Enroll&EventID=32234" target="_blank" rel="noopener noreferrer">Register Now!</a>
                </div>
            </div>
        </div>
    );
}