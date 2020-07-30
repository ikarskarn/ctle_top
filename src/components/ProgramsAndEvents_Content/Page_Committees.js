import React from 'react';
import './Page.css';
import { faUserCircle, faInfo  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Page_Committees extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nfe_info: '',
            afd_info: '',
            itp_info: '',
            olt_info: '',
        };
    }
    handleNFEClick = (val) => {
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
        } else {
            this.setState({
                nfe_info: '',
            })
        }
    }
    handleAFDClick = (val) => {
        if(val === 'evaluate') {
            this.setState({
                afd_info: 'Evaluate current faculty development opportunities specific to adjunct faculty; including topics, method of delivery, and meeting times and locations.Evaluate the needs for new faculty of the college and how the current NFE program meets those needs.',
            })
        } else if(val === 'recommend') {
            this.setState({
                afd_info: 'Recommend and plan new learning opportunities, as well as adjustments in meeting times, locations and methods of delivery (i.e. synchronous and asynchronous virtual options) to better accommodate our adjunct faculty.Recommend and plan new learning activities that are consistent with the topics, themes and timeline of the NFE program and that will fulfill the needs of new faculty.'
            })
        } else if(val === 'facilitate') {
            this.setState({
                afd_info: 'Facilitate, recruit for, and/or participate in development and delivery of learning activities for adjunct faculty'
            })
        } else if(val === 'engage') {
            this.setState({
                afd_info: 'Engage and collaborate with the Adjunct Faculty Learning Community in order to better serve adjunct faculty'
            })
        } else {
            this.setState({
                afd_info: '',
            })
        }
    }
    handleITPClick = (val) => {
        if(val === 'evaluate') {
            this.setState({
                itp_info: 'Evaluate learning opportunities available which address the concepts of inclusive teaching and equity in the classroom.',
            })
        } else if(val === 'recommend') {
            this.setState({
                itp_info: 'Recommend and plan learning activities and resources for all faculty to grow an equitable mindset and foster an inclusive classroom environment.'
            })
        } else if(val === 'facilitate') {
            this.setState({
                itp_info: 'Facilitate, recruit for, and/or participate in development and delivery of learning activities that focus on fostering an inclusive classroom environment.'
            })
        } else {
            this.setState({
                itp_info: '',
            })
        }
    }
    handleOLTClick = (val) => {
        if(val === 'evaluate') {
            this.setState({
                olt_info: 'Evaluate current learning opportunities for instructors working in the online environment, including the Online Teaching Certification.',
            })
        } else if(val === 'recommend') {
            this.setState({
                olt_info: 'Recommend and plan adjustments and additional content for the Online Teaching Certification and additional offerings to support instructors working in the online environment.'
            })
        } else if(val === 'facilitate_one') {
            this.setState({
                olt_info: 'Facilitate, recruit for, and/or participate in development and delivery of learning activities.'
            })
        } else if(val === 'facilitate_two') {
            this.setState({
                olt_info: 'Facilitate, recruit for, and/or participate in the Online Teaching Coaching program.'
            })
        } else {
            this.setState({
                olt_info: '',
            })
        }
    }
    render() {
        return (
            <div className="page">
                <header className="b-grey">
                    <h2>
                        Committees
                    </h2>
                </header>
                <div className="committees-page-content">
                    <section className="list-section b-white">
                        <h3>Overview</h3>
                        <p className='paragraph-emphasis'>
                            The Center’s standing committees will work in collaboration with Faculty Fellows, Learning Commons leaders, and Center staff in providing feedback, content expertise, and recommendations for faculty development programming in a specific area or topic of focus. Membership of committees will include a range of volunteers to include faculty and staff. 
                        </p>
                    </section>
                    <section className="list-section b-white">
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        <h4>New Faculty Experience</h4>
                        <p>The New Faculty Experience program is a 30-hour, one year commitment for all first-time, full-time faculty at the college in their first year of teaching.  The NFE program engages faculty with teaching and learning excellence to include pedagogy, classroom management, learning assessment, academic technology, teaching strategies, and faculty administration. Goals of the NFE committee include:</p>
                        <ul className='bullet-highlight-list dynamic-list'>
                            <li className="bullet-highlight b-orange">
                                <button
                                    className='bullet-button'
                                    value='evaluate'
                                    onClick={(e) => this.handleNFEClick(e.target.value)}
                                >
                                    <FontAwesomeIcon icon={faInfo}/>
                                    <p>Evaluate</p>
                                </button>
                            </li>
                            <li className="bullet-highlight b-orange">
                                <button
                                    className='bullet-button'
                                    value='recommend'
                                    onClick={(e) => this.handleNFEClick(e.target.value)}
                                >
                                    <FontAwesomeIcon icon={faInfo}/>
                                    <p>Recommend</p>
                                </button>
                            </li>
                            <li className="bullet-highlight b-orange">
                                <button
                                    className='bullet-button'
                                    value='facilitate'
                                    onClick={(e) => this.handleNFEClick(e.target.value)}
                                >
                                    <FontAwesomeIcon icon={faInfo}/>
                                    <p>Facilitate</p>
                                </button>
                            </li>
                        </ul>
                        <p className="dynamic-note">{this.state.nfe_info}</p>
                    </section>
                    <section className="list-section b-grey"> 
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        <h4>Adjunct Faculty Development</h4>
                        <p>Each semester, Central Piedmont employs approximately 1,800 adjunct faculty to educate our students. Often, these faculty members have constraints to participating in learning activities, such as other employment, family obligations, etc. However, the Center must strive to meet the faculty development needs of these crucial members of our college community.  Goals of the adjunct faculty development committee include:</p>
                        <ul className='bullet-highlight-list dynamic-list'>
                            <li className="bullet-highlight b-orange">
                                <button
                                    className='bullet-button'
                                    value='evaluate'
                                    onClick={(e) => this.handleAFDClick(e.target.value)}
                                >
                                    <FontAwesomeIcon icon={faInfo}/>
                                    <p>Evaluate</p>                                        
                                </button>
                            </li>
                            <li className="bullet-highlight b-orange">
                                <button
                                    className='bullet-button'
                                    value='recommend'
                                    onClick={(e) => this.handleAFDClick(e.target.value)}
                                >
                                    <FontAwesomeIcon icon={faInfo}/>
                                    <p>Recommend</p>
                                </button>
                            </li>
                            <li className="bullet-highlight b-orange">
                                <button
                                    className='bullet-button'
                                    value='facilitate'
                                    onClick={(e) => this.handleAFDClick(e.target.value)}
                                >
                                    <FontAwesomeIcon icon={faInfo}/>
                                    <p>Facilitate</p>
                                </button>
                            </li>
                            <li className="bullet-highlight b-orange">
                                <button
                                    className='bullet-button'
                                    value='engage'
                                    onClick={(e) => this.handleAFDClick(e.target.value)}
                                >
                                    <FontAwesomeIcon icon={faInfo}/>
                                    <p>Engage</p>
                                </button>
                            </li>
                        </ul>
                        <p className="dynamic-note">{this.state.afd_info}</p>
                    </section>
                    <section className="list-section b-white"> 
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        <h4>Inclusive Teaching Practices</h4>
                        <p>The concept of equity is included in the college’s Vision, Mission and Values, and is also a component of faculty competencies included in the Teaching and Learning Excellence Framework. It is important to provide faculty with the tools and knowledge to help them grow an equity mindset and provide an inclusive environment in their traditional or online classrooms.  Goals of the Inclusive Teaching Practices Committee include:</p>
                        <ul className='bullet-highlight-list dynamic-list'>
                            <li className="bullet-highlight b-orange">
                                <button
                                    className='bullet-button'
                                    value='evaluate'
                                    onClick={(e) => this.handleITPClick(e.target.value)}
                                >
                                    <FontAwesomeIcon icon={faInfo}/>
                                    <p>Evaluate</p>                                        
                                </button>
                            </li>
                            <li className="bullet-highlight b-orange">
                                <button
                                    className='bullet-button'
                                    value='recommend'
                                    onClick={(e) => this.handleITPClick(e.target.value)}
                                >
                                    <FontAwesomeIcon icon={faInfo}/>
                                    <p>Recommend</p>
                                </button>
                            </li>
                            <li className="bullet-highlight b-orange">
                                <button
                                    className='bullet-button'
                                    value='facilitate'
                                    onClick={(e) => this.handleITPClick(e.target.value)}
                                >
                                    <FontAwesomeIcon icon={faInfo}/>
                                    <p>Facilitate</p>
                                </button>
                            </li>
                        </ul>
                        <p className="dynamic-note">{this.state.itp_info}</p>
                    </section>
                    <section className="list-section b-grey"> 
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        <h4>Online Teaching and Development</h4>
                        <p>Although many of the foundations of pedagogy and andragogy remain constant regardless of the delivery method, teaching and learning online have specific challenges which must be met. In any given semester, the number of students enrolled in online courses at Central Piedmont often rivals that of students enrolled at a physical campus. Faculty who teach this group of students need to understand the varying methods for promoting student engagement, collaboration, and communication in an online environment.  Goals of the Online Teaching and Development committee include:</p>
                        <ul className='bullet-highlight-list dynamic-list'>
                            <li className="bullet-highlight b-orange">
                                <button
                                    className='bullet-button'
                                    value='evaluate'
                                    onClick={(e) => this.handleOLTClick(e.target.value)}
                                >
                                    <FontAwesomeIcon icon={faInfo}/>
                                    <p>Evaluate</p>                                        
                                </button>
                            </li>
                            <li className="bullet-highlight b-orange">
                                <button
                                    className='bullet-button'
                                    value='recommend'
                                    onClick={(e) => this.handleOLTClick(e.target.value)}
                                >
                                    <FontAwesomeIcon icon={faInfo}/>
                                    <p>Recommend</p>
                                </button>
                            </li>
                            <li className="bullet-highlight b-orange">
                                <button
                                    className='bullet-button'
                                    value='facilitate_one'
                                    onClick={(e) => this.handleOLTClick(e.target.value)}
                                >
                                    <FontAwesomeIcon icon={faInfo}/>
                                    <p>Facilitate</p>
                                </button>
                            </li>
                            <li className="bullet-highlight b-orange">
                                <button
                                    className='bullet-button'
                                    value='facilitate_two'
                                    onClick={(e) => this.handleOLTClick(e.target.value)}
                                >
                                    <FontAwesomeIcon icon={faInfo}/>
                                    <p>Facilitate</p>
                                </button>
                            </li>
                        </ul>
                        <p className="dynamic-note">{this.state.olt_info}</p>
                    </section>
                </div>
            </div>
        );
    }
}