import React from 'react';
import './SearchBar.css';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class SearchBar extends React.Component {
    render() {
        return(
            <form className='catalog-search'>
                <input type='text' id='search' placeholder='Search...' name='search'/>
                <button 
                    className='b-blue' 
                    type='submit'
                    onClick={(e) => this.props.handleSearch(e, document.getElementById('search').value)}
                    >
                    <FontAwesomeIcon className='fa fa-search' icon={faSearch}/>
                </button>
            </form>
        );
    }
}