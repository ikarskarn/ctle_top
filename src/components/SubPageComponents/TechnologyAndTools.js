//bunch of import statements
import React from "react";
import Context from "../../Context";
import TestBar from "../NavBars/TestBar";
import HamburgerToggle from "../HamburgerToggle";
import Page_TechnologyAndTools from "../ProgramsAndEvents_Content/Page_TechnologyAndTools";

export default class TechnologyAndTools extends React.Component {
	static contextType = Context;
	render() {
		return (
			<div id="content" className={this.context.topContent}>
				<div id="page-content">
					<Page_TechnologyAndTools/>
				</div>
			</div>
		);
	}
}