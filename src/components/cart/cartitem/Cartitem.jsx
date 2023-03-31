
import './Cartitem.scss'
import prod from '../../../assets/banner.png'
import CloseIcon from '@mui/icons-material/Close';
import { useContext } from 'react';
import { Context } from '../../../utilis/context';

const Cartitem = () => {

    const { handleRemoveFromCart, handleCartProductQuantity, cartItems } = useContext(Context)

    if (!cartItems) return
    console.log(cartItems)

    return (
        <div className="cart-products">
            {
                cartItems.map(item => (
                    <div key={item.id} className="cart-product">
                        <div className="img-container">
                            <img src={prod} alt="" />
                        </div>
                        <div className="prod-details">
                            <span className="name">{item.attributes.title}</span>
                            <span onClick={() => handleRemoveFromCart(item)
                            }
                            >
                                <CloseIcon className='close-btn' />
                            </span>
                            <div className="quantity-buttons">
                                <span
                                    onClick={() => handleCartProductQuantity("dec", item)}>-</span>
                                <span>{item.attributes.quantity}</span>
                                <span
                                    onClick={() => handleCartProductQuantity("inc", item)}>+</span>
                            </div>
                            <div className="text">
                                <span>{item.attributes.quantity}</span>
                                <span>*</span>
                                <span>{item.attributes.price}</span>
                                <span className='highlight'> = &#8377;{item.attributes.quantity * item.attributes.price}</span>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Cartitem