import * as React from 'react';
import type { PageProps } from 'gatsby';
import Layout from '../components/layout';
import Intro from '../components/sections/intro';
import About from '../components/sections/about';
import Jobs from '../components/sections/jobs';
import styled from 'styled-components';
import Featured from '../components/sections/featured';
import Projects from '../components/sections/projects';
import Contact from '../components/sections/contact';
import Blog from '../components/sections/blog';

export const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <StyledMainContainer className='fillHeight'>
        <Intro />
        <About />
        <Blog />
        <Jobs />
        <Featured />
        <Projects />
        <Contact />
      </StyledMainContainer>
    </Layout>
  );
};

export default IndexPage;
