//bunch of import statements
import React from "react";
import Context from "../../Context";
import TestBar from "../NavBars/TestBar";
import HamburgerToggle from "../HamburgerToggle";
import Page_Committees from "../ProgramsAndEvents_Content/Page_Committees";

//declaring a class
export default class Committees extends React.Component {
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
        <Page_Committees />
        </div>
    </div>
    );
  }
}
