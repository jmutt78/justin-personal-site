import * as React from 'react';
import type { PageProps } from 'gatsby';
import Layout from '../components/layout';

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <div></div>
    </Layout>
  );
};

export default IndexPage;
