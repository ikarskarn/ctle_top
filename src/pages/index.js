import React from 'react';
import Layout from '../components/Layout'
import CTLE_App from '../components/CTLE_App';

const HomePage = ({location}) => {
  return (
    <Layout>
        <CTLE_App updatePage='home'/>
    </Layout>
  )
}

export default HomePage;