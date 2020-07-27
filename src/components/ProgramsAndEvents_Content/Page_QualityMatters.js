import React from 'react';
import './Page.css';
import { faUserCircle, faInfo  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Page_QualityMatters extends React.Component {
    render() {
        return (
            <div className="page">
                <header className="b-grey">
                    <h2>
                        Quality Matters
                    </h2>
                </header>
                <div className="page-content">
                    <section className="section info-section b-white">
                        <p className='paragraph-emphasis'>
                            Central Piedmont is an affiliate of the Quality Matters (QM) program through a statewide consortium of universities and community colleges.The College will be implementing the program, including the QM rubric to guide online course design.
                        </p>
                        <section className="list-section b-white"> 
                            <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                            <h3>What is Quality Matters</h3>
                            <p>QM is a standards-based, national leader in quality assurance for online education. The program aims to recognize and implement course design that research has shown leads to improved student outcomes in online and hybrid courses. QM will introduce faculty to best practices in instructional design through 8 comprehensive standards that examine the design of a course with a focus on continuous improvement in online education and improving student learning experiences. These standards give emphasis to the importance of the course overview and introduction, learning goals and objectives, assessment of student learning, instructional materials, course activities and learner interaction, technology, learner support, and accessibility and usability. QM also outlines a peer-review process for continuous improvement of online and hybrid courses that is designed to certify the quality of online learning.</p>
                            <p>The QM Rubric standards offer substantial benefits to course design including:</p>
                            <section className="important-note-section b-blue">
                                <p className='center'>Providing instructors with an understanding of how learners experience the course</p>
                                <p className='center'>Ensuring learning objectives align with measurable assessments</p>
                                <p className='center'>Incorporating current instructional design best practices</p>
                                <p className='center'>Incorporating learning principles that promote varied ways for students to learn and apply their knowledge and skill</p>
                            </section>
                            <p>The rubric consists of 8 General Standards and 43 Specific Review Standards. The standards inspect the design of the course, not the content or facilitation. The rubric is designed to help institutions review their own courses across the eight comprehensive standards.</p>
                            <p>There are multiple factors that play a part in a quality course and student learning experience. The focus of QM is course design, (the planning that goes into a course) not course delivery (what happens within the course once it starts).</p>
                            <p className='coming-soon b-blue b-shadow'>QM Rubric (PDF)</p>
                        </section>            
                    </section>
                </div>
            </div>
        );
    }
}