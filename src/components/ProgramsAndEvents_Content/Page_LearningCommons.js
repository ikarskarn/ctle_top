import React from 'react';
import './Page.css';
import { faUserCircle, faInfo  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Page_LearningCommons extends React.Component {
    render() {
        return (
            <div className="page">
                <header className="b-grey">
                    <h2>
                        Learning Commons
                    </h2>
                </header>
                <div className="learningCommons-page-content">
                    <section className="list-section b-white">
                        <h3>Overview</h3>
                        <p>
                            The Learning Commons at Central Piedmont are groups (typically 6-15 people) who regularly meet to connect, share, and learn about a given teaching and learning topic. They are meant to foster community at the college while providing learning experiences that assist in professional growth. The Learning Commons supported by the Center for Teaching and Learning Excellence are focused on academics, however both faculty and staff are encouraged to participate.
                        </p>
                    </section>
                    <section className="list-section b-grey"> 
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        <h4>Adjunct Faculty Learning Commons</h4>
                        <p>An open, collaborative community for adjunct faculty to discuss similar interests while developing as educators of teaching and learning excellence at Central Piedmont Community College.</p>
                        <base target='_parent'/>
                        <a href='https://www.google.com/url?q=https://docs.google.com/document/d/1pItk5NM04Trj9YJQUUOdlOUGhykONqWGXzAg_B1Z7yk/edit?usp%3Dsharing&sa=D&ust=1595990751152000&usg=AFQjCNF4CVb3dIMIDWwLfrNKQgPPsDNDKQ' target='_blank' rel='noopener noreferrer' className='link b-blue b-shadow'>Learn More</a>
                    </section>
                    <section className="list-section b-white">
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        <h4>Technology Integration Learning Commons</h4>
                        <p>An open community for anyone interested in exploring emerging technology-based topics in teaching and learning.</p>
                        <base target='_parent'/>
                        <a href='https://www.google.com/url?q=https://docs.google.com/document/d/1tU_ac5DlrZujod_aFq9E266U-GuPfugcY3I1enmWiVs/edit?usp%3Dsharing&sa=D&ust=1595990751248000&usg=AFQjCNGakr4O-7t6Pm0aVz3mloae3N9KbQ' target='_blank' rel='noopener noreferrer' className='link b-blue b-shadow'>Learn More</a>
                    </section>
                    <section className="list-section b-grey"> 
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        <h4>Globalization in the Classroom</h4>
                        <p>An open, collaborative community for faculty to develop globalized courses and globally focused educational opportunities outside the classroom.</p>
                        <base target='_parent'/>
                        <a href='https://www.google.com/url?q=https://docs.google.com/document/d/1CmSHOoZ9ME106Vg2s7zjLgsKq5CU4U5ICfatwN4h86k/edit?usp%3Dsharing&sa=D&ust=1595990751245000&usg=AFQjCNE7jQUUsN7S02XuMF1J7hRrUXUL4w' target='_blank' rel='noopener noreferrer' className='link b-blue b-shadow'>Learn More</a>
                    </section>
                    <section className="list-section b-white">
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        <h4>Health and Human Services Scholarships of Teaching & Learning</h4>
                        <p>A closed community of health and human services educators to collaborate in teaching and learning excellence. The Health and Human Services Scholarship of Teaching and Learning Community is developing, piloting, and showcasing teaching strategies this year to maximize English as a Foreign Language student success in the Health and Human Services Programs.</p>
                        <base target='_parent'/>
                        <a href='https://www.google.com/url?q=https://docs.google.com/document/d/1tgYoykPhDtJskdmBksX_lJTDZQxsfSdUTJ-rnOtTmyg/edit?usp%3Dsharing&sa=D&ust=1595990751243000&usg=AFQjCNEXljGVvzetbQAd8VY-SUcngf4yqw' target='_blank' rel='noopener noreferrer' className='link b-blue b-shadow'>Learn More</a>
                    </section>
                    <section className="list-section b-grey"> 
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        <h4>Innovations in Teaching and Learning</h4>
                        <p>An open and collaborative community to discuss innovative and insightful teaching strategies for the classroom and for the online environment. Our goal is to increase student engagement and to inspire the creation of dynamic courses.</p>
                        <base target='_parent'/>
                        <a href='https://www.google.com/url?q=https://docs.google.com/document/d/1thtzsmlvjUTdxPJ6Jw3YS2vvsKSX6OLEBlMGtqhoHjo/edit?usp%3Dsharing&sa=D&ust=1595990751246000&usg=AFQjCNFq06P-Hhdfol3m8PocFvYXYBZIRw' target='_blank' rel='noopener noreferrer' className='link b-blue b-shadow'>Learn More</a>
                    </section>
                    <section className="list-section b-blue">
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        <h4>Interested in Joining?</h4>
                        <p>If you are interested in joining one of the Learning Commons or would like more information, please contact Laurie Necasek at:</p>
                        <base target='_parent'/>
                        <a href='mailto:laurie.necasek@cpcc.edu' className='mail' target="_blank" rel='noopener noreferrer'>Laurie.Necasek@cpcc.edu</a>
                    </section>            
                </div>
            </div>
        );
    }
}