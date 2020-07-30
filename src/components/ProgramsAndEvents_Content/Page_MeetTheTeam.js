import React from 'react';
import './Page.css';
import { faUniversity } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Catherine from '../../images/Catherine.png';
import Chris from '../../images/Chris.png';
import Ellen from '../../images/Ellen.png';
import Jennifer from '../../images/Jennifer.png';
import JLu from '../../images/JLu.png';
import Laurie from '../../images/Laurie.png';
import Lindy from '../../images/Lindy.png';
import Marc from '../../images/Marc.png';
import Penny from '../../images/Penny.png';
import Shannon from '../../images/Shannon.png';
import Shantell from '../../images/Shantell.png';

export default class Page_MeetTheTeam extends React.Component {
    render() {
        return (
            <div className="page">
                <header className="b-grey">
                    <h2>
                        Meet The Team
                    </h2>
                </header>
                <div className="meetTheTeam-page-content">
                    <section className="bio-section b-white line">
                        <img className='bio-image' src={Shantell}></img>
                        <div className='bio-info'>
                            <h3 className='bio-name'>Shantell Strickland-Davis, Ph.D</h3>
                            <h4 className='bio-title'>Executive Director: Center for Teaching and Learning Excellence</h4>
                            <p className='bio-text'>Shantell is the Executive Director of the Center for Teaching and Learning Excellence.  She serves as a consultant to all units of the College in the design and development of programming and resources that support faculty and student success. She oversees all facets of faculty learning and engagement at the college, including faculty professional development and support for academic administrators.  Shantell loves to shop, garden, and play with her two Chihuahua babies – Hershey and Carmella Pie.</p>
                        </div>
                    </section>
                    <section className="bio-section b-blue line">
                        <img className='bio-image' src={Ellen}></img>
                        <div className='bio-info'>
                            <h3 className='bio-name'>Ellen Makkas, MSc., PMP</h3>
                            <h4 className='bio-title'>Project Manager: Center for Teaching and Learning Excellence</h4>
                            <p className='bio-text'>Ellen has been with Central Piedmont since 2011 and currently functions as the Project Manager for the Center for Teaching and Learning Excellence where she oversees projects focused on the design and development of accessible learning experiences that follow the Quality Matters standards to support progressive levels of competency that support student success. She also consults with faculty to create innovative learning solutions that align instructional assessment strategies with student learning outcomes. In addition to her full-time work, Ellen has been instructing in the Simulation and Game Development program since 2013 where her primary focus of instruction is Production Management, Serious Games, Virtual Environments, and Game Design</p>
                        </div>
                    </section>
                    <section className="bio-section b-white line">
                        <img className='bio-image' src={Laurie}></img>
                        <div className='bio-info'>
                            <h3 className='bio-name'>Laurie Necasek</h3>
                            <h4 className='bio-title'>Coordinator: Center for Teaching and Learning Excellence</h4>
                            <p className='bio-text'>Laurie Necasek is the Coordinator for the Center of Teaching and Learning Excellence. She has a diverse career background and has worked in multiple areas of the college since 2012, including Student Affairs as a Disability Counselor, and in Academic Affairs as an Instructional Developer II in Online Learning as well as Coordinator of Faculty Learning and Development on the Faculty Development team.</p>
                            <p>With her background of working with students with disabilities and in the field of Instructional Design, she developed a specialty in online accessibility. Laurie has a passion for creating inclusive and accessible online content is committed to helping others at the college learn more about making online content accessible. Laurie is actively involved in groups and leadership positions outside of her role as Coordinator of the Center, including College Senate Senator and Committee Co-chair, and Care Team.  Outside of work, Laurie loves to cook, exercise, travel to the beach, and spend time with her family. </p>
                        </div>
                    </section>
                    <section className="bio-section b-blue line">
                        <img className='bio-image' src={Catherine}></img>
                        <div className='bio-info'>
                            <h3 className='bio-name'>Catherine Benante</h3>
                            <h4 className='bio-title'>Instructional Designer: Center for Teaching and Learning Excellence</h4>
                            <p className='bio-text'>Catherine Benante is an Instructional Designer for the Center for Teaching and Learning Excellence. She received her Master of Arts degree, majoring in Educational Media, Curriculum and Instruction from Appalachian State University in May, 2017. She began her career at Central Piedmont in August, 2017 with part-time work in the Professional Development Dept., eventually moving into full-time work with the Professional Development and Online Learning teams. She hails from New Jersey, with years spent in NYC, San Francisco and Silicon Valley, working six years for Electronic Arts, a video game industry leader. She currently resides in Charlotte, has a fuzzy, wonderful dog named Breezy and enjoys everything that falls under the category of culture.</p>
                        </div>
                    </section>
                    <section className="bio-section b-white line">
                        <img className='bio-image' src={JLu}></img>
                        <div className='bio-info'>
                            <h3 className='bio-name'>Jonathan (J-Lu) Luoni</h3>
                            <h4 className='bio-title'>Instructional Designer: Center for Teaching and Learning Excellence</h4>
                            <p className='bio-text'>Jlu loves learning new things while meeting others who are motivated and enjoy solving problems while keeping a humble and humorous attitude. He has no problem tackling problems that might be out of his reach, he will ascend to reach them...he lives for that improvement. His motto is see one, do one, teach one.</p>
                            <p>At Central Piedmont, he designs and develops online courses and materials as an Instructional Designer; He is also an adjunct instructor in the Simulation and Game Development Program. He has worked at Central Piedmont in one department or another since 2011. He believes the best thing about this place is meeting the amazing faculty, staff, and students that attend, all looking to better themselves in one some way. This creates a diverse community, full of brilliant passions, customs, and cultures that thrive on sharing their ideas with one another.</p>
                        </div>
                    </section>
                    <section className="bio-section b-blue line">
                        <img className='bio-image' src={Penny}></img>
                        <div className='bio-info'>
                            <h3 className='bio-name'>Penny Pells</h3>
                            <h4 className='bio-title'>Instructional Designer: Center for Teaching and Learning Excellence</h4>
                            <p className='bio-text'>Penny Pells is an instructional designer in the Center for Teaching and Learning Excellence.  She has been an English language instructor for more than 15 years and has taught at the college since 2011. Her students range from 5 to 95 years old and speak more than 70 languages. Her professional interests include instructional design, classroom best practices, and hybrid/blended instruction. As a lifelong learner, Penny is passionate about teaching, learning new skills, language and culture study, and leveraging technology to improve the learning experience. When she’s not developing workshops or supporting faculty with their course design, she enjoys spending time with her family, exercising, and hiking the great outdoors. </p>
                        </div>
                    </section>
                    <section className="bio-section b-white line">
                        <img className='bio-image' src={Marc}></img>
                        <div className='bio-info'>
                            <h3 className='bio-name'>Marc Tucker</h3>
                            <h4 className='bio-title'>Instructional Designer: Center for Teaching and Learning Excellence</h4>
                            <p className='bio-text'>Marc Tucker has been a part of the CPCC Family for almost 13 years.  He began his career at CPCC as a student in the Simulation and Game Development Department.  He quickly moved on to become a Full-Time faculty in the SGD department in 2008.  He taught many subjects along the way including Design, Modeling, Animation, Rigging, Lighting and Shading, AI/Mobile/C# programming, Character Development, Level Design, Virtual Environments (VR/AR) and whatever else needed teaching.  In September 2019, he was recruited into the Online Learning area to bring the immersive technology element to the team for faculty and staff to utilize for student engagment and retention.  He is happy to be a part of the Center for Teaching and Learning Team.  Outside of work, he enjoys playing guitar, writing music, performing in Theatre productions and creating game and web applications.</p>
                        </div>
                    </section>
                    <section className="bio-section b-blue line">
                        <img className='bio-image' src={Shannon}></img>
                        <div className='bio-info'>
                            <div className='faculty-fellow b-white'>
                                <FontAwesomeIcon icon={faUniversity} className='icon'/>
                                <p>Faculty Fellow</p>
                            </div>
                            <h3 className='bio-name'>Shannon Blair</h3>
                            <h4 className='bio-title'>Professor: English</h4>
                            <p className='bio-text'>English Professor Shannon Blair began her Central Piedmont career in 2006 as adjunct faculty. She is thrilled to now work with the college as a CTLE Faculty Fellow. While working alongside her colleagues, she hopes to be a force of constant, creative support in an ever-changing higher ed landscape. Shannon has two children who keep her laughing (and crying). She is also a writer at pinkpenwriting.com and a lifelong learner who enjoys discovering how little she knows in the kitchen, garden, and classroom. Please reach out! She’d love to hear your ideas and further your teaching goals—big or small. ​</p>
                        </div>
                    </section>
                    <section className="bio-section b-white line">
                        <img className='bio-image' src={Chris}></img>
                        <div className='bio-info'>
                            <div className='faculty-fellow b-blue'>
                                <FontAwesomeIcon icon={faUniversity} className='icon'/>
                                <p>Faculty Fellow</p>
                            </div>
                            <h3 className='bio-name'>Christopher Goenner</h3>
                            <h4 className='bio-title'>Program Chair: Emergency Medical Services - Public Safety Division</h4>
                            <p className='bio-text'>Chris has dedicated his life as a public servant for 28 years. He has served as a police officer, firefighter, and paramedic. He came to CPCC in spring 2014 as faculty in the Emergency Medical Sciences Program and was then assigned the Program Chair role six months later. He has an Associates Degree in EMS from Lenoir CC, a BS Degree in Emergency Management and a Masters Degree in Health Sciences from WCU. He will begin his Educational Doctorate Degree in Educational Leadership next year also at WCU. He has been married for 26 years to Jodi and has two sons, Devin and Brenton.​​</p>
                        </div>
                    </section>
                    <section className="bio-section b-blue line">
                        <img className='bio-image' src={Lindy}></img>
                        <div className='bio-info'>
                            <div className='faculty-fellow b-white'>
                                <FontAwesomeIcon icon={faUniversity} className='icon'/>
                                <p>Faculty Fellow</p>
                            </div>
                            <h3 className='bio-name'>Lindy Hues</h3>
                            <h4 className='bio-title'>Faculty: Advertising + Graphic Design - Applied Technologies Division</h4>
                            <p className='bio-text'>Lindy Hues has been teaching full time the Advertising + Graphic Design program since 2015, but her career with CP started in the Fall of 2011. Lindy has also served as an Adjunct Instructor in the IT Division and as the Web Designer for the College. With a background in design, architecture, music, and web development, Lindy brings a multidisciplinary approach to her teaching that balances pragmatism with idealism. She loves to learn new things and is looking forward to serving as a Faculty Fellow, where she hopes to continue developing her teaching skills while helping her peers to do the same.​​</p>
                        </div>
                    </section>
                    <section className="bio-section b-white line">
                        <img className='bio-image' src={Jennifer}></img>
                        <div className='bio-info'>
                            <div className='faculty-fellow b-blue'>
                                <FontAwesomeIcon icon={faUniversity} className='icon'/>
                                <p>Faculty Fellow</p>
                            </div>
                            <h3 className='bio-name'>Jennifer Perkins</h3>
                            <h4 className='bio-title'>Associate Professor: Academic Related College Student Success</h4>
                            <p className='bio-text'>Born a Gen Xer, Jennifer Perkins was born outside Philadelphia and received a solid educational foundation which led her to college in Charlotte at UNCC. She fell in love with the south and her husband, settling in Union County where they raised three sons. She earned her master’s in education at Queen’s and started her career in the elementary school. Passionate for teaching and inspiring others to be their best brought her to CPCC. In 2004, as a part-timer, she began teaching in Developmental English and then ACA; she has been full-time with ACA since 2010. She has served as College Senate President and worked as Peer Developer. Primarily, she is a faculty member and always will be a teacher at heart.​​</p>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}