import React from 'react'
import style from './Product.module.css'
function ProductC({data}) {
  return (
    <div className={style.cardp}>

    <img src={data.pic} />
    <div>

    <p>{data.productType}</p>
    <span>{data.range}</span>
    </div>
    </div>
  )
}

export default ProductC