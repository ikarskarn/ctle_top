import React from 'react';
import './Page.css';
import { faUserCircle, faInfo  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Page_OnlineCourseDesign extends React.Component {
    render() {
        return (
            <div className="page">
                <header className="b-grey">
                    <h2>
                        Online Course Design
                    </h2>
                </header>
                <div className="ocd-page-content">
                    <section className="section info-section b-white">
                        <section className="list-section b-white"> 
                            <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                            <p>The Online Course Design (OCD) process focuses on creating quality learning environments and experiences for students. Throughout the OCD process, our team guides faculty representatives through envisioning the course and aligning goals to that vision. To accomplish this, we follow a 5-step process that acts as a roadmap to navigate instructional approaches, overarching course and module-level narratives, and mapping the course.</p>
                            <p>The Center for Teaching and Learning Excellence course design experts build the courses while adhering to best practices in alignment, Quality Matters standards, accessibility, and student retention, satisfaction, and engagement.</p>
                            <p>Interested in connecting with us to begin your course story? Please contact ctle@cpcc.edu.</p>
                        </section>            
                    </section>
                </div>
            </div>
        );
    }
}