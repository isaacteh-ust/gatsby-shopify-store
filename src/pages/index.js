import React from 'react'
import { graphql } from 'gatsby'
import Product from '../components/Product'
import './index.css'
import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";

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

Sentry.init({
  dsn: "https://5cde761432ab499c962d126b77e45604@o525042.ingest.sentry.io/5638484",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});
