import React, { RefObject, useEffect, useRef, useState } from 'react';
import { graphql, Link, PageProps, useStaticQuery } from 'gatsby';

import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import sr, { srConfig } from '../../utils';
import { StyledProject, StyledProjectsGrid } from './featured';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface PostNode {
  id: string;
  title: string;
  slug: {
    current: string;
  };
  categories: [
    {
      title: string;
    }
  ];
  excerpt: [
    {
      _rawChildren: any;
    }
  ];
  mainImage: {
    asset: {
      gatsbyImageData: any;
    };
  };
}

interface QueryResult {
  allSanityPost: {
    edges: {
      node: PostNode;
    }[];
  };
}

const BlogSection = () => {
  const revealContainer = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const data: QueryResult = useStaticQuery(graphql`
    query {
      allSanityPost {
        edges {
          node {
            id
            title
            categories {
              title
            }
            excerpt {
              _rawChildren(resolveReferences: { maxDepth: 10 })
            }
            slug {
              current
            }
            mainImage {
              asset {
                gatsbyImageData(width: 400, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
              }
            }
          }
        }
      }
    }
  `);
  const [numToShow, setNumToShow] = useState<number>(3); // state to keep track of the number of posts to show

  useEffect(() => {
    if (!prefersReducedMotion) {
      sr?.reveal(revealContainer?.current ?? '', srConfig());
    }
  }, []);

  const posts = data.allSanityPost.edges.slice(0, numToShow);

  const showMorePosts = () => {
    setNumToShow(numToShow + 5);
  };

  return (
    <section id='blog' ref={revealContainer as RefObject<HTMLDivElement>}>
      <h2 className='numbered-heading'>Blog</h2>
      <StyledProjectsGrid>
        {posts.map(({ node }) => {
          const {
            title,
            id,
            mainImage: { asset },
            slug: { current },
            categories,
            excerpt,
          } = node;
          const image = getImage(asset) as IGatsbyImageData;

          return (
            <StyledProject key={id}>
              <div className='project-content'>
                <h3 className='project-title'>{title}</h3>
                <div className='project-description'>
                  <div dangerouslySetInnerHTML={{ __html: excerpt[0]._rawChildren[0].text }} />
                  <Link style={{ marginTop: 5 }} to={`/${current}`}>
                    ...
                  </Link>
                </div>
                {categories.length && (
                  <ul className='project-tech-list'>
                    {categories?.map(({ title }, i) => (
                      <li key={i}>{title}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className='project-image'>
                <GatsbyImage image={image} alt={title} className='img' />
              </div>
            </StyledProject>
          );
        })}
      </StyledProjectsGrid>
      {numToShow < data.allSanityPost.edges.length && (
        <button onClick={showMorePosts}>Show More Posts</button>
      )}
    </section>
  );
};

export default BlogSection;
