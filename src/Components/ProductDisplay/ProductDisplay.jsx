import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext (ShopContext)
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="img" />
                <img src={product.image} alt="img" />
                <img src={product.image} alt="img" />
                <img src={product.image} alt="img" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="img" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="star" />
                <img src={star_icon} alt="star" />
                <img src={star_icon} alt="star" />
                <img src={star_icon} alt="star" />
                <img src={star_dull_icon} alt="dull" />
                <p>(333)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quibusdam. Aspernatur earum eos deleniti tempora reprehenderit? Beatae, earum, architecto odit ut veritatis consequuntur doloribus veniam quibusdam vero corporis reprehenderit. Similique.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
            <p className='productdisplay-right-category'><span>Category :</span>T-shirt, Crop Top, Women </p>
             <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest </p>
        </div>
    </div>
  )
}

export default ProductDisplay