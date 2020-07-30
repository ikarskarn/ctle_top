import React from 'react';
import './Page.css';
import {   } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faChevronLeft, 
    faChevronRight, 
    faUsers, 
    faKey, 
    faChartLine, 
    faHandshake, 
    faThumbsUp, 
    faLaptop,
    faComment, 
    faUserCircle, 
    faInfo
  } from "@fortawesome/free-solid-svg-icons";
  import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext
  } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
export default class Page_Committees extends React.Component {
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
                        <div className='committee-goals'>
                            <CarouselProvider
                                className="ad-block b-blue"
                                naturalSlideWidth={2}
                                naturalSlideHeight={1}
                                totalSlides={3}
                                interval={8000}
                                isPlaying={true}
                                isIntrinsicHeight={true}
                                visibleSlides={1}
                            >
                                <ButtonBack className='back-button'><FontAwesomeIcon icon={faChevronLeft}/></ButtonBack>
                                <Slider className='main-slider'>
                                    <Slide className='slide-root' index={0}>
                                        <FontAwesomeIcon icon={faKey} className='icon'/>
                                        <p className='slide-text'>Evaluate the needs for new faculty of the college and how the current NFE program meets those needs.</p>
                                    </Slide>
                                    <Slide index={1}>
                                        <FontAwesomeIcon icon={faChartLine} className='icon'/>
                                        <p className='slide-text'>Recommend and plan new learning activities that are consistent with the topics, themes and timeline of the NFE program and that will fulfill the needs of new faculty.</p>
                                    </Slide>
                                    <Slide index={2}>
                                        <FontAwesomeIcon icon={faLaptop} className='icon'/>
                                        <p className='slide-text'>Facilitate, recruit, and/or participate in development and delivery of learning activities to be included in the NFE program</p>
                                    </Slide>
                                </Slider>
                                <ButtonNext className='next-button'><FontAwesomeIcon icon={faChevronRight}/></ButtonNext>
                            </CarouselProvider>
                        </div>
                    </section>
                    <section className="list-section b-grey"> 
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        <h4>Adjunct Faculty Development</h4>
                        <p>Each semester, Central Piedmont employs approximately 1,800 adjunct faculty to educate our students. Often, these faculty members have constraints to participating in learning activities, such as other employment, family obligations, etc. However, the Center must strive to meet the faculty development needs of these crucial members of our college community.  Goals of the adjunct faculty development committee include:</p>
                        <div className='committee-goals'>
                            <CarouselProvider
                                className="ad-block b-white"
                                naturalSlideWidth={1}
                                naturalSlideHeight={1}
                                totalSlides={4}
                                interval={8000}
                                isPlaying={true}
                                isIntrinsicHeight={true}
                                visibleSlides={1}
                            >
                                <ButtonBack className='back-button'><FontAwesomeIcon icon={faChevronLeft}/></ButtonBack>
                                <Slider className='main-slider'>
                                    <Slide className='slide-root' index={0}>
                                        <FontAwesomeIcon icon={faKey} className='icon'/>
                                        <p className='slide-text'>Evaluate current faculty development opportunities specific to adjunct faculty; including topics, method of delivery, and meeting times and locations.Evaluate the needs for new faculty of the college and how the current NFE program meets those needs.</p>
                                    </Slide>
                                    <Slide index={1}>
                                        <FontAwesomeIcon icon={faChartLine} className='icon'/>
                                        <p className='slide-text'>Recommend and plan new learning opportunities, as well as adjustments in meeting times, locations and methods of delivery (i.e. synchronous and asynchronous virtual options) to better accommodate our adjunct faculty.Recommend and plan new learning activities that are consistent with the topics, themes and timeline of the NFE program and that will fulfill the needs of new faculty.</p>
                                    </Slide>
                                    <Slide index={2}>
                                        <FontAwesomeIcon icon={faLaptop} className='icon'/>
                                        <p className='slide-text'>Facilitate, recruit for, and/or participate in development and delivery of learning activities for adjunct faculty</p>
                                    </Slide>
                                    <Slide index={3}>
                                        <FontAwesomeIcon icon={faLaptop} className='icon'/>
                                        <p className='slide-text'>Engage and collaborate with the Adjunct Faculty Learning Community in order to better serve adjunct faculty</p>
                                    </Slide>
                                </Slider>
                                <ButtonNext className='next-button'><FontAwesomeIcon icon={faChevronRight}/></ButtonNext>
                            </CarouselProvider>
                        </div>
                    </section>
                    <section className="list-section b-white"> 
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        <h4>Inclusive Teaching Practices</h4>
                        <p>The concept of equity is included in the college’s Vision, Mission and Values, and is also a component of faculty competencies included in the Teaching and Learning Excellence Framework.</p>
                        <base target="_parent"/>
                        <a href='https://docs.google.com/presentation/d/1mcAcbdCfJjErE3mFeMq-WKtYSVh07EJvri-ZALWDMek/edit#slide=id.g63fccd70f7_0_5' target='_blank' rel='noopener noreferrer' className='link b-blue b-shadow'>Teaching and Learning Framework</a>
                        <p> It is important to provide faculty with the tools and knowledge to help them grow an equity mindset and provide an inclusive environment in their traditional or online classrooms.  Goals of the Inclusive Teaching Practices Committee include:</p>
                        <div className='committee-goals'>
                            <CarouselProvider
                                className="ad-block b-blue"
                                naturalSlideWidth={1}
                                naturalSlideHeight={1}
                                totalSlides={3}
                                interval={8000}
                                isPlaying={true}
                                isIntrinsicHeight={true}
                                visibleSlides={1}
                            >
                                <ButtonBack className='back-button'><FontAwesomeIcon icon={faChevronLeft}/></ButtonBack>
                                <Slider className='main-slider'>
                                    <Slide className='slide-root' index={0}>
                                        <FontAwesomeIcon icon={faKey} className='icon'/>
                                        <p className='slide-text'>Evaluate learning opportunities available which address the concepts of inclusive teaching and equity in the classroom.</p>
                                    </Slide>
                                    <Slide index={1}>
                                        <FontAwesomeIcon icon={faChartLine} className='icon'/>
                                        <p className='slide-text'>Recommend and plan learning activities and resources for all faculty to grow an equitable mindset and foster an inclusive classroom environment.</p>
                                    </Slide>
                                    <Slide index={2}>
                                        <FontAwesomeIcon icon={faLaptop} className='icon'/>
                                        <p className='slide-text'>Facilitate, recruit for, and/or participate in development and delivery of learning activities that focus on fostering an inclusive classroom environment.</p>
                                    </Slide>
                                </Slider>
                                <ButtonNext className='next-button'><FontAwesomeIcon icon={faChevronRight}/></ButtonNext>
                            </CarouselProvider>
                        </div>
                    </section>
                    <section className="list-section b-grey"> 
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        <h4>Online Teaching and Development</h4>
                        <p>Although many of the foundations of pedagogy and andragogy remain constant regardless of the delivery method, teaching and learning online have specific challenges which must be met. In any given semester, the number of students enrolled in online courses at Central Piedmont often rivals that of students enrolled at a physical campus. Faculty who teach this group of students need to understand the varying methods for promoting student engagement, collaboration, and communication in an online environment.  Goals of the Online Teaching and Development committee include:</p>
                        <div className='committee-goals'>
                            <CarouselProvider
                                className="ad-block b-white"
                                naturalSlideWidth={1}
                                naturalSlideHeight={1}
                                totalSlides={4}
                                interval={8000}
                                isPlaying={true}
                                isIntrinsicHeight={true}
                                visibleSlides={1}
                            >
                                <ButtonBack className='back-button'><FontAwesomeIcon icon={faChevronLeft}/></ButtonBack>
                                <Slider className='main-slider'>
                                    <Slide className='slide-root' index={0}>
                                        <FontAwesomeIcon icon={faKey} className='icon'/>
                                        <p className='slide-text'>Evaluate current learning opportunities for instructors working in the online environment, including the Online Teaching Certification.</p>
                                    </Slide>
                                    <Slide index={1}>
                                        <FontAwesomeIcon icon={faChartLine} className='icon'/>
                                        <p className='slide-text'>Recommend and plan adjustments and additional content for the Online Teaching Certification and additional offerings to support instructors working in the online environment.</p>
                                    </Slide>
                                    <Slide index={2}>
                                        <FontAwesomeIcon icon={faLaptop} className='icon'/>
                                        <p className='slide-text'>Facilitate, recruit for, and/or participate in development and delivery of learning activities.</p>
                                    </Slide>
                                    <Slide index={3}>
                                        <FontAwesomeIcon icon={faLaptop} className='icon'/>
                                        <p className='slide-text'>Facilitate, recruit for, and/or participate in the Online Teaching Coaching program.</p>
                                    </Slide>
                                </Slider>
                                <ButtonNext className='next-button'><FontAwesomeIcon icon={faChevronRight}/></ButtonNext>
                            </CarouselProvider>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}