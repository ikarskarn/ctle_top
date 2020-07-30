//bunch of import statements
import React from "react";
import Context from "../../Context";
import TestBar from "../NavBars/TestBar";
import HamburgerToggle from "../HamburgerToggle";
import Page_QualityMatters from "../ProgramsAndEvents_Content/Page_QualityMatters";

export default class QualityMatters extends React.Component {
	static contextType = Context;
	render() {
		return (
			<div id="content" className={this.context.topContent}>
				<div className="page-content">
					<Page_QualityMatters />
				</div>
			</div>
		);
	}
}