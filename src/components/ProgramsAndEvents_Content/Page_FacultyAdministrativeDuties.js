import React from 'react';
import './Page.css';
import { faClipboardList, faFile, faCheck, faQuestionCircle, faSortAlphaDown, faInfo, faMap, faCompass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Page_FacultyAdministrativeDuties extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="facultyAdmin-page-content">
                    <section className="list-section b-white">
                        <section className="list-section b-white">
                            <FontAwesomeIcon icon={faClipboardList} className='icon'/>
                            <h3>Recording Weekly Attendance</h3>
                            <p className="center">All faculty are required to record weekly attendance on the Central Piedmont Attendance System.</p>
                            <base target='_parent'/>
                            <a href='https://docs.google.com/document/d/1ycyTnDvlGZ_IsgF20zZGYXQQ4Vjvw2mE1fr1WaoGjds/edit' target='_blank' rel='noopener noreferrer' className='link b-blue b-shadow'>Fall 2020 Instructions for Recording Curriculum Attendance</a>
                            <base target='_parent'/>
                            <a href='https://inside.cpcc.edu/departments/ctle/helpful-resources/faculty-admin-duties-1/eva' className='link b-blue b-shadow'>Enrollment Verification Activity (EVA)</a>
                            
                            <h3 className="center">Additional Info</h3>
                            <base target='_parent'/>
                            <a href='https://www.cpcc.edu/about-central-piedmont/administrative-offices/compliance-and-audit/about-fte-reporting' target='_blank' rel='noopener noreferrer' className='link b-blue b-shadow'>Full Time Equivalent (FTE) Reporting</a>
                            <base target='_parent'/>
                            <a href='https://www.cpcc.edu/about-central-piedmont/policies-and-procedures/policies/education-programs/309-attendance' target='_blank' rel='noopener noreferrer' className='link b-blue b-shadow'>Attendance Policy (3.09)</a>
                            <base target='_parent'/>
                            <a href='https://wwiz.cpcc.edu/help/wsas-entry.htm' target='_blank' rel='noopener noreferrer' className='link b-blue b-shadow'>Central Piedmont Attendance System</a>
                        </section>
                        <section className="list-section b-grey"> 
                            <FontAwesomeIcon icon={faFile} className='icon'/>
                            <h3>Syllabus</h3>
                            <p>Your syllabus is the most important document in your class. It is the contract between you and your students about the requirements and objectives of the course. Your program or discipline chair is your initial contact for syllabus content and/or approval. Ask your department for details on syllabi standards and samples.</p>
                            <base target='_parent'/>
                            <a href='https://www.cpcc.edu/about-central-piedmont/administrative-offices/academic-affairs/forms#S' target='_blank' rel='noopener noreferrer' className='link b-blue b-shadow'>General Education Foundation Syllabus, Fall 2020</a>
                            <a href='https://www.cpcc.edu/about-central-piedmont/administrative-offices/academic-affairs/forms#S' target='_blank' rel='noopener noreferrer' className='link b-blue b-shadow'>Programs of Study Syllabus, Fall 2020</a>
                        </section>
                        <section className="list-section b-white line"> 
                            <FontAwesomeIcon icon={faCheck} className='icon'/>
                            <h3>Grading Procedures</h3>
                            <h4>Grading Policies and Grade Appeals</h4>
                            <p>College policies regarding grading, incompletes, grade changes, and grade appeals process can be found in the CPCC Catalog, under Grading Policy. Faculty and staff may access the catalog online at CPCC Catalog or contact their department for a copy or purchase a copy from any campus cashiering office for $2.00.</p>
                            <base target='_parent'/>
                            <a href='http://catalog.cpcc.edu/learningresources/academicregulations/gradingpolicy/' target='_blank' rel='noopener noreferrer' className='link b-blue b-shadow'>Grading Policy</a>
                            <base target='_parent'/>
                            <a href='http://catalog.cpcc.edu/' className='link b-blue b-shadow line'>CPCC Catalog</a>
                        </section>
                        <section className="list-section b-white line"> 
                            <FontAwesomeIcon icon={faQuestionCircle} className='icon'/>
                            <h4>Student Grade Appeals</h4>
                            <p className='center'>Student Grade Appeals is covered in Policy 4.07: Grievance Process for Students, Section V: Course Grade Appeals Procedure.</p>
                            <base target='_parent'/>
                            <a href='https://www.cpcc.edu/709-grievance-process-students' target='_blank' rel='noopener noreferrer' className='link b-blue b-shadow'>Policy 4.07</a>
                            <p className='center'>Download the Student Grade Appeal Form (PDF).</p>
                            <base target='_parent'/>
                            <a  href='https://www.cpcc.edu/sites/default/files/2019-05/student-grade-appeal-form.pdf' className='link b-blue b-shadow line'>Grade Appeal Form</a>
                        </section>
                        <section className="list-section b-white line"> 
                            <FontAwesomeIcon icon={faSortAlphaDown} className='icon'/>
                            <h4>Central Piedmont Grading System</h4>
                            <p>The College has three different grading systems Curriculum grade codes, Basic Skills grade codes and Continuing Education grade codes. Contact your department for information regarding the correct grading codes.</p>
                            <base target='_parent'/>
                            <a href='https://docs.google.com/document/d/1T8arqhKRAZkQPtr4WvB1894XswQq__BDdusmFGAV5Is/edit' target='_blank' rel='noopener noreferrer' className='link b-blue b-shadow'>Instructions for How to Enter Grades</a>
                        </section>
                        <section className="list-section b-white line"> 
                            <FontAwesomeIcon icon={faInfo} className='icon'/>
                            <h4>Incomplete</h4>
                            <p>An I (Incomplete) may be assigned when a student has persisted through the course and has completed at least 90% of the requirements for passing the course or when the instructor has determined extenuating circumstances exist. When an "I" is assigned, the instructor must fill out an Incomplete Grade Form (PDF) and submit it to the Division Office. A student must resolve an I (Incomplete) grade within the time frame specified by the instructor or the division, but no later than 6 months from the end of the term for which the grade was assigned. When an I grade has been resolved, the final grade will be recorded with the I (e.g., I/B) and the GPA will be re-computed. An I which is unresolved will be changed to the grade of I/F after the specified expiration date.</p>
                            <base target='_parent'/>
                            <a href='https://www.cpcc.edu/sites/default/files/2019-04/incomplete-grade-form.pdf' target='_blank' rel='noopener noreferrer' className='link b-blue b-shadow'>Incomplete Grade Form (PDF)</a>
                        </section>
                        <section className="list-section b-white"> 
                            <FontAwesomeIcon icon={faMap} className='icon'/>
                            <h4>Individual Development Plan</h4>
                            <p>An Individual Development Plan (IDP) is a powerful tool for managers to use to support employees in achieving their career development goals. By giving your employees opportunities to learn and grow, they gain mastery of skills required for their responsibilities as well as those needed to achieve their professional goals.</p>
                            <p>Development is an ongoing process that begins when a member joins your team and continues through their years of service. Each employee should have an IDP  that utilizes quarterly review discussions.  Either you or your employee can schedule the initial IDP meeting. The below form will be filled out by employees and forwarded to you at least one week before your initial IDP.</p>
                            <section className="important-note-section b-white">
                                <p className='center'>Visit the Talent Development webpage for Development Plan Toolkit for Managers.</p>
                                <base target='_parent'/>
                                <a href='https://inside.cpcc.edu/departments/talent-development/professional-development/development-resources' target='_blank' rel='noopener noreferrer' className='link b-blue b-shadow'>Development Plan Toolkit</a>
                            </section>
                            <section className="important-note-section b-white">
                                <p className='center'>More Helpful Information</p>
                                <base target='_parent'/>
                                <a href='https://docs.google.com/document/d/1ZtvAKzPw7g8puDrlmxSAb3zl90Mg-EqEckUihaG-kw4/edit' target='_blank' rel='noopener noreferrer' className='link b-blue b-shadow'>Getting Started 101</a>
                                <base target='_parent'/>
                                <a href='https://docs.google.com/document/d/1S8h2MLdkWXjhaE3Y5WVlcSl9P6sHqapURJo6gRlavVc/edit#' target='_blank' rel='noopener noreferrer' className='link b-blue b-shadow'>Teaching in Blackboard Checklist</a>
                            </section>
                        </section>
                        <section className="list-section b-grey">
                            <FontAwesomeIcon icon={faCompass} className='icon'/>
                            <h3>Standard Navigation Menu</h3>
                            <p>The development of a common course template for online courses is a tried and true quality standard for the design of online courses. The template was reviewed and approved by the Online Steering Committee.</p>
                            <p>Standard course templates provide a consistent experience for students, which reduces unnecessary time spent searching for important documents and assignments. Students will have more time to engage with their instructors and peer because they will now have a consistent experience from one class to another. They can start the course with confidence because they will not wonder if they are missing important information in a different folder.</p>
                            <base target='_parent'/>
                            <a href='https://inside.cpcc.edu/departments/ctle/helpful-resources/faculty-admin-duties-1/required-blackboard-navigation-template' className='link b-blue b-shadow'>Navigation Template Instructions</a>
                        </section>
{/*                        <section className="list-section b-blue">
                            <section className="important-note-section b-orange">
                                <p className='center'>Visit the Required Training page</p>
                                <a className='coming-soon b-blue b-shadow'>Required Training</a>
                            </section>
                        </section>  
*/}
                    </section>
                </div>
            </div>
        );
    }
}