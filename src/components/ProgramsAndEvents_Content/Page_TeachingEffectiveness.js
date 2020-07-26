import React from 'react';
import './Page.css';
import { faInfoCircle, faHandshake, faThumbsUp, faUsers, faAsterisk   } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Page_TeachingEffectiveness extends React.Component {
    render() {
        return (
            <div className="page">
                <header className="b-grey">
                    <h2>
                        Teaching Effectiveness
                    </h2>
                </header>
                <div className="page-content">
                <section className="list-section">
                        <p className="paragraph-emphasis"> As we navigate the disruptions to our current methods of teaching and learning, it is important to discover and explore new approaches to delivering education to our students. </p>

                        <p> Most students - including many who are brand new to Central Piedmont - will experience their semester fully online, from wherever they are. The lines between formal study, personal/work, and home responsibilities and commitments will be blurred for our students and for us. We need to consider these pressures and circumstances when adapting to our new standards of excellence.</p>

                        <p>For those of us who had to adapt to online instruction without preparation, it has illuminated the gaps in which we can connect with our students to meet their needs. As we begin the return to campus, Traditional (TR) courses will no longer be standard; instead, the teaching modalities of courses are Hybrid (HY), Online (IN), and Blended (BL) have been introduced enabling synchronous learning with students who come to class and those connecting remotely.</p>

                        <p>As many may have realized, the way we engage students online can present its own set of challenges and it is critical to find ways to continually connect and interact with students. Relying solely on synchronous lectures and the learning management system is not the ideal solution to meet our students’ needs. </p>
                    </section>

                    <section className="list-section b-grey">
                    
                        <FontAwesomeIcon icon={faInfoCircle} className="icon" />
                        <p>This Teaching Roadmap will offer you, Central Piedmont faculty, suggestions on alternative teaching approaches that you can use, or even be inspired from, to keep your students engaged in the learning process.  </p>
                        <base target="_parent"/>
                        <a
                            className="b-blue b-shadow link"
                            href="https://docs.google.com/document/d/1wP8pWJAf60OnjheyfCBKvHrzIUzW-wRM1pjZGIKbmgo/edit#heading=h.l232uio6cy8q"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Teaching Roadmap
                        </a>
                        <p>We hope this resource provides you with the support you need to institute a new standard of excellence in our classrooms, both asynchronously and synchronously.</p>
                    </section>

                    <section className="list-section b-white">
                        
                        <FontAwesomeIcon icon={faInfoCircle} className="icon" />
                        <h3>Online Teaching Best Practices</h3>
                        <p> There are many things to consider when teaching fully online.  What can you do to ensure that your course is ready for your students in an online environment?</p>
                        <a 
                            className="b-blue b-shadow link"
                            href="https://inside.cpcc.edu/departments/ctle/teaching-effectiveness/online-teaching-best-practices"
                            target="_PARENT"
                        >
                            Learn More
                        </a>
                    </section>

                    <section className="list-section b-grey">                    
                        <FontAwesomeIcon icon={faHandshake} className="icon" />
                        <h3>Technology and Tools</h3>
                        <p> It is important when determining your alternative teaching approaches to be aware of the technology and tools available to you and your students.</p>
                        <a
                            className="b-blue b-shadow link" 
                            href="https://inside.cpcc.edu/departments/ctle/teaching-effectiveness/TechnologyAndTools"
                            target="_PARENT"
                        >
                            Learn More
                        </a>
                    </section>
                    
                    <section className="list-section b-white">
                        <FontAwesomeIcon icon={faThumbsUp} className="icon" />
                        <h3>Online Course Design Process</h3>
                        <p>The Online Course Design (OCD) process focuses on creating quality learning environments and experiences for students. Throughout the OCD process, our team guides faculty representatives through envisioning the course and aligning goals to that vision.</p>
                        <a
                            className="b-blue b-shadow link" 
                            href="https://inside.cpcc.edu/departments/ctle/teaching-effectiveness/ocd"
                            target="_PARENT"
                        >
                            Learn More
                        </a>
                    </section>
                </div>
            </div>
        );
    }
}