import React from "react";
import "./Page.css";
import { faUniversity, faMapSigns } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Page_Events extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="events-page-content">
                    <section className="info-section">
                        <h3>Speaker Series: To Be Announced Soon</h3>
                        <ul>
                            <li className="b-gold b-shadow small-info-bg-image">
                                <FontAwesomeIcon icon={faUniversity} className="icon" />
                                {/*
                                <p>
                                    This event will be held virtually.
                                    Registration is available in Ability LMS
                                </p>*/}
                                <h2>Topic</h2>
                                <p>
                                    Diversity, Equity, and Inclusion in the Community College
                                    Classroom
                                </p>
                                <p className="date">
                                    Coming February, 2021
                                    {/*<br />
                                    10:00am*/}
                                </p>
                                {/*<base target="_parent" />
                                <a
                                    className="b-blue b-shadow link"
                                    href="https://pd.cpcc.edu/CPCC/LearnerWeb_PTM.php?ActionID=Enroll&EventID=32234"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Register Now
                                </a>*/}
                            </li>
                        </ul>
                    </section>
                    <section className="afss info-section">
                        {/*<h3>About Dr. J. Luke Wood</h3>
                        <p>
                            <span>
                                <base target="_parent" />
                                <a
                                    href="https://pd.cpcc.edu/CPCC/LearnerWeb_PTM.php?ActionID=Enroll&EventID=32234"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    J. Luke Wood, Ph.D.
                                </a>
                            </span>{" "}
                            is Vice President of Student Affairs & Campus
                            Diversity and Dean’s Distinguished Professor of
                            Education at San Diego State University. Wood also
                            serves as the Co-Director of the Community College
                            Equity Assessment Lab (CCEAL), a national research
                            and practice center that partners with community
                            colleges to support their capacity in advancing
                            outcomes for underserved students of color. In this
                            virtual event, Dr. Wood is joining Central Piedmont
                            faculty and staff to discuss how we can readdress
                            our unconscious bias, micro aggressions, and
                            inequities in higher education.
                        </p>
                        <p>
                            Wood’s presentation will not only focus on the
                            connection between macroaggressions and implicit
                            bias and how this relationship influences equity,
                            excellence, and being student-centered; but also
                            discuss overall student success, retention, and
                            completion rates.
                        </p>
                        */}
                        <h2 className="b-gold">November</h2>
                        <ul>
                            <li className="b-white line workshop">
                                <h3>Accessible Images and Videos</h3>
                                <p className="workshop-description">
                                    This webinar session will focus on creating accessible images
                                    and videos and why this is important in an online environment.
                                    The learner will be introduced to alternative text as it relates
                                    to images. Also, examples of how to write alternative text will
                                    be presented. There will be hands-on demonstrations of how to
                                    add alternative text to images in Word, PowerPoint, and the LMS.
                                    For accessible videos, the learner will be introduced to best
                                    practices for captions and transcripts with videos.
                                    Demonstrations will include using captions in Panopto and
                                    YouTube as well as creating transcripts with Google Voice
                                    Typing. WCAG, as it pertains to each topic, will be addressed as
                                    well.
                                </p>

                                <base target="_parent" />
                                <a
                                    href="https://pd.cpcc.edu/CPCC/LearnerWeb_PTM.php?ActionID=Enroll&EventID=32246"
                                    className="b-blue b-shadow link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Register in AbilityLMS for November 10th, 9:00am - 10:30am
                                </a>

                                <base target="_parent" />
                                <a
                                    href="https://pd.cpcc.edu/CPCC/LearnerWeb_PTM.php?ActionID=Enroll&EventID=32247"
                                    className="b-blue b-shadow link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Register in AbilityLMS for November 12th, 2:00pm - 2:30pm
                                </a>
                            </li>
                        </ul>

                        <h2 className="b-gold">December</h2>
                        <ul>
                            <li className="b-white line">
                                <h3>Wrapping Up Your Semester in a Pandemic</h3>
                                <p className="workshop-description">
                                    During trying times, we all tend to stress about what we need to
                                    do in our day to day job duties. Even during a pandemic, there
                                    are steps faculty can take to successfully end the semester on a
                                    positive note. Learn how you can engage with your students as
                                    the semester comes to an end and how to keep them engaged and
                                    ready to start the next semester on a positive note and with the
                                    future in mind. Participants will be able to:
                                </p>
                                <ul className="outcomes">
                                    <li>
                                        Encourage students to stay engaged through the end of the
                                        semester and into the next semester
                                    </li>
                                    <li>
                                        Help students to persist online and be successful during
                                        trying times
                                    </li>
                                    <li>
                                        Provide feedback tools to share with students to promote
                                        ongoing learning in future semester
                                    </li>
                                </ul>
                                <base target="_parent" />
                                <a
                                    href="https://cpcc.webex.com/cpcc/j.php?MTID=mb7cb94244e8f6a3d2f54f8d32ffe8e7c"
                                    className="b-blue b-shadow link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Join by WebEx on December 10th, 2:00pm - 3:00pm
                                </a>
                            </li>
                        </ul>

                        <ul>
                            <li className="b-white line">
                                <h3>Best Online Teaching Practices</h3>
                                <p className="workshop-description">
                                    How do we meet the needs of our students during a pandemic?
                                    Quite simply, we improve upon our online teaching practices.
                                    Whether you are teaching online, hybrid or using WebEx class
                                    meetings, there are ways to improve your teaching skills. In a
                                    new world of learning remotely, this workshop is designed to
                                    support and enhance the classroom experience in an online world.
                                    Participants will be able to: -Learn ways to engage unprepared
                                    students in an online environment -Embrace diversity in an
                                    online learning environment -Check in with students to ensure
                                    understanding of course content in an online environment
                                </p>
                                <ul className="outcomes">
                                    <li>
                                        Learn ways to engage unprepared students in an online
                                        environment
                                    </li>
                                    <li>Embrace diversity in an online learning environment</li>
                                    <li>
                                        Check in with students to ensure understanding of course
                                        content in an online environment
                                    </li>
                                </ul>
                                <base target="_parent" />
                                <a
                                    href="https://cpcc.webex.com/cpcc/j.php?MTID=mc52dae8cf14a2554d11089e9933f7173"
                                    className="b-blue b-shadow link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Join by WebEx on December 14th, 10:00am - 11:00am
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        );
    }
}
