import React from 'react';
import './Page_ProgramsAndEvents.css';
import { faUserCircle, faBookmark  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ProgramsAndEvents extends React.Component {
    render() {
      return (
        <div className="programsAndEventsPage">
          <header>
            <h2>
              Programs <br /> & <br /> Events
            </h2>
            <p>
              We are committed to fostering a rich and compelling community of
              learning excellence focused on the holistic needs of all those who
              teach.
            </p>
          </header>
          <div className="page-content">
            <section className="section withIcons">
                <FontAwesomeIcon icon={faUserCircle} className="page-icon" />
              <p>
                The Center advances best practices of impactful teaching at the
                college to inspire, guide, and support faculty and staff in the
                key areas of pedagogy, course content and instructional delivery.
              </p>
                <FontAwesomeIcon icon={faBookmark} className="page-icon" />
              <p>
                Events, programs, and workshops are aligned with the Center's
                mission and goals, and grounded in the literature on teaching,
                learning, and educational development. Specifically, these
                professional learning opportunities.
              </p>
            </section>
            <section className="section highlight-section">
              <ul>
                <li className="highlight">
                  Support the span of new, mid-career, and senior-level faculty
                  and staff
                </li>
                <li className="highlight">Address all teaching modalities</li>
                <li className="highlight">Consider diversity and inclusion</li>
                <li className="highlight">
                  Provide faculty and staff opportunities to lead, learn, and
                  reflect
                </li>
              </ul>
              <button type="button">
                  CTLE Learning Programs, Descriptions, and Guidelines
              </button>
            </section>
          </div>
        </div>
      );
    }
  }
  