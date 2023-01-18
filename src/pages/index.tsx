import * as React from 'react';
import type { PageProps } from 'gatsby';
import Layout from '../components/layout';
import Intro from '../components/intro';
import About from '../components/about';

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <Intro />
      <About />
    </Layout>
  );
};

export default IndexPage;
