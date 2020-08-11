import React from 'react';
import './CTLE_APP.css';
import { HashRouter, Route } from 'react-router-dom';
//#region PAGE IMPORTS
import AdvisoryBoard from './SubPageComponents/AdvisoryBoard';
import Certifications from './SubPageComponents/Certifications';
import Committees from './SubPageComponents/Committees';
import Context from '../Context'; //kind of like a Game Manager (Creates Global Access to this script)
import CourseCatalog from './TopPageComponents/CourseCatalog';
import Events from './SubPageComponents/Events';
import FacultyAdministrativeDuties from './SubPageComponents/FacultyAdministrativeDuties';
import FacultySOS from './SubPageComponents/FacultySOS';
import FacultyTitles from './SubPageComponents/FacultyTitles';
import GetInvolved from './TopPageComponents/GetInvolved';
import HelpfulResources from './TopPageComponents/HelpfulResources';
import Home from './TopPageComponents/Home';
import LearningCommons from './SubPageComponents/LearningCommons';
import LearningTracks from './SubPageComponents/LearningTracks';
import MeetTheTeam from './TopPageComponents/MeetTheTeam';
import OnlineCourseDesign from './SubPageComponents/OnlineCourseDesign';
import OnlineTeachingBestPractices from './SubPageComponents/OnlineTeachingBestPractices';
import PeerObservations from './SubPageComponents/PeerObservations';
import ProgramsAndEvents from './TopPageComponents/ProgramsAndEvents';
import ProgramsAndServices from './SubPageComponents/ProgramsAndServices';
import QualityMatters from './SubPageComponents/QualityMatters';
import RequiredTraining from './SubPageComponents/RequiredTraining';
import TeachingEffectiveness from './TopPageComponents/TeachingEffectiveness';
import TechnologyAndTools from './SubPageComponents/TechnologyAndTools';
import TravelRequests from './SubPageComponents/TravelRequests';
import BackToTop from './NavBars/BackToTop';
//#endregion

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
            
            <HashRouter basename={process.env.PUBLIC_URL}>
                <BackToTop className='backToTop'/>
                <Context.Provider value={this.state}>
                    <div className='ctle-app'>
                        <Route exact path="/home" component={Home} />
                        <Route exact path='/programs-and-events' component={ProgramsAndEvents} />
                        <Route exact path='/course-catalog' component={CourseCatalog} />
                        <Route exact path='/teaching-effectiveness' component={TeachingEffectiveness} />
                        <Route exact path='/get-involved' component={GetInvolved} />
                        <Route exact path='/meet-the-team' component={MeetTheTeam} />
                        <Route exact path='/helpful-resources' component={HelpfulResources} />
                        <Route path='/certifications' component={Certifications} />
                        <Route path='/advisory-board' component={AdvisoryBoard} />
                        <Route path='/committees' component={Committees} />
                        <Route path='/events' component={Events} />
                        <Route path='/faculty-sos' component={FacultySOS} />
                        <Route path='/learning-commons' component={LearningCommons} />
                        <Route path='/learning-tracks' component={LearningTracks} />
                        <Route path='/online-teaching-best-practices' component={OnlineTeachingBestPractices} />
                        <Route path='/peer-observations' component={PeerObservations} />
                        <Route path='/programs-and-services' component={ProgramsAndServices} />
                        <Route path='/required-training' component={RequiredTraining} />
                        <Route path='/technology-and-tools' component={TechnologyAndTools} />
                        <Route path='/faculty-admin-duties' component={FacultyAdministrativeDuties} />
                        <Route path='/faculty-titles' component={FacultyTitles} />
                        <Route path='/ocd' component={OnlineCourseDesign} />
                        <Route path='/quality-matters' component={QualityMatters} />
                        <Route path='/travel-requests' component={TravelRequests} />
                    </div>
                </Context.Provider>
            </HashRouter>   
        );
    }
}

export default CTLE_App;