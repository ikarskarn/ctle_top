import React from 'react';
import Layout from '../components/Layout'
import CTLE_App from '../components/CTLE_App';

const ProgramsAndEventsPage = ({location}) => {
  return (
    <Layout>
        <CTLE_App updatePage='programsAndEvents'/>
    </Layout>
  )
}

export default ProgramsAndEventsPage;