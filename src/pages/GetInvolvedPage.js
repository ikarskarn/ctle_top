import React from 'react';
import Layout from '../components/Layout'
import CTLE_App from '../components/CTLE_App';

const GetInvolvedPage = ({location}) => {
  return (
    <Layout>
        <CTLE_App updatePage='getInvolved'/>
    </Layout>
  )
}

export default GetInvolvedPage;