import React from 'react';
import './Page.css';
import { faBookmark, faChalkboardTeacher, faBookReader } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Page_ProgramsAndEvents extends React.Component {
    render() {
        return (
            <div className="page">
                <header className="b-grey">
                    <h2>
                        Programs & Events
                    </h2>
                </header>
                <div className="programsAndEvents-page-content">
                    <section className="list-section">
                        <p className="paragraph-emphasis"> We are committed to fostering a rich and compelling community of learning excellence focused on the holistic needs of all those who teach. </p>
                    </section>
                    <section className="list-section">
                        <FontAwesomeIcon icon={faChalkboardTeacher} className="icon" />
                        <p> The Center advances best practices of impactful teaching at the college to inspire, guide, and support faculty and staff in the key areas of pedagogy, course content and instructional delivery.</p>
                        <br />
                        <FontAwesomeIcon icon={faBookReader} className="icon" />
                        <p>Events, programs, and workshops are aligned with the Center's mission and goals, and grounded in the literature on teaching, learning, and educational development. Specifically, these professional learning opportunities.</p>
                    </section>
                    <br/>
                    <section className="highlight-section b-grey">
                        <ul>
                            <div>
                                <li className="highlight b-white b-shadow faculty-pic">
                                    <p>Support the span of new, mid-career, and senior-level faculty and staff</p>
                                </li>
                                <li className="highlight b-white b-shadow computer-pic">
                                    <p>Address all teaching modalities</p>
                                </li>
                            </div>
                            <div>
                                <li className="highlight b-white b-shadow group-pic">
                                    <p>Consider diversity and inclusion</p>
                                </li>
                                <li className="highlight b-white b-shadow board-pic">
                                    <p>Provide faculty and staff opportunities to lead, learn, and reflect</p>
                                </li>
                            </div>
                        </ul>
                        <base target="_parent"/>
                        <a 
                            href="https://docs.google.com/document/d/1KMS6rAMMMy1iI9V_M43kIJfPoNf2sDzyzTziKylGLx8/edit?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="b-blue b-shadow link"
                        >
                            CTLE Learning Programs, Descriptions, and Guidelines
                        </a>
                    </section>
                </div>
            </div>
        );
    }
}