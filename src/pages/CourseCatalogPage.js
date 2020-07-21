import React from 'react';
import Layout from '../components/Layout'
import CTLE_App from '../components/CTLE_App';

const CourseCatalogPage = ({location}) => {
  return (
    <Layout>
        <CTLE_App updatePage='courseCatalog'/>
    </Layout>
  )
}

export default CourseCatalogPage;