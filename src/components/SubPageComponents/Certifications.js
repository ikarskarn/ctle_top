//bunch of import statements
import React from "react";
import Context from "../../Context";
import TestBar from "../NavBars/TestBar";
import HamburgerToggle from "../HamburgerToggle";
import Page_Certifications from "../ProgramsAndEvents_Content/Page_Certifications";

export default class Certifications extends React.Component {
	static contextType = Context;
	render() {
		return (
			<div id="content" className={this.context.topContent}>
				<div className="page-content">
					<Page_Certifications/>
				</div>
			</div>
		);
	}
}
