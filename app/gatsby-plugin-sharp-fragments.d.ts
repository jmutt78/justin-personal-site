declare module 'gatsby-plugin-image/graphql-utils' {
  export const GatsbyImageSharpFluid: any;
}

declare module '*.graphql' {
  import { DocumentNode } from 'graphql';

  const value: DocumentNode;
  export default value;
}

declare module '*.jpg';
declare module '*.png';
declare module '*.svg';
declare module '*.gif';
