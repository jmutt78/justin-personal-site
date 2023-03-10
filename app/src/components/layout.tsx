import React, { useEffect, useState } from 'react';
import Head from './head';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import { theme } from '../styles';
import Nav from './nav';
import Footer from './footer';
import Social from './social';
import Email from './email';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
interface LayoutProps {
  children: React.ReactNode;
  location: Location;
}

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  // Sets target="_blank" rel="noopener noreferrer" on external links
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'));
    if (allLinks.length > 0) {
      allLinks.forEach((link) => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
    }
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }

    handleExternalLinks();
  }, [isLoading]);
  return (
    <>
      <Head />
      <div id='root'>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <a className='skip-to-content' href='#content'>
            Skip to Content
          </a>
          <StyledContent>
            <Nav isHome={isHome} />
            <Social isHome={isHome} />
            <Email isHome={isHome} />
            <div id='content'>{children}</div>
            <Footer />
          </StyledContent>
        </ThemeProvider>
      </div>
    </>
  );
};

export default Layout;
