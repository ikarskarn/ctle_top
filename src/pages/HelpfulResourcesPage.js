import React from 'react';
import Layout from '../components/Layout'
import CTLE_App from '../components/CTLE_App';

const HelpfulResourcesPage = ({location}) => {
  return (
    <Layout>
        <CTLE_App updatePage='helpfulResources'/>
    </Layout>
  )
}

export default HelpfulResourcesPage;