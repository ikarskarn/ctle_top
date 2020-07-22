//bunch of import statements
import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Context from "../../Context";
import TestBar from "../NavBars/TestBar";

//declaring a class
export default class MeetTheTeam extends React.Component {
  static contextType = Context;
  //this is needed in React to Render Elements to the screen
  render() {
    //tells the render function what to return to the DOM (HTML Page)
    return (
        <div id="content" className={this.context.topContent}>
          <span className={`slide ${this.context.barsVisible}`}>
            <a onClick={e => this.context.updateOpenState()}>
              <FontAwesomeIcon icon={faBars} />
            </a>
          </span>
          <div id="menu" className={this.context.topBar}>
            <TestBar />
          </div>
          <div id="page-content">
            {/*PAGE CONTENT GOES HERE*/}
            <h2>Meet The Team Page Content Goes Here</h2>
          </div>
        </div>      
    );
  }
}
