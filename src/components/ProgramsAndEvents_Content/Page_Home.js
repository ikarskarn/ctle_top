import React from 'react';
import './Page.css';
import { 
    faChevronLeft, 
    faChevronRight, 
    faUsers, 
    faKey, 
    faChartLine, 
    faHandshake, 
    faThumbsUp, 
    faLaptop,
    faComment
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext
  } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Symposium from '../../AdComponents/Symposium';
import Intro from '../../AdComponents/Intro';
import ReturnToCampus from '../../AdComponents/ReturnToCampus';
import ReactPlayer from "react-player";

export default class Page_Home extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="home-page-content">
                    <header>
                        <CarouselProvider
                            naturalSlideWidth={3}
                            naturalSlideHeight={1}
                            totalSlides={2}
                            interval={6000}
                            isPlaying={true}
                            isIntrinsicHeight={true}

                        >
                            <Slider>
                                <Slide className="ad-slide" index={0}>
                                    <Intro/>
                                </Slide>
                                <Slide className="ad-slide" index={1}>
                                    <ReturnToCampus />
                                </Slide>
                            </Slider>
                        </CarouselProvider>
                    </header>
                    <section className="list-section b-white">
                        <FontAwesomeIcon icon={faUsers} className='icon'/>
                        <h4>Who We Are</h4>
                        <p>The Center for Teaching and Learning Excellence (CTLE) at Central Piedmont is a place where faculty learning, collaboration, and innovation contribute to being champions of students, catalysts for opportunity, and exceptional providers of learning experiences that transform lives and strengthen our community.</p>
                    </section>
                    <section className='b-blue'>
                        <div className="vid">
                            <div className="aspect-ratio-box">
                                <ReactPlayer 
                                    className='vid-player'
                                    url="https://www.youtube.com/watch?v=7UJKfFlSxiE"
                                    width='100%'
                                    height='100%'
                                />
                            </div>
                        </div>
                    </section>
                    <section className='list-section'>
                        <p>The Center advances best practices of impactful teaching at the college to inspire, guide, and support faculty and teaching staff in the key areas of pedagogy, course content and instructional delivery.</p>
                    </section>
                    <section className='list-section b-grey vision-and-mission'>
                        <h4 className='bullet-highlight b-orange '>Vision</h4>
                        <p className='line'>The Center for Teaching and Learning Excellence will engage and inspire all faculty in collaborative professional learning and growth to support our students in achieving their goals.</p>
                        <h4 className='bullet-highlight b-orange'>Mission</h4>
                        <p>We welcome and support full-time and adjunct faculty at all career stages as they create transformational and equitable learning opportunities for our diverse community of learners.  We are committed to fostering a rich and compelling community of learning excellence focused on the holistic needs of all those who teach.</p>
                    </section>
                    <section className='list-section b-white'>
                        <h4>Goals</h4>
                        <div className='goal-box'>
                            <div className='goals'>
                                <CarouselProvider
                                    className="ad-block"
                                    naturalSlideWidth={1}
                                    naturalSlideHeight={1}
                                    totalSlides={6}
                                    interval={8000}
                                    isPlaying={true}
                                    isIntrinsicHeight={true}
                                    visibleSlides={1}
                                >
                                    <ButtonBack className='back-button'><FontAwesomeIcon icon={faChevronLeft}/></ButtonBack>
                                    <Slider className='main-slider'>
                                        <Slide className='slide-root' index={0}>
                                            <FontAwesomeIcon icon={faKey} className='icon'/>
                                            <p className='slide-text'>Provide and evaluate exceptional and relevant programs to transform student-centered learning experiences that address current educational, career, and industry standards</p>
                                        </Slide>
                                        <Slide index={1}>
                                            <FontAwesomeIcon icon={faChartLine} className='icon'/>
                                            <p className='slide-text'>Advance faculty growth through innovation, continuous learning, scholarship, and holistic well-being</p>
                                        </Slide>
                                        <Slide index={2}>
                                            <FontAwesomeIcon icon={faLaptop} className='icon'/>
                                            <p className='slide-text'>Collaborate and partner with faculty in quality instructional design and facilitation of classroom, online, and hybrid learning</p>
                                        </Slide>
                                        <Slide index={3}>
                                            <FontAwesomeIcon icon={faHandshake} className='icon'/>
                                            <p className='slide-text'>Develop and nurture strong college and community partnerships to ensure student success.</p>
                                        </Slide>
                                        <Slide index={4}>
                                            <FontAwesomeIcon icon={faComment} className='icon'/>
                                            <p className='slide-text'>Promote faculty engagement, community, and fellowship through meaningful activities, events, and resources</p>
                                        </Slide>
                                        <Slide index={5}>
                                            <FontAwesomeIcon icon={faThumbsUp} className='icon'/>
                                            <p className='slide-text'>Celebrate faculty successes and showcase accomplishments of teaching innovation and excellence</p>
                                        </Slide>
                                    </Slider>
                                    <ButtonNext className='next-button'><FontAwesomeIcon icon={faChevronRight}/></ButtonNext>
                                </CarouselProvider>
                            </div>
                        </div>
                    </section>
                    <footer className='b-blue'>
                        <p className='contact-us'>Contact Us</p>
                        <div>
                            <p>Email: <a href='mailto:ctle@cpcc.edu'> CTLE@cpcc.edu</a></p>
                            <p>Phone: <a href='tel:704-330-6059'> 704-330-6059</a></p>
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}