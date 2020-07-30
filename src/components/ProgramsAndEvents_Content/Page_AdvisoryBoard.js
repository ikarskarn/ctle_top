import React from 'react';
import './Page.css';
import { faUserCircle, faInfo  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Page_AdvisoryBoard extends React.Component {
    render() {
        return (
            <div className="page">
                <header className="b-grey">
                    <h2>
                        Advisory Board
                    </h2>
                </header>
                <div className="advisoryBoard-page-content">
                    <section className="list-section b-white">
                        <p className='paragraph-emphasis'>
                            The Center for Teaching and Learning Excellence advisory board works closely with the Center’s leadership, Faculty Fellows, and Center staff in providing strategic direction and making key recommendations for programming and resources for faculty success.
                        </p>
                    </section>
                    <section className="list-section b-white"> 
                        <h4>Key Responsibilities</h4>
                        <p>The board will share the Center’s governance through inter- and intra-unit partnerships from across the college. Key responsibilities of the board include:</p>
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        <p>Serving as an advocate and champion for faculty, the Center, and continuous improvement of teaching and learning.</p>
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        <p>Supporting and contributing to the Center’s mission, vision, and goal statements.</p>
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        <p>Making recommendations and providing feedback regarding faculty learning and development initiatives.</p>
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        <p>Identifying gaps or overlap in faculty programming and resources.</p>
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        <p>Serving as a key contact and liaison for faculty needs in their respective area(s) of the college.</p>
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        <p>Contributing to and approving the Center’s annual report highlighting accomplishments, growth opportunities, and change metrics.</p>
                    </section>
                    <section className="list-section b-grey">
                        <p>The advisory board is chaired by the Center’s Executive Director and membership consists of Vice President (Academic Affairs)-appointed representatives from across the college.  Board members serve rotating two- or three-year appointments.</p>
                        <p>Visit the Advisory Board Terms and Members Document below for teh Center's Current Advisory Board Information.</p>
                        <base target='_parent'/>
                        <a href='https://docs.google.com/document/d/1CondUnZ-bcvL1rC0Lil72O7fzQkFwufq7P5FK4z1IG8/edit?ts=5f1b5bd7' target='_blank' rel='noopener noreferrer' className='link b-blue b-shadow'>Advisory Board Terms and Members</a>
                        <p> If you have further questions about the board or board expectations, contact Shantell Strickland-Davis.</p>
                        <a href="mailto:shantell.stricklanddavis@cpcc.edu" target='_blank' rel='noopener noreferrer' className='mail'>Shantell.StricklandDavis@cpcc.edu.</a>
                    </section>            
                </div>
            </div>
        );
    }
}