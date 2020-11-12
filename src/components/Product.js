import React from 'react'
import './Product.css'

function Product({ id, title, image, price, rating }) {
    return (
        <div>
            <p className="product">{title}</p>
            <p className="product_info">
                <small>$</small>
                <strong>{price}</strong>
                <div className="product_rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>*</p>
                        ))}
                </div>
                <img src={image} alt="" />
                <button>Add to basket</button>
            </p>
        </div>
    )
}

export default Product