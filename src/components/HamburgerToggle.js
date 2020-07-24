import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Context from "../Context";

export default class HamburgerToggle extends React.Component {
    static contextType = Context;
    render() {
        return(
            <span className={`slide ${this.context.barsVisible}`}>
                <a onClick={e => this.context.updateOpenState()}>
                    <FontAwesomeIcon icon={faBars} />
                    <p>Menu</p>    
                </a>
            </span>
        );
    }
}