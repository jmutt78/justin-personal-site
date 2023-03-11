import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

import sr, { email, srConfig } from '../../utils';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr?.reveal(revealContainer.current ?? '', srConfig());
  }, []);

  return (
    <StyledContactSection id='contact' ref={revealContainer}>
      <h2 className='numbered-heading overline'>What’s Next?</h2>
      <h2 className='title'>Get In Touch</h2>
      <p>
        Although I am not actively searching for new opportunities at the moment, I am open to
        hearing from you. I am obsessed with building cool products and leading high performing
        teams Feel free to reach out with any questions or just to say hello.
      </p>
      <a className='email-link' href={`mailto:${email}`}>
        Say Hello
      </a>
    </StyledContactSection>
  );
};

export default Contact;
