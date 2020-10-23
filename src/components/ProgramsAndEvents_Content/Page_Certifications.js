import React from 'react';
import './Page.css';
import { faUserCircle, faInfo  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Page_Certifications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nfe_info: '',
        };
    }
    handleClick = (val) => {
        if(val === 'evaluate') {
            this.setState({
                nfe_info: 'Evaluate the needs for new faculty of the college and how the current NFE program meets those needs.',
            })
        } else if(val === 'recommend') {
            this.setState({
                nfe_info: 'Recommend and plan new learning activities that are consistent with the topics, themes and timeline of the NFE program and that will fulfill the needs of new faculty.'
            })
        } else if(val === 'facilitate') {
            this.setState({
                nfe_info: 'Facilitate, recruit, and/or participate in development and delivery of learning activities to be included in the NFE program'
            })
        }
    }
    render() {
        return (
            <div className="page">
                <div className="certifications-page-content">
                    <section className="list-section b-white">
                        <h3>Overview</h3>
                        <p className='paragraph-emphasis'>
                            Certifications are a way to show off your knowledge in an array of fields.  Below is list of some of the existing certifications available with many more to come.
                        </p>
                    </section>
                    <section className="list-section b-white">
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        <h4>New Faculty Experience</h4>
                        <p>The New Faculty Experience program is a 30-hour, one year commitment for all first-time, full-time faculty at the college in their first year of teaching.  The NFE program engages faculty with teaching and learning excellence to include pedagogy, classroom management, learning assessment, academic technology, teaching strategies, and faculty administration. Goals of the NFE committee include:</p>
                        <ul className='bullet-highlight-list dynamic-list'>
                            <li className="bullet-highlight b-orange">
                                <button
                                    className="bullet-button"
                                    value='evaluate'
                                    onClick={(e) => this.handleClick(e.target.value)}
                                >
                                    <FontAwesomeIcon className='no-click' icon={faInfo}/>
                                    <span className='bullet-button-text no-click'>Evaluate</span>
                                </button>
                            </li>
                            <li className="bullet-highlight b-orange">
                                <button
                                    className='bullet-button'
                                    value='recommend'
                                    onClick={(e) => this.handleClick(e.target.value)}
                                >
                                    <FontAwesomeIcon className='no-click' icon={faInfo}/>
                                    <span className='bullet-button-text no-click'>Recommend</span>
                                </button>
                            </li>
                            <li className="bullet-highlight b-orange">
                                <button
                                    className='bullet-button'
                                    value='facilitate'
                                    onClick={(e) => this.handleClick(e.target.value)}
                                >
                                    <FontAwesomeIcon className='no-click' icon={faInfo}/>
                                    <span className='bullet-button-text no-click'>Facilitate</span>
                                </button>
                            </li>
                        </ul>
                        <p>{this.state.nfe_info}</p>
                    </section>
                    <section className="list-section b-grey">
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        <h4>Online Teaching Certification (OTC)</h4>
                        <p>All faculty are required to complete the Foundations for Teaching Online. The Foundations for Teaching Online learning track is the prerequisite for all 2020 - 2021 Online Teaching Certifications. After completing the Foundations Track you can can access the Online Teaching Certification track.</p>
                        <p>The learning track is housed in a Blackboard organization. Visit the How to Enroll into the Foundations for Teaching Online Blackboard Organization shell. Please note: you must be logged in to your college Google Account with your Central piedmont email and credentials in order to access this document.</p>
                        <base target="_parent"/>
                        <a className='link b-blue b-shadow' href="https://drive.google.com/file/d/1sCZj1B8XxYZNEcMfasd8LXAwUGJxpL1C/view?usp=sharing" target="_blank" rel="noopener noreferrer">Learn More</a>
                    </section>            
                </div>
            </div>
        );
    }
}