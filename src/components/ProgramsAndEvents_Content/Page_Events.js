import React from 'react';
import './Page.css';
import { faUniversity, faMapSigns  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Page_Events extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="events-page-content">
                    <section className="info-section line">
                        <h3>Faculty Learning Symposium</h3>
                        <ul>
                            <li className="b-gold b-shadow small-info-bg-image">
                                <FontAwesomeIcon icon={faUniversity} className='icon'/>
                                <p>This event will be held virtually, and will be adhering to the theme: New Standards of Excellence</p>
                                <p className='date'>September 2nd, 2020<br/>9:00am - 4:30pm</p>
                                <p className="b-blue b-shadow coming-soon">Registration Coming Soon</p>
                            </li>
                        </ul>
                    </section>
                    <section className="afss info-section">
                        <h3>Adjunct Faculty Semester Start</h3>
                        <FontAwesomeIcon icon={faMapSigns} className='icon'/>
                        <p>All Central Piedmont adjunct faculty are invited to attend one of the Adjunct Faculty Semester Start virtual sessions starting on August 6, 2020. </p>
                        <p>Faculty who engage in this voluntary development opportunity will discover college resources that support faculty and student success.  Additionally, faculty can expect:</p>
                        <ul>
                            <li className='b-orange b-shadow small-bullet'><p>An overview of the culture of teaching and learning at Central Piedmont</p></li>
                            <li className='b-orange b-shadow small-bullet'><p>An opportunity to connect with other adjunct faculty</p></li>
                        </ul>
                        <p>Registration is now available in Ability LMS for each session.  Please note, Ability LMS requires an employee’s CPCC username and password. If you do not have a CPCC account yet, you can email your session choice to The Center for Teaching and Learning Excellence (Penny.Pells@cpcc.edu) to confirm your attendance and/or ask additional questions about the program.</p>
                        <base target='_parent'/>
                        <p className='no-email'>Register to attend the sessions listed below</p>
                        <a className='b-blue b-shadow coming-soon'>No Current Sessions</a>
                        <p className='no-email'>No CPCC email yet?</p>
                        <p className='no-email'>Contact: <a href='mailto:penny.pells@cpcc.edu' target='_blank' rel='noopener noreferrer'>Penny.Pells@cpcc.edu</a> to register</p>
                    {/*    
                        <ul className='afss-cards'>
                            <li className="b-gold b-shadow small-info-bg-image">
                                <h4>Session 1</h4>
                                <p className='date'>August 6th, 2020<br/>2:30pm - 4:00pm</p>
                                <base target="_parent"/>
                                <a href='https://urldefense.proofpoint.com/v2/url?u=https-3A__cpcc.webex.com_cpcc_k2_j.php-3FMTID-3Dt6f137bea2a890915725f457aaf4380ac&d=DwMGaQ&c=eyK8KBY19DualCOSet0JGw&r=Hg1L-UM0IXY5fSlgOtn8EDrexRETMkqXVgF9OmF0wyU&m=EdyKKTN7XRVhbLGzkWlV7Uyv3HVqN7e_dvO4mIIX3tQ&s=hp_Ra9a3A-Pp8tAbUdgOQdQvvPZTafTrHXaY_3JY6gs&e=' className='b-blue b-shadow link' target='_blank' rel='noopener noreferrer'>WebEx Meetings Link</a>
                            </li>
                            <li className="b-gold b-shadow small-info-bg-image">
                                <h4>Session 2</h4>
                                <p className='date'>August 8th, 2020<br/>9:30am - 11:00am</p>
                                <base target="_parent"/>
                                <a href='https://urldefense.proofpoint.com/v2/url?u=https-3A__cpcc.webex.com_cpcc_k2_j.php-3FMTID-3Dta8c0a06bae85bff4aeb4ffbc1f6c64e6&d=DwMGaQ&c=eyK8KBY19DualCOSet0JGw&r=Hg1L-UM0IXY5fSlgOtn8EDrexRETMkqXVgF9OmF0wyU&m=VExaXhnJKt06pWS_X2kZP6UgEyYwh4JESQ1w5M20q0A&s=Pn0MAk-6JsrQOGcT_7y5vF_EdYIvS0S9QGIJlb9s31o&e=' className='b-blue b-shadow link' target='_blank' rel='noopener noreferrer'>WebEx Meetings Link</a>
                            </li>
                            <li className="b-gold b-shadow small-info-bg-image">
                                <h4>Session 3</h4>
                                <p className='date'>August 12th, 2020<br/>6:00pm - 7:30pm</p>
                                <base target="_parent"/>
                                <a href='https://urldefense.proofpoint.com/v2/url?u=https-3A__cpcc.webex.com_cpcc_k2_j.php-3FMTID-3Dt796ab2eb3290ff4054e0a8c6f96fd360&d=DwMGaQ&c=eyK8KBY19DualCOSet0JGw&r=Hg1L-UM0IXY5fSlgOtn8EDrexRETMkqXVgF9OmF0wyU&m=sBm5lIOLPUVM_1wDXprAZJHYi2jSPe2OUeiuTrAJAec&s=PAuHWTe4fsYCEqf3uz0BlQYx65cBBttZyenuEPVinEk&e=' className='b-blue b-shadow link' target='_blank' rel='noopener noreferrer'>WebEx Meetings Link</a>
                            </li>
                        </ul>
                    */}
                    </section>

                </div>
            </div>
        );
    }
}