import ScrollReveal from 'scrollreveal';

export const email = 'justinmcintosh7897@gmail.com';

export const navLinks = [
  {
    name: 'About',
    url: '/#about',
  },
  {
    name: 'Experience',
    url: '/#jobs',
  },
  {
    name: 'Work',
    url: '/#projects',
  },
  // {
  //   name: 'Blog',
  //   url: '/blog',
  // },
  {
    name: 'Contact',
    url: '/#contact',
  },
];

export const hex2rgba = (
  hex: {
    match: (arg0: RegExp) => {
      (): any;
      new (): any;
      map: { (arg0: (x: any) => number): [any, any, any]; new (): any };
    };
  },
  alpha = 1
) => {
  const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

export const navDelay = 1000;
export const loaderDelay = 2000;

export const KEY_CODES = {
  ARROW_LEFT: 'ArrowLeft',
  ARROW_LEFT_IE11: 'Left',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_RIGHT_IE11: 'Right',
  ARROW_UP: 'ArrowUp',
  ARROW_UP_IE11: 'Up',
  ARROW_DOWN: 'ArrowDown',
  ARROW_DOWN_IE11: 'Down',
  ESCAPE: 'Escape',
  ESCAPE_IE11: 'Esc',
  TAB: 'Tab',
  SPACE: ' ',
  SPACE_IE11: 'Spacebar',
  ENTER: 'Enter',
};

export const srConfig = (delay = 200, viewFactor = 0.25) => ({
  origin: 'bottom',
  distance: '20px',
  duration: 500,
  delay,
  rotate: { x: 0, y: 0, z: 0 },
  opacity: 0,
  scale: 1,
  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  mobile: true,
  reset: false,
  useDelay: 'always',
  viewFactor,
  viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
});

const isSSR = typeof window === 'undefined';
const sr = isSSR ? null : ScrollReveal();

export default sr;

export const socialMedia = [
  {
    name: 'GitHub',
    url: 'https://github.com/jmutt78',
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/justin-mcintosh-45897833/',
  },
];
