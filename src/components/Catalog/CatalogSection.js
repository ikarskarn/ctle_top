import React from 'react';
import CourseDescriptions from './CourseDescriptions.js';
import { faUserCircle, faBookmark, faInfo  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Catalog.css';

function CatalogSection(props) {
    return (
        <section className='category-section b-white'>
            <header id={props.id} className='category-header b-gold'>
                <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                <h3>{props.name}</h3>
            </header>
            <div className='list-courses'>
                {props.courses.map((course) => 
                    <CourseDescriptions
                        key={course.id}
                        id={course.id}
                        name={course.name}
                        learningTrack={course.learningTrack}
                        certification={course.certification}
                        description={course.description}
                    />
                )}
            </div>
        </section>
    );    
}

CatalogSection.defaultProps = {
    items: [],
}

export default CatalogSection;