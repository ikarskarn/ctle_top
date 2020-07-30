//bunch of import statements
import React from "react";
import Context from "../../Context";
import TestBar from "../NavBars/TestBar";
import HamburgerToggle from "../HamburgerToggle";

//declaring a class
export default class MeetTheTeam extends React.Component {
  static contextType = Context;
  //this is needed in React to Render Elements to the screen
  render() {
    //tells the render function what to return to the DOM (HTML Page)
    return (
        <div id="content" className={this.context.topContent}>
          <div id="page-content">
            {/*PAGE CONTENT GOES HERE*/}
            <h2>Meet The Team Page Content Goes Here</h2>
          </div>
        </div>      
    );
  }
}
