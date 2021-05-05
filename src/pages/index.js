import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// markup
const IndexPage = ({ data }) => {
  console.log("data", data);
  return (
    <main>
      <h1> Gatsby + gatsby-source-drupal</h1>
      {data.allNodeArticle.edges.map((article, index) => {
        let image = getImage(data.allFile.nodes[index]);
        return (
          <article
            key={article.node.title}
            style={{ maxWidth: "1024px", margin: "auto" }}
          >
            <GatsbyImage image={image} alt="test" />
            <h2>{article.node.title}</h2>
            <p>{article.node.body.value}</p>
          </article>
        );
      })}
    </main>
  );
};

export const query = graphql`
  query MyQuery {
    allNodeArticle {
      edges {
        node {
          body {
            value
          }
          field_image {
            alt
            height
            title
            width
          }
          title
        }
      }
    }
    allFile {
      nodes {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;

export default IndexPage;
