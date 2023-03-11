import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import sr, { srConfig } from '../../utils';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr?.reveal(revealContainer?.current ?? '', srConfig());
  }, []);

  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Python',
    'Node.js',
    'GraphQL',
    'SQL',
    'NoSQL',
    'Docker',
    'AWS',
    'GCP',
    'Git',
    'Jira',
    'Confluence',
  ];

  return (
    <StyledAboutSection id='about' ref={revealContainer}>
      <h2 className='numbered-heading'>About Me</h2>

      <div className='inner'>
        <StyledText>
          <div>
            <p>
              Hello! My name is Justin, and I am passionate about leading teams in creating visually
              appealing and functional digital products. My goal is to lead a high-performing team
              and deliver exceptional products that meet the needs of our customers and drive
              business success.
            </p>
            <p>
              My path to becoming a software engineering leader was not a straight one. While still
              in college, I co-founded a utility fields services company with my father and served
              as VP of Operations, helping to lead and grow the company to 300 employees before a
              successful exit. After some soul-searching, I found my passion in software engineering
              while developing the concept for a{' '}
              <a href='https://docusites.com/'>construction application</a>.
            </p>
            <p>
              Today, I am focused on utilizing my experience and skills to help my team build the
              first global biosecurity platform at{' '}
              <a href='https://www.thepublichealthco.com/'>The Public Health Company</a>.
            </p>
            <p>
              I love to teach and mentor aspiring software engineering leaders. In my free time, I
              build micro saas products and contribute to open source.
            </p>
            ;<p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className='skills-list'>
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className='wrapper'>
            <StaticImage
              className='img'
              src='../../images/me.jpg'
              width={500}
              quality={95}
              formats={['auto', 'webp', 'avif']}
              alt='Headshot'
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
