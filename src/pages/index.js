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
    <h1>The RAW page data</h1>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </>
)


