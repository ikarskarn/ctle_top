//bunch of import statements
import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Context from "../../Context";
import TestBar from "../NavBars/TestBar";
import HamburgerToggle from "../HamburgerToggle";
import Page_GetInvolved from "../ProgramsAndEvents_Content/Page_GetInvolved";

//declaring a class
export default class GetInvolved extends React.Component {
  static contextType = Context;
  //this is needed in React to Render Elements to the screen
  render() {
    //tells the render function what to return to the DOM (HTML Page)
    return (
        <div id="content" className={this.context.topContent}>
          <HamburgerToggle />
          <div id="menu" className={this.context.topBar}>
            <TestBar />
          </div>
          <div id="page-content">
            <Page_GetInvolved />
          </div>
        </div>
    );
  }
}