import React from 'react';
import Layout from '../components/Layout'
import CTLE_App from '../components/CTLE_App';

const TeachingEffectivenessPage = ({location}) => {
  return (
    <Layout>
        <CTLE_App updatePage='teachingEffectiveness'/>
    </Layout>
  )
}

export default TeachingEffectivenessPage;