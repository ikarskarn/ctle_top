import React from 'react';
import './Page.css';
import { faInfoCircle, faHandshake, faThumbsUp, faUsers, faAsterisk   } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Page_GetInvolved extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="getInvolved-page-content">
                    <section className="list-section">
                        <p className="paragraph-emphasis">There are many opportunities for faculty and staff to get involved with the Center for Teaching and Learning Excellence.</p>
                    </section>
                    <section className="list-section b-white">    
                        <FontAwesomeIcon icon={faInfoCircle} className="icon" />
                        <h3>Faculty SOS</h3>
                        <p> Faculty SOS now offers more ways for Central Piedmont faculty to share their skills, passions and expertise.</p>
                        <a
                            className='b-blue b-shadow link' 
                            href="https://inside.cpcc.edu/departments/ctle/get-involved/faculty-sos"
                            target="_PARENT"
                        >
                            Learn More
                        </a>
                    </section>

                    <section className="list-section b-grey">                    
                        <FontAwesomeIcon icon={faHandshake} className="icon" />
                        <h3>Learning Commons</h3>
                        <p> The Learning Commons at Central Piedmont are groups (typically 6-15 people) who regularly meet to connect, share, and learn about a given teaching and learning topic.</p>
                        <a
                            className="b-blue b-shadow link" 
                            href="https://inside.cpcc.edu/departments/ctle/get-involved/learning-commons"
                            target="_PARENT"
                        >
                            Learn More
                        </a>
                    </section>

                    <section className="list-section b-white">
                        <FontAwesomeIcon icon={faThumbsUp} className="icon" />
                        <h3>Peer Observation Program</h3>
                        <p className="center"> More Info Coming Soon</p>
                        <a
                            className="b-blue b-shadow coming-soon" 
                            target="_PARENT"
                        >
                            Coming Soon
                        </a>
                    </section>

                    <section className="list-section b-grey">
                        <FontAwesomeIcon icon={faUsers} className="icon" />
                        <h3>Committees</h3>
                        <p> CTLE committees will work in collaboration with Faculty Fellows, Learning Commons leaders, and Center staff in providing feedback, content expertise, and recommendations for faculty development programming in a specific area or topic of focus. Membership of committees will include a range of volunteers to include faculty and staff.</p>
                        <a
                            className="b-blue b-shadow link" 
                            href="https://inside.cpcc.edu/departments/ctle/get-involved/committees"
                            target="_PARENT"
                        >
                            Learn More
                        </a>
                    </section>
                    <section className="list-section b-white">
                        <FontAwesomeIcon icon={faAsterisk} className="icon" />
                        <h3>Advisory Board</h3>
                        <p> The Center for Teaching and Learning Excellence (CTLE) advisory board will work closely with the Center’s leadership, Faculty Fellows, and Center staff in providing strategic direction and making key recommendations for programming and resources for faculty success.</p>
                        <a
                            className="b-blue b-shadow link" 
                            href="https://inside.cpcc.edu/departments/ctle/get-involved/advisory-board"
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