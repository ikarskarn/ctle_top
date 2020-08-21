import React from 'react';

export default function Symposium(props) {
    return (
        <div className="symposium">
            <div className="ad-content">
                <h3>
                    Faculty Learning Symposium
                </h3>
                <p>This event will be held virtually, and will be adhering to the theme: New Standards of Excellence</p>
                <div className="date-and-time b-blue">
                    <p>September 2nd, 2020<br/>9:00 AM to 4:30 PM</p>
                    <base target="_parent"/>
                    <a className="b-orange b-shadow link" href="https://sites.google.com/cpcc.edu/facultylearningsymposium/lobby?authuser=2&pli=1" target="_blank" rel="noopener noreferrer">Visit the Page</a>
                </div>
            </div>
        </div>
    );
}