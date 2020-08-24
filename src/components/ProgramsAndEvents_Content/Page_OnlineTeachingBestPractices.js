import React from 'react';
import './Page.css';
import { faExclamationCircle, faCheckCircle, faThumbsUp, faListOl, faCoffee, faQuestionCircle, faCompass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPlayer from "react-player";

export default class Page_OnlineTeachingBestPractices extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="onlineTeaching-page-content">
                    <section className="list-section b-white">
                        <section className="important-note-section b-orange">
                            <FontAwesomeIcon icon={faExclamationCircle} className='icon'/>
                            <h3>Teaching Fully Online?</h3>
                            <p className='paragraph-emphasis'>
                                Complete the Online Teaching Certifications (OTC)
                            </p>
                            <base target="_parent"/>
                            <a className='link b-blue b-shadow' href="https://drive.google.com/file/d/1sCZj1B8XxYZNEcMfasd8LXAwUGJxpL1C/view?usp=sharing" target="_blank" rel="noopener noreferrer">Enroll Here</a>    
                        </section>
                        
                        <section className="list-section b-white"> 
                            <FontAwesomeIcon icon={faThumbsUp} className='icon'/>
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
                            <FontAwesomeIcon icon={faQuestionCircle} className='icon'/>
                            <h4>Need More?</h4>
                            <p className='center'>Visit the Faculty Checklist for Teaching in Blackboard</p>
                            <base target='_parent'/>
                            <a href='https://docs.google.com/document/d/1S8h2MLdkWXjhaE3Y5WVlcSl9P6sHqapURJo6gRlavVc/edit?usp=sharing' target='_blank' rel='noopener noreferrer' className='link b-blue b-shadow'>Teaching in Blackboard Checklist</a>
                            <p className='center'>For more information on online accessibility, check out the Online Accessibility course in AbilityLMS</p>
                            <base target='_parent'/>
                            <a href = 'https://pd.cpcc.edu/CPCC/LearnerWeb_PTM.php?ActionID=LaunchPage&CourseID=CTLE-TEA-001' target="_blank" rel="noopener noreferrer" className='link b-blue b-shadow'>Online Accessibility: Ability LMS</a>
                        </section>
                        <section className="list-section b-white">
                            <FontAwesomeIcon icon={faCoffee} className='icon'/>
                            <h4>Toolin' Around</h4>
                            <p className='center'>Shannon Blair, one of the Center's esteemed Faculty Fellows, has create a wonderful blog with brief, easy-to-implement tips involving the tools you use everyday with students to make your teaching lives easier.</p>
                            <base target="_parent"/>
                            <a href='http://blogs.cpcc.edu/ctle/2020/08/20/toolin-around-webex-auto-record/' target='_blank' rel="noopener noreferrer" className='link b-blue b-shadow'>Visit Page</a>
                        </section>
                        <section className="list-section b-grey">
                            <FontAwesomeIcon icon={faCompass} className='icon'/>
                            <h4>Interested in Course Design?</h4>
                            <p className='center'>Visit the Center's Online Course Design Process Page</p>
                            <a href='http://inside.cpcc.edu/departments/ctle/teaching-effectiveness/ocd' target='_parent' className='link b-blue b-shadow'>Online Course Design</a>
                        </section>
                        <section className="list-section b-white">
                            <FontAwesomeIcon icon={faListOl} className='icon'/>
                            <h4>Top Ten Tips for Online Teaching</h4>
                            <p className='center'>Check out this video created by: Marsi Franceschini</p>
                            <base target='_parent'/>
                            <a href='https://centralpiedmont.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=5cb71187-5d1a-4f19-8fe8-ab8a013614c8' target='_blank' rel='noopener noreferrer' className='link b-blue b-shadow'>Top Ten Tips for Online Teaching</a>
                        </section>            
                    </section>
                </div>
            </div>
        );
    }
}