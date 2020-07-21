//bunch of import statements
import React from "react";
import "./SideBar.css";
import {
  faBars,
  faHome,
  faCalendar,
  faBook,
  faHandshake,
  faSortAlphaDown,
  faUnlock,
  faUsers,
  faQuestion,
  faPlusCircle,
  faMinusCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Collapsible from "react-collapsible";

//declaring a class
export default class SideBar extends React.Component {
  //just holds the state of the menu.  Open or closed
  state = {
    open: false, //true is open, false is closed
    sideBar: "nav closed-side", //for CSS.  The class changes to 'nav open-side' when side menu is open and 'nav closed-side when side menu is closed
    sideContent: "closed-content", //for CSS.  The class changes to 'open-content' when side menu is open and 'closed-content when side menu is closed
    plus: faPlusCircle,
    minus: faMinusCircle
  };

  //called when the hamburger menu is clicked
  updateOpenState = () => {
    //checks the value of open in state above
    let val = this.state.open;
    //toggles the value between true/false
    val = !val;
    //sets value to a new string depending on the value of open
    let side = val ? "nav open-side" : "nav closed-side";
    let content = val ? "open-content" : "closed-content";
    //let icon = val ? faPlusCircle : faMinusCircle;
    //updates the state
    this.setState({
      open: val,
      sideBar: side,
      sideContent: content
    });
  };
  //this is needed in React to Render Elements to the screen
  render() {
    //an object that holds all the data for the Top Menus

    //top menu object.  Details inside
    const topMenus = {
      //each one is labeled the same as its name
      //has an anchor element that navigates to the specific page using href
      //class names are used for CSS
      //Font Awesome is basically an imported plugin that has a bunch of icons
      //The top menu items that have sub-menus nesting underneath have the plus sign icon attached too
      home: (
        <a href="#" className="item home">
          <FontAwesomeIcon icon={faHome} className="icon" />
          Home
        </a>
      ),
      programsAndEvents: (
        <a href="#" className="item programs">
          <FontAwesomeIcon icon={faCalendar} className="icon" />
          Programs and Events
          <FontAwesomeIcon icon={this.state.plus} className="plus" />
        </a>
      ),
      courseCatalog: (
        <a href="#" className="item catalog">
          <FontAwesomeIcon icon={faBook} className="icon" />
          Course Catalog
          <FontAwesomeIcon icon={this.state.plus} className="plus" />
        </a>
      ),
      getInvolved: (
        <a href="#" className="item getInvolved">
          <FontAwesomeIcon icon={faHandshake} className="icon" />
          Get Involved
          <FontAwesomeIcon icon={this.state.plus} className="plus" />
        </a>
      ),
      teachingEffectiveness: (
        <a href="#" className="item teachingEffectiveness">
          <FontAwesomeIcon icon={faSortAlphaDown} className="icon" />
          Teaching Effectiveness
          <FontAwesomeIcon icon={this.state.plus} className="plus" />
        </a>
      ),
      helpfulResources: (
        <a href="#" className="item resources">
          <FontAwesomeIcon icon={faUnlock} className="icon" />
          Helpful Resources
          <FontAwesomeIcon icon={this.state.plus} className="plus" />
        </a>
      ),
      meetTheTeam: (
        <a href="#" className="item team">
          <FontAwesomeIcon icon={faUsers} className="icon" />
          Meet the Team
        </a>
      ),
      //NOTICE THIS ONE:  It has last added in the class name.  that is so the white bar can be added to it with CSS
      faq: (
        <a href="#" className="item faq last">
          <FontAwesomeIcon icon={faQuestion} className="icon" />
          FAQ
        </a>
      )
    };

    //these are just like the Top Menu except separated into each sub menu category with comments
    const subMenus = {
      //programs and events
      calendar: (
        <a href="#" className="sub-item calendar">
          Calendar
        </a>
      ),
      programsAndServices: (
        <a href="#" className="sub-item programsAndServices">
          Programs/Services
        </a>
      ),
      events: (
        <a href="#" className="sub-item events">
          Events
        </a>
      ),
      //Course Catalog
      requiredTraining: (
        <a href="#" className="sub-item requiredTraining">
          Required Training
        </a>
      ),
      learningTracks: (
        <a href="#" className="sub-item learningTracks">
          Learning Tracks
        </a>
      ),
      certifications: (
        <a href="#" className="sub-item certifications">
          certifications
        </a>
      ),
      //get involved
      facultySOS: (
        <a href="#" className="sub-item facultySOS">
          Faculty SOS
        </a>
      ),
      learningCommons: (
        <a href="#" className="sub-item learningCommons">
          Learning Commons
        </a>
      ),
      peerObservationProgram: (
        <a href="#" className="sub-item peerObservationProgram">
          Peer Observation Program
        </a>
      ),
      committees: (
        <a href="#" className="sub-item committees">
          CTLE Committees
        </a>
      ),
      advisoryBoard: (
        <a href="#" className="sub-item advisoryBoard">
          CTLE Advisory Board
        </a>
      ),
      //teaching effectiveness
      onlineTeachingBestPractices: (
        <a href="#" className="sub-item onlineTeachingBestPractices">
          Online Teaching Best Practices
        </a>
      ),
      teachingWithTechnology: (
        <a href="#" className="sub-item teachingWithTechnology">
          Teaching With Technology
        </a>
      ),
      technologyForYou: (
        <a href="#" className="sub-item technologyForYou">
          Technology For You
        </a>
      ),
      //helpful resources
      facultyAdminstrativeDuties: (
        <a href="#" className="sub-item facultyAdminstrativeDuties">
          Faculty Adminstrative Duties
        </a>
      ),
      travelRequests: (
        <a href="#" className="sub-item travelRequests">
          Travel Requests
        </a>
      ),
      facultyTitles: (
        <a href="#" className="sub-item facultyTitles">
          Faculty Titles
        </a>
      ),
      qualityMatters: (
        <a href="#" className="sub-item qualityMatters">
          Quality Matters
        </a>
      ),
      onlineCourseDesignProcess: (
        <a href="#" className="sub-item onlineCourseDesignProcess">
          Online Course Design Process
        </a>
      )
    };

    //tells the render function what to return to the DOM (HTML Page)
    return (
      <div id="content" className={this.state.sideContent}>
        <span className="slide">
          <a href="#" onClick={e => this.updateOpenState()}>
            <FontAwesomeIcon icon={faBars} />
          </a>
        </span>
        {/*This is how you write comments in React*/}
        {/*Collapsible is also a react plugin.  Allows you to collapse sections*/}
        <div id="menu" className={this.state.sideBar}>
          {/*The Home menu has no sub menus.  So it is called directly from the object above using the curly braces like below*/}
          {topMenus.home}
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
          {topMenus.meetTheTeam}
          {topMenus.faq}
        </div>
        <header>
          <h1>Center for Teaching and Learning Excellence</h1>
        </header>
      </div>
    );
  }
}
