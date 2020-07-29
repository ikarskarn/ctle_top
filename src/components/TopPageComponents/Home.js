//bunch of import statements
import React from "react";
import Context from "../../Context";
import TestBar from "../NavBars/TestBar";
import HamburgerToggle from "../HamburgerToggle";
import Page_Home from "../ProgramsAndEvents_Content/Page_Home";

//declaring a class
export default class Home extends React.Component {
  static contextType = Context;
  //this is needed in React to Render Elements to the screen
  render() {
    //tells the render function what to return to the DOM (HTML Page)
    return (
        <div id="content" className={this.context.topContent}>
          <div className="page-content">
            <Page_Home />
          </div>
        </div>
    );
  }
}
