import React from 'react';
import './CTLE_App.css';
import Context from '../Context'; //kind of like a Game Manager (Creates Global Access to this script)
import CourseCatalog from './TopPageComponents/CourseCatalog';
import GetInvolved from './TopPageComponents/GetInvolved';
import HelpfulResources from './TopPageComponents/HelpfulResources';
import Home from './TopPageComponents/Home';
import MeetTheTeam from './TopPageComponents/MeetTheTeam';
import ProgramsAndEvents from './TopPageComponents/ProgramsAndEvents';
import TeachingEffectiveness from './TopPageComponents/TeachingEffectiveness';
import { HashRouter, Route, Link } from 'react-router-dom';

class CTLE_App extends React.Component {
    state = {
        open: false, //true is open, false is closed
        topBar: "nav closed-top", //for CSS.  The class changes to 'nav open-top' when top menu is open and 'nav closed-top when top menu is closed
        topContent: "closed-content", //for CSS.  The class changes to 'open-content' when top menu is open and 'closed-content when top menu is closed
        barsVisible: "",
        //called when the hamburger menu is clicked
        updateOpenState: () => {
            //checks the value of open in state above
            let val = this.state.open;
            //toggles the value between true/false
            val = !val;
            //sets value to a new string depending on the value of open
            let top = val ? "nav open-top" : "nav closed-top";
            let content = val ? "open-content" : "closed-content";
            let bars = val ? "hidden" : "";
            //let icon = val ? faPlusCircle : faMinusCircle;
            //updates the state
            this.setState({
                open: val,
                topBar: top,
                topContent: content,
                barsVisible: bars
            });
        },
    };
    render() {
        return(
            <Context.Provider value={this.state}>
                <HashRouter basename={process.env.PUBLIC_URL}>
                    <div className='ctle-app'>
                        <Route exact path="/" component={Home} />
                        <Route path='/programs-and-events' component={ProgramsAndEvents} />
                        <Route path='/course-catalog' component={CourseCatalog} />
                        <Route path='/teaching-effectiveness' component={TeachingEffectiveness} />
                        <Route path='/get-involved' component={GetInvolved} />
                        <Route path='/meet-the-team' component={MeetTheTeam} />
                        <Route path='/helpful-resources' component={HelpfulResources} />
                    </div>
                </HashRouter>
            </Context.Provider>
        );
    }
}

export default CTLE_App;