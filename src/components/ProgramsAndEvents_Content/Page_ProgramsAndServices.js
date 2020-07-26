import React from 'react';
import './Page.css';
import { faUserCircle, faBookmark  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Page_ProgramsAndServices extends React.Component {
    render() {
        return (
            <div className="page">
                <header className="b-grey">
                    <h2>
                        Programs & Services
                    </h2>
                </header>
                <div className="page-content">
                    <section className="section info-section">
                        <h3>Programs</h3>
                        <ul>
                            <li className="small-info-block b-gold b-shadow">
                                <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                                <p>Faculty Mentor Program</p>
                                <p className='coming-soon b-blue b-shadow'>Coming Soon</p>
                            </li>
                            <li className="small-info-block b-gold b-shadow">
                                <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                                <p>Speaker Series</p>
                                <p className='coming-soon b-blue b-shadow'>Coming Soon</p>
                            </li>
                            <li className="small-info-block b-gold">
                                <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                                <p>Peer Observations</p>
                                <p className='coming-soon b-blue b-shadow'>Coming Soon</p>
                            </li>
                        </ul>
                    </section>
                    <section className="section info-section b-gold">
                        <h3>Services</h3>
                        <section className="list-section b-white"> 
                            <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                            <h4>Center Studio Pack</h4>
                            <p>A portable resource for faculty to check-out from the Center providing access to video recording equipment and accessories like a green screen and lighting.</p>
                            <p className='coming-soon b-blue b-shadow'>Coming Soon</p>
                        </section>
                        <section className="list-section b-grey">
                            <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                            <h4>Online Course Design</h4>
                            <p>A 5-step milestone-based course development process where faculty will work alongside the Center team to bring the vision of their course together while meeting Quality Matters standards to improve learners’ success in the course</p>
                            <p className='coming-soon b-blue b-shadow'>Coming Soon</p>
                        </section>
                        <section className="list-section b-white">
                            <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                            <h4>Faculty, Division, and Program Consultations</h4>
                            <p>Based on requests and needs of faculty and divisions, these consultations can include, but are not limited to:</p>
                            <ul>
                                <li className="bullet-highlight b-orange">
                                    <p className="icon">Teaching Strategies</p>
                                </li>
                                <li className="bullet-highlight b-orange">
                                    <p className="icon">Course Design</p>
                                </li>
                                <li className="bullet-highlight b-orange">
                                    <p className="icon">LMS Best Practices</p>
                                </li>
                                <li className="bullet-highlight b-orange">
                                    <p className="icon">Technology Integration</p>
                                </li>
                                <li className="bullet-highlight b-orange">
                                    <p className="icon">Digital Engagement</p>
                                </li>
                            </ul>                            
                            <p className='coming-soon b-blue b-shadow'>Coming Soon</p>
                        </section>
                        <section className="list-section b-grey">
                            <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                            <h4>Virtual Center</h4>
                            <p className='coming-soon b-blue b-shadow'>Coming Summer 2021</p>
                        </section>
                        <section className="list-section b-white">
                            <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                            <h4>Teaching Awards</h4>
                            <p className='coming-soon b-blue b-shadow'>Coming Fall 2021</p>
                        </section>
                        <section className="list-section b-grey">
                            <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                            <h4>Video Studio</h4>
                            <p>Faculty can reserve the Center’s professional video studio to create and edit instructional videos for their courses.  Center staff are happy to consult on video projects, including;</p>
                            <ul>
                                <li className="bullet-highlight b-orange">
                                    <p className="icon">Recorded Interviews</p>
                                </li>
                                <li className="bullet-highlight b-orange">
                                    <p className="icon">Custom Lectures</p>
                                </li>
                                <li className="bullet-highlight b-orange">
                                    <p className="icon">Intro Videos</p>
                                </li>
                                <li className="bullet-highlight b-orange">
                                    <p className="icon">Demos</p>
                                </li>
                                <li className="bullet-highlight b-orange">
                                    <p className="icon">Lightboard Lectures</p>
                                </li>
                                <li className="bullet-highlight b-orange">
                                    <p className="icon">and More!</p>
                                </li>
                            </ul>
                            <p className='coming-soon b-blue b-shadow'>Coming Fall 2021</p>
                        </section>            
                    </section>
                </div>
            </div>
        );
    }
}