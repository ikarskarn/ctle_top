import React from 'react';
import './Page.css';
import { faUserCircle, faInfo  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Page_FacultyTitles extends React.Component {
    render() {
        return (
            <div className="page">
                <header className="b-grey">
                    <h2>
                        Faculty Titles
                    </h2>
                </header>
                <div className="page-content">
                    <section className="section info-section b-white">
                        <section className="list-section b-white"> 
                            <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                            <h3>Overview</h3>
                            <p>The purpose of the Faculty Title Committee is to provide information and service to all faculty considering applying for their title at Central Piedmont Community College. The committee members promote and answer questions pertaining to the application process for any of the following titles: Assistant Professor, Associate Professor, Professor, or Professor Emeritus. In addition to overseeing the faculty credentialing process, the committee also reviews applications.</p>
                            <p className='coming-soon b-blue b-shadow'>Faculty Title Application</p>
                            <h4 className='center'>Chair</h4>
                            <ul>
                                <li className="bullet-highlight b-orange">
                                    <p>Kris DeAngelis</p>
                                </li>
                            </ul>
                            <h4 className='center'>Members</h4>
                            <ul>
                                <li className="bullet-highlight b-orange">
                                    <p>Kenn Compton</p>
                                </li>
                                <li className="bullet-highlight b-orange">
                                    <p>Jeffrey Sonier</p>
                                </li>
                                <li className="bullet-highlight b-orange">
                                    <p>Carrie Madsen</p>
                                </li>
                                <li className="bullet-highlight b-orange">
                                    <p>Marcia Moore</p>
                                </li>
                                <li className="bullet-highlight b-orange">
                                    <p>Michael Ripoll</p>
                                </li>
                                <li className="bullet-highlight b-orange">
                                    <p>Jeff Scaggs</p>
                                </li>
                            </ul>
                            <h4 className='center'>Facult Titles Mentors</h4>
                            <ul>
                                <li className="bullet-highlight b-orange">
                                    <p>Elizabeth West</p>
                                </li>
                                <li className="bullet-highlight b-orange">
                                    <p>Jeff Scaggs</p>
                                </li>
                                <li className="bullet-highlight b-orange">
                                    <p>Colin Hickey</p>
                                </li>
                                <li className="bullet-highlight b-orange">
                                    <p>Chris Flowers</p>
                                </li>
                                <li className="bullet-highlight b-orange">
                                    <p>Susan Autry</p>
                                </li>
                            </ul>
                        </section>
                    </section>
                </div>
            </div>
        );
    }
}