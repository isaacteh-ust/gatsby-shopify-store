import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>
export const query = graphql`
  {
    allShopifyProduct {
      edges {
        node {
          id
          title
          handle
          productType
          vendor
          variants {
            id
            title
            price
          }
        }
      }
    }
  }
`
export default ComponentName
