import React from 'react';
import './Page.css';
import { faUserCircle, faInfo, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Page_TechnologyAndTools extends React.Component {
    render() {
        return (
            <div className="page">
                <header className="b-grey">
                    <h2>
                        Technology And Tools
                    </h2>
                </header>
                <div className="techAndTools-page-content">
                    <section className="list-section b-white">
                        <h3>Overview</h3>
                        <p className='paragraph-emphasis'>
                            It is important when determining your alternative teaching approaches to be aware of the technology and tools available to you and your students. Depending on the learning strategy you plan to implement, this determination is essential for both synchronous and asynchronous teaching and learning and will help you in your preparations.
                        </p>
                    </section>
                
                    <section className="info-section b-grey"> 
                        <h3>Technology</h3>
                    </section>
                    <section className="list-section b-white line">
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        <h4>Webex</h4>
                        <p>Webex is the college supported web conferencing tool that will make it easy for you to meet and collaborate with your students. The available Webex products for use are:</p>
                        <ul className='bullet-highlight-list dynamic-list'>
                            <li className='bullet-highlight b-orange'>Webex Teams</li>
                            <li className='bullet-highlight b-orange'>Webex Meetings</li>
                            <li className='bullet-highlight b-orange'>Webex Training</li>
                            <li className='bullet-highlight b-orange'>Webex Events</li>
                        </ul>
                        <a className='coming-soon b-blue b-shadow'>Webex</a>
                    </section>
                    <section className="list-section b-white line">
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        <h4>Panopto</h4>
                        <p>Panopto enables you to record and deliver lectures and presentations.</p>
                        <a className='coming-soon b-blue b-shadow'>Panopto</a>
                    </section>
                    <section className="list-section b-white line">
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        <h4>Google Applications</h4>
                        <p>Google Applications are provided to faculty, staff, and students through your college Google apps account. Google apps let you keep all of your work in one place, view different file formats without buying extra software, access your files from anywhere with an internet connection, collaborate on documents, and more. Commonly used Google apps are:</p>
                        <ul className='bullet-highlight-list dynamic-list'>
                            <li className='bullet-highlight b-orange'>Google Docs</li>
                            <li className='bullet-highlight b-orange'>Google Sheets</li>
                            <li className='bullet-highlight b-orange'>Google Slides</li>
                            <li className='bullet-highlight b-orange'>Google Sites</li>
                        </ul>
                        <a className='coming-soon b-blue b-shadow'>Google Sites</a>
                    </section>
                    <section className="list-section b-white line">
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        <h4>Central Piedmont Cloud</h4>
                        <p>Central Piedmont Cloud allows faculty, staff, and students to securely access the campus internet network, classroom software, employee tools, and other Central Piedmont-licensed applications from your personal device anywhere you have an internet connection.</p>
                        <a className='coming-soon b-blue b-shadow'>Central Piedmont Cloud</a>
                    </section>
                    <section className="list-section b-white line">
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        <h4>Blackboard</h4>
                        <p>Blackboard is the college’s current Learning Management System used to deliver courses at Central Piedmont.</p>
                        <a className='coming-soon b-blue b-shadow'>Blackboard</a>
                    </section>
                    <section className="important-note-section b-orange line">
                        <FontAwesomeIcon icon={faExclamationCircle} className='icon'/>
                        <h3>NOTE</h3>
                        <p className='paragraph-emphasis'>
                        This helpful Comparative Resource includes information about what technology resource may best meet your needs.  Compare Webex Meetings and Webex Teams, Webex Trainings, Panopto, and Jabber.
                        </p>
                        <div className='list-section'>
                            <a className='coming-soon b-blue b-shadow'>Comparisons</a>
                        </div>    
                    </section>
                    
                    <section className="info-section b-grey"> 
                        <h3>Tools</h3>
                        <p className='center'>Instruction can be delivered from a distance via synchronous and asynchronous delivery.  Some of the tools that will help maintain course continuity can be found below.</p>
                    </section>
                    <section className="list-section b-white line">
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        <h4>Computer or Laptop</h4>
                        <p>Regardless of the type of computer system used, it is important to have opportunities to connect online either through direct ethernet connection or wifi.</p>
                    </section>
                    <section className="list-section b-white line">
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        <h4>Webcam</h4>
                        <p>This will help you to visually connect with students remotely.</p>
                        <a className='coming-soon b-blue b-shadow'>Web Conferencing</a>
                    </section>
                    <section className="list-section b-white line">
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        <h4>Headset with Microphone</h4>
                        <p>It is recommended that this be added as a requirement for the course if you plan to deliver synchronous sessions online.  For your students to plan ahead, add to your course syllabus as a technology requirement.</p>
                        <a className='coming-soon b-blue b-shadow'>Web Conferencing</a>
                    </section>
                    <section className="list-section b-white line">
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        <h4>Mobile Devices and Tablets</h4>
                        <p>It is important to realize that many students use their mobile devices for attending class sessions, in addition to completing coursework.</p>
                    </section>
                    <section className="list-section b-white line">
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        <h4>Chromebook</h4>
                        <p>It is important to note that faculty and students using chromebooks should have access to the internet for proper use. If you need to work offline and use your Google files, you will have to prepare before you go offline. Visit Use Google Drive Files Offline for more information.</p>
                        <a className='coming-soon b-blue b-shadow'>Getting a Chromebook</a>
                        <a className='coming-soon b-orange b-shadow'>Use Google Drive Files Offline</a>
                    </section>
                </div>
            </div>
        );
    }
}