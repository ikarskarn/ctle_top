import React from 'react';
import './Page.css';
import { faInfoCircle, faHandshake, faThumbsUp, faUsers, faAsterisk   } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Page_HelpfulResources extends React.Component {
    render() {
        return (
            <div className="page">
                <header className="b-grey">
                    <h2>
                        Helpful Resources
                    </h2>
                </header>
                <div className="page-content">
                    <p className="paragraph-emphasis">The Center provides a variety of helpful resources that support and guide instructors in areas such as, Faculty Administrative Duties, Travel Requests, Faculty Titles, and more.</p>
                    
                    <section className="list-section b-white">
                        <FontAwesomeIcon icon={faInfoCircle} className="icon" />
                        <h3>Faculty Adminstrative Duties</h3>
                        <p> As a faculty member there are lot of things to keep track of throughout the semester. Visit the Faculty Administrative Duties page for more information.</p>
                        <a
                            className="b-blue b-shadow link" 
                            href="https://inside.cpcc.edu/departments/ctle/helpful-resources/faculty-admin-duties"
                            target="_PARENT"
                        >
                            Learn More
                        </a>
                    </section>

                    <section className="list-section b-grey">                    
                        <FontAwesomeIcon icon={faHandshake} className="icon" />
                        <h3>Travel Requests</h3>
                        <p> More Info Coming Soon</p>
                        <a
                            className="b-blue b-shadow link" 
                            href="https://inside.cpcc.edu/departments/ctle/helpful-resources/travel-requests"
                            target="_PARENT"
                        >
                            Learn More
                        </a>
                    </section>
                    <section className="list-section b-white">
                        <FontAwesomeIcon icon={faThumbsUp} className="icon" />
                        <h3>Faculty Titles</h3>
                        <p>The purpose of the Faculty Title Committee is to provide information and service to all faculty considering applying for their title at Central Piedmont Community College.</p>
                        <a
                            className="b-blue b-shadow link" 
                            href="https://inside.cpcc.edu/departments/ctle/helpful-resources/faculty-titles"
                            target="_PARENT"
                        >
                            Learn More
                        </a>
                    </section>
                    <section className="list-section b-grey">
                        <FontAwesomeIcon icon={faUsers} className="icon" />
                        <h3>Quality Matters</h3>
                        <p>Central Piedmont is an affiliate of the Quality Matters (QM) program through a statewide consortium of universities and community colleges.The College will be implementing the program, including the QM rubric to guide online course design.</p>
                        <a
                            className="b-blue b-shadow link" 
                            href="https://inside.cpcc.edu/departments/ctle/helpful-resources/quality-matters"
                            target="_PARENT"
                        >
                            Learn More
                        </a>
                    </section>
                </div>
            </div>
        );
    }
}