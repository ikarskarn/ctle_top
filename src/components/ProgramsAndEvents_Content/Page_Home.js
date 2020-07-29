import React from 'react';
import './Page.css';
import { faUserCircle, faInfo  } from "@fortawesome/free-solid-svg-icons";
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

export default class Page_Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nfe_info: '',
        };
    }
    handleClick = (val) => {
        if(val === 'evaluate') {
            this.setState({
                nfe_info: 'Evaluate the needs for new faculty of the college and how the current NFE program meets those needs.',
            })
        } else if(val === 'recommend') {
            this.setState({
                nfe_info: 'Recommend and plan new learning activities that are consistent with the topics, themes and timeline of the NFE program and that will fulfill the needs of new faculty.'
            })
        } else if(val === 'facilitate') {
            this.setState({
                nfe_info: 'Facilitate, recruit, and/or participate in development and delivery of learning activities to be included in the NFE program'
            })
        }
    }
    render() {
        return (
            <div className="page">
                <div className="ad-div">
                    <header>
                        <CarouselProvider
                            className="ad-block"
                            naturalSlideWidth={2}
                            naturalSlideHeight={1}
                            totalSlides={2}
                            interval={5000}
                            isPlaying={true}
                            isIntrinsicHeight={true}
                        >
                            <Slider>
                                <Slide className="ad-slide" index={0}>
                                    <Symposium />
                                </Slide>
                                <Slide className="ad-slide" index={1}>
                                    <Intro/>
                                </Slide>
                            </Slider>
                        </CarouselProvider>
                    </header>
                    <section className="list-section b-white">
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                            <h4>Who We Are</h4>
                            <p>The Center for Teaching and Learning Excellence (CTLE) at Central Piedmont is a place where faculty learning, collaboration, and innovation contribute to being champions of students, catalysts for opportunity, and exceptional providers of learning experiences that transform lives and strengthen our community.</p>
                            
                            <p className='coming-soon b-blue b-shadow'>How To Enroll</p>
                            <p className='coming-soon b-grey b-shadow'>Learn More</p>
                        </section>    
                    </div>
            </div>
        );
    }
}