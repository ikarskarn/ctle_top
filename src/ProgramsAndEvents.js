//bunch of import statements
import React from "react";
import "./TopBar.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Collapsible from "react-collapsible";
import Context from "./Context";
import TestBar from "./TestBar";

//declaring a class
export default class ProgramsAndEvents extends React.Component {
  static contextType = Context;
  //this is needed in React to Render Elements to the screen
  render() {
    //tells the render function what to return to the DOM (HTML Page)
    return (
      <div id="content" className={this.context.topContent}>
        <span className={`slide ${this.context.barsVisible}`}>
          <a href="#" onClick={e => this.context.updateOpenState()}>
            <FontAwesomeIcon icon={faBars} />
          </a>
        </span>
        {/*PAGE CONTENT GOES HERE*/}
        <div id="menu" className={this.context.topBar}>
          <TestBar />
        </div>
        <div id="page-content">
          <p>Programs and Events Page Content Goes Here</p>
        </div>
      </div>
    );
  }
}
