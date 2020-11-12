import React from 'react'
import './Product.css'
import StarIcon from '@material-ui/icons/Star';

function Product({ id, title, image, price, rating }) {
    return (
        <div className="product">
            <div className='product_info'>
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p><img src="https://img.icons8.com/emoji/20/000000/star-emoji.png"/></p>
                        ))}
                </div>    
            </div>
            <img src={image} alt="" />
            <button>Add to basket</button>
        </div>
    );
}

export default Product