import React from 'react';
import CourseDescriptions from './CourseDescriptions.js';
import { faUserCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Catalog.css';
import Collapsible from "react-collapsible";

function CatalogSection(props) {
    console.log("Empty: ", props.courses.length);
    return (
        <section className={`category-section b-white ${props.courses.length > 0 ? '' : 'hidden'}`}>
            
            {/*<Collapsible trigger={*/}
                <div className='collapsePlus'>
                    <header 
                        id={props.id} 
                        className={`category-header b-gold`}
                    >
                        <h3>{props.name}</h3>
                        {/*<FontAwesomeIcon icon={faPlusCircle} className='icon'/>*/}
                    </header>
                </div>
            {/*}>*/}
                <div className='list-courses'>
                    {props.courses.map((course) => 
                        <CourseDescriptions
                            key={course.id}
                            id={course.id}
                            name={course.name}
                            courseLink={`AbilityLMS ID: ${course.courseLink}`}
                            learningTrack={`Learning Track: ${course.learningTrack}`}
                            certification={`Certification: ${course.certification}`}
                            description={course.description}
                        />
                    )}
                </div>
            {/*</Collapsible>*/}
        </section>
    );    
}

CatalogSection.defaultProps = {
    items: [],
}

export default CatalogSection;