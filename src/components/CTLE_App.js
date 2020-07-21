import React from 'react';
import './CTLE_App.css';
import Context from '../Context'; //kind of like a Game Manager (Creates Global Access to this script)
import Home from './TopPageComponents/Home';
import ProgramsAndEvents from './TopPageComponents/ProgramsAndEvents';
import CourseCatalog from './TopPageComponents/CourseCatalog';
import GetInvolved from './TopPageComponents/GetInvolved';
import TeachingEffectiveness from './TopPageComponents/TeachingEffectiveness';
import HelpfulResources from './TopPageComponents/HelpfulResources';
import MeetTheTeam from './TopPageComponents/MeetTheTeam';

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
        currentPage: (page) => {
            if(page === 'home') {
                return <Home />
            } else if(page === 'programsAndEvents') {
                return <ProgramsAndEvents />
            } else if (page === 'courseCatalog') {
                return <CourseCatalog />
            } else if (page === 'getInvolved') {
                return <GetInvolved />
            } else if (page === 'teachingEffectiveness') {
                return <TeachingEffectiveness />
            } else if (page === 'helpfulResources') {
                return <HelpfulResources />
            } else if (page === 'meetTheTeam') {
                return <MeetTheTeam />
            } else {
                return <Home />
            }
        }
    };
    render() {
        return(
            <Context.Provider value={this.state}>
                <div className='ctle-app'>
                    {this.state.currentPage(this.props.updatePage)}
                </div>
            </Context.Provider>
        );
    }
}

export default CTLE_App;