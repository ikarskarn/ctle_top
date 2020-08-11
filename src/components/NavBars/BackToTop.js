import React, {useState} from 'react';
import { faArrowCircleUp  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './BackToTop.css';

const ScrollArrow = () => {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    window.addEventListener('scroll', checkScrollTop);

    return (
        <div
            className="scrollTop b-red b-shadow" 
            onClick={scrollTop} 
            style={{ display: showScroll ? 'flex' : 'none'}} 
        >
            <FontAwesomeIcon icon={faArrowCircleUp} />
            Back To Top
        </div>
    );
}

export default ScrollArrow;