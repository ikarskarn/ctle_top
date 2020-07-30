import React from 'react';
import './Page.css';
import { faUserCircle, faInfo, faExclamationCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Page_OnlineTeachingBestPractices extends React.Component {
    render() {
        return (
            <div className="page">
                <header className="b-grey">
                    <h2>
                        Online Teaching Best Practices
                    </h2>
                </header>
                <div className="onlineTeaching-page-content">
                    <section className="list-section b-white">
                        <section className="important-note-section b-orange">
                            <FontAwesomeIcon icon={faExclamationCircle} className='icon'/>
                            <h3>Teaching Fully Online?</h3>
                            <p className='paragraph-emphasis'>
                                Complete the Online Teaching Certifications (OTC)
                            </p>
                            <a className='coming-soon b-blue b-shadow'>How To Enroll</a>    
                        </section>
                        
                        <section className="list-section b-white"> 
                            <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                            <h4>Start Off Right</h4>
                            <p>Take a moment to look through the list below and check each of these items off before your roll out your course shell.</p>
                            <div className="checklist-item">
                                <FontAwesomeIcon icon={faCheckCircle} className='check-icon'/>
                                <p>Create a course welcome video or introduction for your shell</p>
                            </div>
                            <div className="checklist-item">
                                <FontAwesomeIcon icon={faCheckCircle} className='check-icon'/>
                                <p>Create your Instructor Info page</p>
                                <br className='break'/>
                                <ul>
                                    <li className='break'>Contact Info</li>
                                    <li className='break'>Virtual Office Hours</li>
                                    <li className='break'>Instructor Bio</li>
                                </ul>
                            </div>
                            <div className="checklist-item">
                                <FontAwesomeIcon icon={faCheckCircle} className='check-icon'/>
                                <p>Point out college resources available to students</p>
                            </div>
                            <div className="checklist-item">
                                <FontAwesomeIcon icon={faCheckCircle} className='check-icon'/>
                                <p>Check your Gradebook to make sure it is set up correctly</p>
                            </div>
                            <div className="checklist-item">
                                <FontAwesomeIcon icon={faCheckCircle} className='check-icon'/>
                                <p>Ensure your content is accessible</p>
                                <br className="break"/>
                                <ul>
                                    <li className='break'>Document Accessibility</li>
                                    <li className='break'>Video Captions</li>
                                    <li className='break'>Contrasting Colors</li>
                                </ul>
                            </div>
                            <div className="checklist-item">
                                <FontAwesomeIcon icon={faCheckCircle} className='check-icon'/>
                                <p>Check that all links and media are working</p>
                            </div>
                            <div className="checklist-item">
                                <FontAwesomeIcon icon={faCheckCircle} className='check-icon'/>
                                <p>Check all course and due dates</p>
                            </div>
                            <div className="checklist-item">
                                <FontAwesomeIcon icon={faCheckCircle} className='check-icon'/>
                                <p>Make sure student learning outcomes are visible and all of your content is aligned</p>
                            </div>
                        </section>

                        <section className="list-section b-grey">
                            <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                            <h4>Need More?</h4>
                            <p className='center'>Visit the Faculty Checklist for Teaching in Blackboard</p>
                            <a className='coming-soon b-blue b-shadow'>Teaching in Blackboard Checklist</a>
                            <p className='center'>For more information on online accessibility, check out the Online Accessibility course in AbilityLMS</p>
                            <a className='coming-soon b-blue b-shadow'>Online Accessibility: Ability LMS</a>
                        </section>
                        <section className="list-section b-white">
                            <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                            <h4>Interested in Course Design?</h4>
                            <p className='center'>Visit the Center's Online Course Design Process Page</p>
                            <a className='coming-soon b-blue b-shadow'>Online Course Design</a>
                        </section>
                        <section className="list-section b-grey">
                            <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                            <h4>Top Ten Tips for Online Teaching</h4>
                            <p className='center'>Check out this video created by: Marsi Franceschini</p>
                            <a className='coming-soon b-blue b-shadow'>Top Ten Tips</a>
                        </section>            
                    </section>
                </div>
            </div>
        );
    }
}