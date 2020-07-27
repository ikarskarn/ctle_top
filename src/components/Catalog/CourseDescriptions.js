import React from 'react';
//import STORE from './STORE.js';
import './Catalog.css';

function CourseDescriptions(props) {
    return(
        <section className='course-section b-white line'>
            <h4 className='course-header b-blue'>{props.name}</h4>
            <p className='course-association b-grey'>Learning Tracks: {props.learningTrack}</p>
            <p className='course-association b-grey'>Certification: {props.certification}</p>
            <p className='course-description'>{props.description}</p>
        </section>
    );
}

CourseDescriptions.defaultProps = {
    item: [],
}

export default CourseDescriptions;