import React from 'react';
//import STORE from './STORE.js';
import './Catalog.css';

function CourseDescriptions(props) {
    return(
        <section className='course-section b-white line'>
            <h4 className='course-header b-blue'>{props.name}</h4>
            <div className='connections-block'>
                <div className='abilityLMS'>
                    <p>{props.courseLink}</p>
                </div>
                <div className="connections">
                    <a className={(props.learningTrack === 'Learning Track: none') ? 'course-association b-blue hidden' : 'course-association b-blue coming-soon'}>
                        {props.learningTrack}
                    </a>
                    <a className={(props.certification === 'Certification: none') ? 'course-association b-blue hidden' : 'course-association b-blue coming-soon'}>
                        {props.certification}
                    </a>
                </div>
            </div>
            <p className='course-description'>{props.description}</p>
        </section>
    );
}

CourseDescriptions.defaultProps = {
    item: [],
}

export default CourseDescriptions;