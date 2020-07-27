import React from 'react';
import CategoryButtons from './CategoryButtons.js';
import CatalogSection from './CatalogSection.js';
import STORE from './STORE.js';

class Catalog extends React.Component {
    render() {
        const store = STORE;
        return (
            <div className="App-list">
                {store.categories
                .filter(category => category.id !== 'random')
                .map(category => (
                    <CatalogSection
                        key={category.id}
                        id={category.id}
                        name={category.name}
                        courses={category.courseIds.map(id => store.courses[id])}
                    >
                    </CatalogSection>

                ))}
            </div>
        )
    }
}

export default Catalog;