import { PortableText } from '@portabletext/react';
import { graphql, PageProps } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { StyledMainContainer } from '../../pages';
import Layout from '../layout';

const PostWrapper = styled('div')`
  margin-top: 100;
  h1 {
    margin: 0 0 30px 4px;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }
  h2 {
    margin-top: 5px;
    line-height: 0.9;
    color: var(--green);
  }
  p {
    margin: 20px 0 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

interface PostPageProps extends PageProps {
  data: {
    sanityPost: {
      id: string;
      title: string;
      categories: [
        {
          title: string;
        }
      ];
      mainImage: {
        asset: {
          gatsbyImageData: any;
        };
      };
      body: [
        {
          _rawChildren: any;
        }
      ];
    };
  };
}
// define a custom serializer for the `span` block type
const myPortableTextComponents = {
  types: {
    image: ({ value }: { value: { imageUrl: string } }) => <img src={value.imageUrl} />,

    span: ({ value }: { value: { text: string } }) => {
      return <p>{value.text}</p>;
    },
  },
};

const PostPage: React.FC<PostPageProps> = ({ data, location }) => {
  const {
    title,
    mainImage: { asset },
    categories,
    body,
  } = data.sanityPost;
  const image = getImage(asset) as IGatsbyImageData;
  console.log('body', body);

  return (
    <Layout location={location}>
      <StyledMainContainer className='fillHeight'>
        <PostWrapper style={{ marginTop: 100 }}>
          <GatsbyImage image={image} alt={title} className='img' style={{ marginBottom: 10 }} />
          <h2>{title}</h2>
          {categories.length && (
            <ul>
              {categories.map(({ title }, i) => (
                <li key={i}>{title}</li>
              ))}
            </ul>
          )}
          <PortableText
            value={body.map((block: any) => block._rawChildren[0])}
            components={myPortableTextComponents}
          />
        </PostWrapper>
      </StyledMainContainer>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
      id
      title
      categories {
        title
      }
      mainImage {
        asset {
          gatsbyImageData(width: 700, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      body {
        _key
        list
        style
        _type
        _rawChildren(resolveReferences: { maxDepth: 200 })
      }
    }
  }
`;

export default PostPage;
