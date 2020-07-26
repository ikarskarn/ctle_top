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
        <a href="https://inside.cpcc.edu/departments/ctle" target="_PARENT" className="item"
        >
          <FontAwesomeIcon icon={faHome} className="icon" />
          Home
        </a>
      ),
      programsAndEvents: (
        <a href="https://inside.cpcc.edu/departments/ctle/programs-and-events" target="_PARENT" className="item">
          <FontAwesomeIcon icon={faCalendar} className="icon" />
          Programs and Events
          <FontAwesomeIcon icon={faPlusCircle} className="plus" />
        </a>
      ),
      courseCatalog: (
        <a href="https://inside.cpcc.edu/departments/ctle/course-catalog" target="_PARENT"  className="item">
          <FontAwesomeIcon icon={faBook} className="icon" />
          Course Catalog
          <FontAwesomeIcon icon={faPlusCircle} className="plus" />
        </a>
      ),
      getInvolved: (
        <a href="https://inside.cpcc.edu/departments/ctle/get-involved" target="_PARENT"  className="item">
          <FontAwesomeIcon icon={faHandshake} className="icon" />
          Get Involved
          <FontAwesomeIcon icon={faPlusCircle} className="plus" />
        </a>
      ),
      teachingEffectiveness: (
        <a href="https://inside.cpcc.edu/departments/ctle/teaching-effectiveness" target="_PARENT"  className="item">
          <FontAwesomeIcon icon={faSortAlphaDown} className="icon" />
          Teaching Effectiveness
          <FontAwesomeIcon icon={faPlusCircle} className="plus" />
        </a>
      ),
      helpfulResources: (
        <a href="https://inside.cpcc.edu/departments/ctle/helpful-resources" target="_PARENT"  className="item">
          <FontAwesomeIcon icon={faUnlock} className="icon" />
          Helpful Resources
          <FontAwesomeIcon icon={faPlusCircle} className="plus" />
        </a>
      ),
      //NOTICE THIS ONE:  It has last added in the class name.  that is so the white bar can be added to it with CSS
      meetTheTeam: (
        <a href="https://inside.cpcc.edu/departments/ctle/meet-the-team" target="_PARENT"  className="item last">
          <FontAwesomeIcon icon={faUsers} className="icon" />
          Meet the Team
        </a>
      ),
      //FAQ CURRENTLY HIDDEN FROM VIEW
      faq: (
        <a href="https://inside.cpcc.edu/departments/ctle/faq" target="_PARENT" className="item last">
          <FontAwesomeIcon icon={faQuestion} className="icon" />
          FAQ
        </a>
      )
    };

    //these are just like the Top Menu except separated into each sub menu category with comments
    const subMenus = {
      //programs and events
      /*calendar: (
        <a href="https://inside.cpcc.edu/departments/ctle/programs-and-events/calendar" target="_PARENT" className="sub-item">
          Calendar
        </a>
      ),*/
      programsAndServices: (
        <a href="https://inside.cpcc.edu/departments/ctle/programs-and-events/programs-and-services" target="_PARENT" className="sub-item">
          Programs/Services
        </a>
      ),
      peerObservations: (
        <a href="https://inside.cpcc.edu/departments/ctle/get-involved/peer-observations" target="_PARENT" className="sub-item">
          Peer Observations
        </a>
      ),
      events: (
        <a href="https://inside.cpcc.edu/departments/ctle/programs-and-events/events" target="_PARENT" className="sub-item">
          Events & Calendar
        </a>
      ),
      //Course Catalog
      requiredTraining: (
        <a href="https://inside.cpcc.edu/departments/ctle/course-catalog/required-training" target="_PARENT" className="sub-item">
          Required Training
        </a>
      ),
      learningTracks: (
        <a href="https://inside.cpcc.edu/departments/ctle/course-catalog/learning-tracks" target="_PARENT" className="sub-item">
          Learning Tracks
        </a>
      ),
      certifications: (
        <a href="https://inside.cpcc.edu/departments/ctle/course-catalog/certifications" target="_PARENT" className="sub-item">
          Certifications
        </a>
      ),
      //get involved
      facultySOS: (
        <a href="https://inside.cpcc.edu/departments/ctle/get-involved/faculty-sos" target="_PARENT" className="sub-item">
          Faculty SOS
        </a>
      ),
      learningCommons: (
        <a href="https://inside.cpcc.edu/departments/ctle/get-involved/learning-commons" target="_PARENT" className="sub-item">
          Learning Commons
        </a>
      ),
      committees: (
        <a href="https://inside.cpcc.edu/departments/ctle/get-involved/committees" target="_PARENT" className="sub-item">
          Committees
        </a>
      ),
      advisoryBoard: (
        <a href="https://inside.cpcc.edu/departments/ctle/get-involved/advisory-board" target="_PARENT" className="sub-item">
          Advisory Board
        </a>
      ),
      //teaching effectiveness
      onlineTeachingBestPractices: (
        <a href="https://inside.cpcc.edu/departments/ctle/teaching-effectiveness/online-teaching-best-practices" target="_PARENT" className="sub-item">
          Online Teaching Best Practices
        </a>
      ),
      onlineCourseDesignProcess: (
        <a href="https://inside.cpcc.edu/departments/ctle/teaching-effectiveness/ocd" target="_PARENT" className="sub-item">
          Online Course Design Process
        </a>
      ),
      technologyAndTools: (
        <a href="https://inside.cpcc.edu/departments/ctle/teaching-effectiveness/technology-and-tools" target="_PARENT" className="sub-item">
          Technology and Tools
        </a>
      ),
      /*technologyForYou: (
        <a href="https://inside.cpcc.edu/departments/ctle/teaching-effectiveness/technology-for-you" target="_PARENT" className="sub-item">
          Technology For You
        </a>
      ),*/
      //helpful resources
      facultyAdminstrativeDuties: (
        <a href="https://inside.cpcc.edu/departments/ctle/helpful-resources/faculty-admin-duties" target="_PARENT" className="sub-item">
          Faculty Adminstrative Duties
        </a>
      ),
      travelRequests: (
        <a href="https://inside.cpcc.edu/departments/ctle/helpful-resources/travel-requests" target="_PARENT" className="sub-item">
          Travel Requests
        </a>
      ),
      facultyTitles: (
        <a href="https://inside.cpcc.edu/departments/ctle/helpful-resources/faculty-titles" target="_PARENT" className="sub-item">
          Faculty Titles
        </a>
      ),
      qualityMatters: (
        <a href="https://inside.cpcc.edu/departments/ctle/helpful-resources/quality-matters" target="_PARENT" className="sub-item">
          Quality Matters
        </a>
      ),
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
        {/*subMenus.calendar*/}
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
        {subMenus.peerObservations}
        {subMenus.committees}
        {subMenus.advisoryBoard}
        </Collapsible>
        <Collapsible trigger={topMenus.teachingEffectiveness}>
        {subMenus.onlineTeachingBestPractices}
        {subMenus.technologyAndTools}
        {subMenus.onlineCourseDesignProcess}
        </Collapsible>
        <Collapsible trigger={topMenus.helpfulResources}>
        {subMenus.facultyAdminstrativeDuties}
        {subMenus.travelRequests}
        {subMenus.facultyTitles}
        {subMenus.qualityMatters}
        </Collapsible>
        <Collapsible trigger={topMenus.meetTheTeam} />
        <span className="close">
        <a onClick={e => this.context.updateOpenState()}>
            <FontAwesomeIcon icon={faTimes} />
        </a>
        </span>
      </>
    );
  }
}