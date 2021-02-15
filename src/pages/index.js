import React from 'react'
import { graphql } from 'gatsby'

export const query = graphql`
  {
    allShopifyProduct {
      nodes {
        title
        description
        id
        variants {
          shopifyId
          priceV2 {
            amount
            currencyCode
          }
        }
        images {
          localFile {
            childImageSharp {
              fixed(width: 300) {
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`
export default ({data}) => (
  <>
    <h1>Sofa for sale!</h1>
    <div className="products-grid">
      {data.allShopifyProduct.nodes.map(product => (
        <Product key={product.id} product={product}/>
      ))}
    </div>
  </>
)


