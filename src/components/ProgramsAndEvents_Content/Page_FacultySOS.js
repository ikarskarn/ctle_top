import React from 'react';
import './Page.css';
import { faUserCircle, faInfo  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Page_FacultySOS extends React.Component {
    render() {
        return (
            <div className="page">
                <header className="b-grey">
                    <h2>
                        Faculty SOS
                    </h2>
                </header>
                <div className="facultySOS-page-content">
                    <section className="list-section b-white">
                        <p className='paragraph-emphasis'>
                            Formerly Faculty HEROES,  Faculty SOS now offers more ways for Central Piedmont faculty to share their skills, passions and expertise.
                        </p>
                    </section>
                    <section className="list-section b-white">
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        <h4>Faculty SOS = Sharing Our Skills</h4>
                        <p>The Faculty SOS (Sharing Our Skills) program in the Center for Teaching and Learning Excellence is a faculty to faculty support and development program aimed at providing opportunities for faculty to reflect and share current knowledge about effective teaching and learning through dialogue, assessment, and research.  </p>
                        <p>The Faculty SOS program aligns with the Center’s Goal #2 - Advance faculty growth through innovation, continuous learning, scholarship, and holistic well-being, and Goal #5 - Promote faculty engagement, community, and fellowship through meaningful activities, events, and resources.</p>
                        x<p>Any full-time faculty member (curriculum, CCR, CCE) is eligible to apply for and participate in the Faculty SOS program.</p>
                    </section>
                    <section className="list-section b-grey">
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        <h4>Interested?</h4>
                        <p>If you are interested in serving in the Faculty SOS program, please complete the application below.  You will be contacted to arrange a consultation with a Center for Teaching and Learning Excellence staff member.</p>
                        <base target="_parent"/>
                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSdjxRfb6vUuDwhomY_vTZwLU4cX-97RABjFch_PMFiS0TM6Uw/viewform?usp=sf_link' target='_blank' rel='noopener noreferrer' className='link b-blue b-shadow'>Faculty SOS Application</a>
                    </section>            
                </div>
            </div>
        );
    }
}