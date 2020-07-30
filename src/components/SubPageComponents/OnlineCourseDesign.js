//bunch of import statements
import React from "react";
import Context from "../../Context";
import TestBar from "../NavBars/TestBar";
import HamburgerToggle from "../HamburgerToggle";
import Page_OnlineCourseDesign from "../ProgramsAndEvents_Content/Page_OnlineCourseDesign";

export default class OnlineCourseDesign extends React.Component {
	static contextType = Context;
	render() {
		return (
			<div id="content" className={this.context.topContent}>
				<div id="page-content">
					<Page_OnlineCourseDesign />
				</div>
			</div>
		);
	}
}