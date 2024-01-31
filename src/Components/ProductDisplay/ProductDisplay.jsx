import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star__dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
const {product} = props;
const {addToCart} = useContext(ShopContext);


  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
    <div className="productdisplay-img">
    <img className='productdisplay-big-img' src={product.image} alt="" />
    </div>
   </div> 

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
        <img src={star_icon} alt=""  />
        <img src={star_icon} alt=""  />
        <img src={star_icon} alt=""  />
        <img src={star_icon} alt=""  />
        <img src={star__dull_icon} alt=""  />
            <p>(123)</p>
        </div>

            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-prices-old">${product.old_price}</div>
                <div className="productdisplay-right-prices-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-discription">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis sed atque, deserunt possimus deleniti quis 
                autem ad illo vero consequatur. 
            </div>
            <div className="productdisplay-right-sizes">
                <h1>Select Size</h1>
                <div className="productdisplay-right-size">
                <div>S</div>    
                <div>M</div>    
                <div>L</div>    
                <div>XL</div>    
                <div>XXL</div>    
            </div>   

            <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
            <p className='productdisplay-right-category'>
                <span>Category: </span>
                Women T-shirt, Crop Top
            </p>
            <p className='productdisplay-right-category'>
                <span>Tags: </span>
                Modern, Latest
            </p>
            </div>



        </div>  
    </div>
  )
}

export default ProductDisplay
