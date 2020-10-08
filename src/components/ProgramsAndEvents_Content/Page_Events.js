import React from 'react';
import './Page.css';
import { faUniversity, faMapSigns  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Page_Events extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="events-page-content">
                    <section className="info-section">
                        <h3>Speaker Series: J. Luke Wood</h3>
                        <ul>
                            <li className="b-gold b-shadow small-info-bg-image">
                                <FontAwesomeIcon icon={faUniversity} className='icon'/>
                                <p>This event will be held virtually.  Registration is available in Ability LMS</p>
                                <p className='date'>October 28th, 2020<br/>10:00am</p>
                                <base target="_parent"/>
                                <a className="b-blue b-shadow link" href="https://pd.cpcc.edu/CPCC/LearnerWeb_PTM.php?ActionID=Enroll&EventID=32234" target="_blank" rel="noopener noreferrer">Register Now</a>
                            </li>
                        </ul>
                    </section>
                    <section className="afss info-section">
                        <h3>About Dr. J. Luke Wood</h3>
                        <p><span><base target="_parent"/><a href="https://pd.cpcc.edu/CPCC/LearnerWeb_PTM.php?ActionID=Enroll&EventID=32234" target="_blank" rel="noopener noreferrer">J. Luke Wood, Ph.D.</a></span> is Vice President of Student Affairs & Campus Diversity and Dean’s Distinguished Professor of Education at San Diego State University. Wood also serves as the Co-Director of the Community College Equity Assessment Lab (CCEAL), a national research and practice center that partners with community colleges to support their capacity in advancing outcomes for underserved students of color.  In this virtual event, Dr. Wood is joining Central Piedmont faculty and staff to discuss how we can readdress our unconscious bias, micro aggressions, and inequities in higher education.</p>
                        <p>Wood’s presentation will not only focus on the connection between macroaggressions and implicit bias and how this relationship influences equity, excellence, and being student-centered; but also discuss overall student success, retention, and completion rates.</p>
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