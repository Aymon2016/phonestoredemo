


import './singleProduct.scss'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom';


import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


import RelatedProducts from './relatedProduct/relatedProduct';
import { useState, useContext } from 'react';
import { Context } from '../../utilis/context';
import imgurl from '../../assets/banner.png'

const SingleProduct = () => {

    const [quantity, seQuentity] = useState(1)

    const increment = () => {
        seQuentity((prevState) => prevState + 1)
    }
    const decrement = () => {
        seQuentity((prevState) => {
            if (prevState == 1) return 1
            return prevState - 1
        }
        )
    }

    const { id } = useParams()
    const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`)

    const { handleAddToCart, cartItems } = useContext(Context)

    if (!data) return

    const product = data.data[0]
    const URL = import.meta.env.VITE_backendurl

    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={imgurl} alt="" />
                    </div>
                    <div className="right">
                        <span className="name"> {product.attributes.productName}</span>
                        <span className='title'> {product.attributes.productTitle}</span>
                        <span className="price"> &#8377;{product.attributes.Price}</span>
                        <span className="desc"> {product.attributes.description} </span>

                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={decrement}>-</span>
                                <span>{quantity}</span>
                                <span onClick={increment}>+</span>
                            </div>
                            <button className='add-to-cart-button'
                                onClick={() => {
                                    handleAddToCart(product, quantity)
                                    seQuentity(1)
                                }
                                }
                            >
                                <AddShoppingCartIcon />
                                ADD TO CART
                            </button>
                        </div>
                        <span className="divider"></span>

                        <div className="info-item">
                            <span className="text-bold">
                                Category:{"  "}
                                <span>{product.attributes.categories.data[0].attributes.title}</span>
                            </span>
                            <span className="text-bold">
                                Share:
                                <span className="social-icons">
                                    <FacebookIcon />
                                    <InstagramIcon />
                                    <LinkedInIcon />
                                    <PinterestIcon />
                                    <TwitterIcon />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <RelatedProducts
                    productid={product.id}
                    categoryId={product.attributes.categories.data[0].id}

                />
            </div>
        </div>
    )
}

export default SingleProduct