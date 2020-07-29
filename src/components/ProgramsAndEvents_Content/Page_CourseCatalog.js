import React from 'react';
import './Page.css';
import Catalog from '../Catalog/Catalog';

export default class Page_CourseCatalog extends React.Component {
    render() {
        return (
            <div className="page">
                <header className="b-grey">
                    <h2>
                        Course Catalog
                    </h2>
                </header>
                <div className="page-content">
                    <section className="section info-section">
                        <Catalog />                
                    </section>
                </div>
            </div>
        );
    }
}