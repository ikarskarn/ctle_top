import React from 'react';
import './Page.css';
import { faUserCircle, faBookmark  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Page_Events extends React.Component {
    render() {
        return (
            <div className="page">
                <header className="b-grey">
                    <h2>
                        Events & Calendar
                    </h2>
                </header>
                <div className="page-content">
                    <section className="section info-section">
                        <h3>Faculty Learning Symposium</h3>
                        <ul>
                            <li className="large-info-block b-gold b-shadow">
                                <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                                <p>This event will be held virtually, and will be adhering to the theme: New Standards of Excellence</p>
                                <p className='coming-soon b-blue b-shadow'>September 2nd, 2020<br/>9:00am - 4:30pm</p>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        );
    }
}