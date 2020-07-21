import React from 'react';
import Layout from '../components/Layout'
import CTLE_App from '../components/CTLE_App';

const MeetTheTeamPage = ({location}) => {
  return (
    <Layout>
        <CTLE_App updatePage='meetTheTeam'/>
    </Layout>
  )
}

export default MeetTheTeamPage;