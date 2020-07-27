import React from 'react';
import './Page.css';
import { faUserCircle, faInfo  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Page_FacultyAdministrativeDuties extends React.Component {
    render() {
        return (
            <div className="page">
                <header className="b-grey">
                    <h2>
                        Faculty Administrative Duties
                    </h2>
                </header>
                <div className="page-content">
                    <section className="section info-section b-white">
                        <section className="list-section b-white">
                            <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                            <h3>Recording Weekly Attendance</h3>
                            <p className="center">All faculty are required to record weekly attendance on the Central Piedmont Attendance System.</p>
                            <p className='coming-soon b-blue b-shadow'>Fall 2020 Instructions for Recording Curriculum Attendance</p>
                            <p className='coming-soon b-blue b-shadow'>Enrollment Verification Activity (EVA)</p>
                            <h3 className="center">Additional Info</h3>
                            <p className='coming-soon b-blue b-shadow'>Full Time Equivalent (FTE) Reporting</p>
                            <p className='coming-soon b-blue b-shadow'>Attendance Policy (3.09)</p>
                            <p className='coming-soon b-blue b-shadow'>Central Piedmont Attendance System</p>
                        </section>
                        <section className="list-section b-grey"> 
                            <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                            <h3>Syllabus</h3>
                            <p>Your syllabus is the most important document in your class. It is the contract between you and your students about the requirements and objectives of the course. Your program or discipline chair is your initial contact for syllabus content and/or approval. Ask your department for details on syllabi standards and samples.</p>
                            <p className='coming-soon b-blue b-shadow'>General Education Foundation Syllabus, Fall 2020</p>
                            <p className='coming-soon b-blue b-shadow'>Programs of Study Syllabus, Fall 2020</p>
                        </section>
                        <section className="list-section b-white line"> 
                            <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                            <h3>Grading Procedures</h3>
                            <h4>Grading Policies and Grade Appeals</h4>
                            <p>College policies regarding grading, incompletes, grade changes, and grade appeals process can be found in the CPCC Catalog, under Grading Policy. Faculty and staff may access the catalog online at CPCC Catalog or contact their department for a copy or purchase a copy from any campus cashiering office for $2.00.</p>
                            <p className='coming-soon b-blue b-shadow'>Grading Policy</p>
                            <p className='coming-soon b-blue b-shadow line'>CPCC Catalog</p>
                        </section>
                        <section className="list-section b-white line"> 
                            <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                            <h4>Student Grade Appeals</h4>
                            <p className='center'>Student Grade Appeals is covered in Policy 7.09: Grievance Process for Students, Section V: Course Grade Appeals Procedure.</p>
                            <p className='coming-soon b-blue b-shadow'>Policy 7.09</p>
                            <p className='center'>Download the Student Grade Appeal Form (PDF).</p>
                            <p className='coming-soon b-blue b-shadow line'>Grade Appeal Form</p>
                        </section>
                        <section className="list-section b-white line"> 
                            <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                            <h4>Central Piedmont Grading System</h4>
                            <p>The College has three different grading systems Curriculum grade codes, Basic Skills grade codes and Continuing Education grade codes. Contact your department for information regarding the correct grading codes.</p>
                            <p className='coming-soon b-blue b-shadow'>Instructions for How to Enter Grades</p>
                        </section>
                        <section className="list-section b-white line"> 
                            <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                            <h4>Incomplete</h4>
                            <p>An I (Incomplete) may be assigned when a student has persisted through the course and has completed at least 90% of the requirements for passing the course or when the instructor has determined extenuating circumstances exist. When an "I" is assigned, the instructor must fill out an Incomplete Grade Form (PDF) and submit it to the Division Office. A student must resolve an I (Incomplete) grade within the time frame specified by the instructor or the division, but no later than 6 months from the end of the term for which the grade was assigned. When an I grade has been resolved, the final grade will be recorded with the I (e.g., I/B) and the GPA will be re-computed. An I which is unresolved will be changed to the grade of I/F after the specified expiration date.</p>
                            <p className='coming-soon b-blue b-shadow'>Incomplete Grade Form (PDF)</p>
                        </section>
                        <section className="list-section b-white"> 
                            <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                            <h4>Individual Development Plan</h4>
                            <p>An Individual Development Plan (IDP) is a powerful tool for managers to use to support employees in achieving their career development goals. By giving your employees opportunities to learn and grow, they gain mastery of skills required for their responsibilities as well as those needed to achieve their professional goals.</p>
                            <p>Development is an ongoing process that begins when a member joins your team and continues through their years of service. Each employee should have an IDP  that utilizes quarterly review discussions.  Either you or your employee can schedule the initial IDP meeting. The below form will be filled out by employees and forwarded to you at least one week before your initial IDP.</p>
                            <section className="important-note-section b-white">
                                <p className='center'>Visit the Talent Development webpage for Development Plan Toolkit for Managers.</p>
                                <p className='coming-soon b-blue b-shadow'>Development Plan Toolkit</p>
                            </section>
                            <section className="important-note-section b-white">
                                <p className='center'>More Helpful Information</p>
                                <p className='coming-soon b-blue b-shadow'>Getting Started 101</p>
                                <p className='coming-soon b-blue b-shadow'>Teaching in Blackboard Checklist</p>
                            </section>
                        </section>
                        <section className="list-section b-blue">
                            <section className="important-note-section b-orange">
                                <p className='center'>Visit the Required Training page</p>
                                <p className='coming-soon b-blue b-shadow'>Required Training</p>
                            </section>
                        </section>  
                    </section>
                </div>
            </div>
        );
    }
}