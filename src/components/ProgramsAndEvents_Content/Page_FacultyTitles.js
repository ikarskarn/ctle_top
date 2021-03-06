import React from 'react';
import './Page.css';
import { faUserCircle, faInfo  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Page_FacultyTitles extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="facultyTitles-page-content">
                    <section className="list-section b-white">
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        <h3>Overview</h3>
                        <p>The purpose of the Faculty Title Committee is to provide information and service to all faculty considering applying for their title at Central Piedmont Community College. The committee members promote and answer questions pertaining to the application process for any of the following titles: Assistant Professor, Associate Professor, Professor, or Professor Emeritus. In addition to overseeing the faculty credentialing process, the committee also reviews applications.</p>
                        <base target='_parent'/>
                        <a href='https://inside.cpcc.edu/departments/ctle/helpful-resources/faculty-titles-1/2020fa-faculty-title-application.pdf/@@download/file/2020FA%20Faculty%20Title%20Application.pdf' target='_blank' rel='noopener noreferrer' className='link b-blue b-shadow'>Faculty Title Application</a>
                        <h4 className='center'>Chair</h4>
                        <ul className='big-bullet-section'>
                            <li className="bullet-highlight b-orange">
                                <p>Kris DeAngelis</p>
                            </li>
                        </ul>
                        <h4 className='center'>Members</h4>
                        <ul className='big-bullet-section'>
                            <li className="bullet-highlight b-orange">
                                <p>Kenn Compton</p>
                            </li>
                            <li className="bullet-highlight b-orange">
                                <p>Catherine Benante</p>
                            </li>
                            <li className="bullet-highlight b-orange">
                                <p>Patricia Bostian</p>
                            </li>
                            <li className="bullet-highlight b-orange">
                                <p>Cynthia Brunson</p>
                            </li>
                            <li className="bullet-highlight b-orange">
                                <p>Susan Butler-Staub</p>
                            </li>
                            <li className="bullet-highlight b-orange">
                                <p>Kent Cashion</p>
                            </li>
                            <li className="bullet-highlight b-orange">
                                <p>Beth Kara Dawkins</p>
                            </li>
                            <li className="bullet-highlight b-orange">
                                <p>Anne McIntosh</p>
                            </li>
                        </ul>
                        <h4 className='center'>Faculty Titles Mentors</h4>
                        <ul className='big-bullet-section'>
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
                </div>
            </div>
        );
    }
}