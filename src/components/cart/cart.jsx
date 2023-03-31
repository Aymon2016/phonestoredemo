import './cart.scss'
import CloseIcon from '@mui/icons-material/Close';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import Cartitem from './cartitem/Cartitem';
import { useContext } from 'react';
import { Context } from '../../utilis/context';
import { loadStripe } from '@stripe/stripe-js';
import { makePaymentRequest } from '../../utilis/api'

const Cart = ({ setShowCart }) => {

    const { cartSubTotal, cartCount, cartItems } = useContext(Context)

    const publishKey = import.meta.env.VITE_STRAPE_PUBLISH_TOKEN


    const stripePromise = loadStripe(publishKey)


    const handlePayment = async () => {


        try {


            const stripe = await stripePromise;
            console.log("call")
            const res = await makePaymentRequest.post("/api/orders", {
                products: cartItems,
            })
            console.log(res)
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            })

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="cart-panel">
            <div className="opac-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shoping Card</span>
                    <span className="close-btn"
                        onClick={() => setShowCart(false)}
                    >
                        <CloseIcon />
                        <span className="text">close</span>
                    </span>
                </div>

                {
                    cartCount == 0 ? <div className="empty-cart">
                        <RemoveShoppingCartIcon />
                        <span>No products in the cart</span>
                        <button className='return-cta'>RETURN TO SHOP</button>
                    </div> : <>
                        <Cartitem />
                        <div className="cart-footer">
                            <div className="subtotal">
                                <span className="text"> Subtotal</span>
                                <span className="text total">&#8377;{cartSubTotal}</span>
                            </div>
                            <div className="button">
                                <div className="checkout-cta" onClick={handlePayment}>Checkout</div>
                            </div>
                        </div>
                    </>

                }

            </div>
        </div>
    )
}

export default Cart