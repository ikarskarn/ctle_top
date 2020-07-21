//bunch of import statements
import React from "react";
import "./TopBar.css";
import {
  faHome,
  faCalendar,
  faBook,
  faHandshake,
  faSortAlphaDown,
  faUnlock,
  faUsers,
  faQuestion,
  faTimes,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Collapsible from "react-collapsible";
import Context from "../../Context";
import { Link } from 'gatsby';

export default class TestBar extends React.Component {
  static contextType = Context;
  
  render() {
    //top menu object.  Details inside
    const topMenus = {
      //each one is labeled the same as its name
      //has an anchor element that navigates to the specific page using href
      //class names are used for CSS
      //Font Awesome is basically an imported plugin that has a bunch of icons
      //The top menu items that have sub-menus nesting underneath have the plus sign icon attached too
      home: (
        <Link to="/" className="item">
          <FontAwesomeIcon icon={faHome} className="icon" />
          Home
        </Link>
      ),
      programsAndEvents: (
        <Link to="/ProgramsAndEventsPage" className="item">
          <FontAwesomeIcon icon={faCalendar} className="icon" />
          Programs and Events
          <FontAwesomeIcon icon={faPlusCircle} className="plus" />
        </Link>
      ),
      courseCatalog: (
        <Link to="/CourseCatalogPage" className="item">
          <FontAwesomeIcon icon={faBook} className="icon" />
          Course Catalog
          <FontAwesomeIcon icon={faPlusCircle} className="plus" />
        </Link>
      ),
      getInvolved: (
        <Link to="/GetInvolvedPage" className="item">
          <FontAwesomeIcon icon={faHandshake} className="icon" />
          Get Involved
          <FontAwesomeIcon icon={faPlusCircle} className="plus" />
        </Link>
      ),
      teachingEffectiveness: (
        <Link to="/TeachingEffectivenessPage" className="item">
          <FontAwesomeIcon icon={faSortAlphaDown} className="icon" />
          Teaching Effectiveness
          <FontAwesomeIcon icon={faPlusCircle} className="plus" />
        </Link>
      ),
      helpfulResources: (
        <Link to="/HelpfulResourcesPage" className="item">
          <FontAwesomeIcon icon={faUnlock} className="icon" />
          Helpful Resources
          <FontAwesomeIcon icon={faPlusCircle} className="plus" />
        </Link>
      ),
      meetTheTeam: (
        <Link to="/MeetTheTeamPage" className="item last">
          <FontAwesomeIcon icon={faUsers} className="icon" />
          Meet the Team
        </Link>
      ),
      //NOTICE THIS ONE:  It has last added in the class name.  that is so the white bar can be added to it with CSS
      faq: (
        <Link to="#" className="item last">
          <FontAwesomeIcon icon={faQuestion} className="icon" />
          FAQ
        </Link>
      )
    };

    //these are just like the Top Menu except separated into each sub menu category with comments
    const subMenus = {
      //programs and events
      calendar: (
        <a href="#" className="sub-item">
          Calendar
        </a>
      ),
      programsAndServices: (
        <a href="#" className="sub-item">
          Programs/Services
        </a>
      ),
      events: (
        <a href="#" className="sub-item">
          Events
        </a>
      ),
      //Course Catalog
      requiredTraining: (
        <a href="#" className="sub-item">
          Required Training
        </a>
      ),
      learningTracks: (
        <a href="#" className="sub-item">
          Learning Tracks
        </a>
      ),
      certifications: (
        <a href="#" className="sub-item">
          certifications
        </a>
      ),
      //get involved
      facultySOS: (
        <a href="#" className="sub-item">
          Faculty SOS
        </a>
      ),
      learningCommons: (
        <a href="#" className="sub-item">
          Learning Commons
        </a>
      ),
      peerObservationProgram: (
        <a href="#" className="sub-item">
          Peer Observation Program
        </a>
      ),
      committees: (
        <a href="#" className="sub-item">
          CTLE Committees
        </a>
      ),
      advisoryBoard: (
        <a href="#" className="sub-item">
          CTLE Advisory Board
        </a>
      ),
      //teaching effectiveness
      onlineTeachingBestPractices: (
        <a href="#" className="sub-item">
          Online Teaching Best Practices
        </a>
      ),
      teachingWithTechnology: (
        <a href="#" className="sub-item">
          Teaching With Technology
        </a>
      ),
      technologyForYou: (
        <a href="#" className="sub-item">
          Technology For You
        </a>
      ),
      //helpful resources
      facultyAdminstrativeDuties: (
        <a href="#" className="sub-item">
          Faculty Adminstrative Duties
        </a>
      ),
      travelRequests: (
        <a href="#" className="sub-item">
          Travel Requests
        </a>
      ),
      facultyTitles: (
        <a href="#" className="sub-item">
          Faculty Titles
        </a>
      ),
      qualityMatters: (
        <a href="#" className="sub-item">
          Quality Matters
        </a>
      ),
      onlineCourseDesignProcess: (
        <a href="#" className="sub-item">
          Online Course Design Process
        </a>
      )
    };

    //tells the render function what to return to the DOM (HTML Page)
    return (
      <>
        {/*Collapsible is also a react plugin.  Allows you to collapse sections*/}
        <Collapsible trigger={topMenus.home} />
        {/*This one DOES have sub menus.  So the top menu is just called inside of a Collapsible Tag like so*/}
        {/*Trigger is the text you want to show or the element you want to click on the expand what is inside of it*/}
        <Collapsible trigger={topMenus.programsAndEvents}>
        {/*The rest of the menus are just called like normal*/}
        {subMenus.calendar}
        {subMenus.programsAndServices}
        {subMenus.events}
        </Collapsible>
        <Collapsible trigger={topMenus.courseCatalog}>
        {subMenus.requiredTraining}
        {subMenus.learningTracks}
        {subMenus.certifications}
        </Collapsible>
        <Collapsible trigger={topMenus.getInvolved}>
        {subMenus.facultySOS}
        {subMenus.learningCommons}
        {subMenus.peerObservationProgram}
        {subMenus.committees}
        {subMenus.advisoryBoard}
        </Collapsible>
        <Collapsible trigger={topMenus.teachingEffectiveness}>
        {subMenus.onlineTeachingBestPractices}
        {subMenus.teachingWithTechnology}
        {subMenus.technologyForYou}
        </Collapsible>
        <Collapsible trigger={topMenus.helpfulResources}>
        {subMenus.facultyAdminstrativeDuties}
        {subMenus.travelRequests}
        {subMenus.facultyTitles}
        {subMenus.qualityMatters}
        {subMenus.onlineCourseDesignProcess}
        </Collapsible>
        <Collapsible trigger={topMenus.meetTheTeam} />
        <span className="close">
        <a href="#" onClick={e => this.context.updateOpenState()}>
            <FontAwesomeIcon icon={faTimes} />
        </a>
        </span>
      </>
    );
  }
}