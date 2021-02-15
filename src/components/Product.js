import React from 'react'
import Image from 'gatsby-image'

const Product = ({product}) => {
  return (
    <div className="product-wrap">
      <Image fixed={product.images[0].localFile.childImageSharp.fixed}/>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <button>Buy for {product.variants[0].priceV2.amount}</button>
    </div>
  )
}

export default Product
