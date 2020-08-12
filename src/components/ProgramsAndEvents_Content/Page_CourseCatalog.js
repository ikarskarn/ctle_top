import React from 'react';
import './Page.css';
import Catalog from '../Catalog/Catalog';

export default class Page_CourseCatalog extends React.Component {
    render() {
        return (
            <div className="page">
                
                <section className='list-section b-white'>
                    <p className='paragraph-emphasis'>
                        Expand your professional practice, learning, and development in the Teaching Excellence Framework (Faculty Competencies). In this catalog, you will find a variety of learning tracks, certifications, and learning activities are available in support of student learning and success. Can’t find a training or workshop of interest? Let us know.
                    </p>
                </section>
                <div className="courseCatalog-page-content">
                    <Catalog />                
                </div>
            </div>
        );
    }
}