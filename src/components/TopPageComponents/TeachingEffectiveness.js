//bunch of import statements
import React from "react";
import Context from "../../Context";
import TestBar from "../NavBars/TestBar";
import HamburgerToggle from "../HamburgerToggle";
import Page_TeachingEffectiveness from "../ProgramsAndEvents_Content/Page_TeachingEffectiveness";

export default class TeachingEffectiveness extends React.Component {
	static contextType = Context;
	render() {
		return (
			<div id="content" className={this.context.topContent}>
				<div id="page-content">
					<Page_TeachingEffectiveness />
				</div>
			</div>
		);
	}
}