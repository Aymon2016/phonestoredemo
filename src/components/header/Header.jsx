import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';


import Search from './search/Search'
import Cart from '../cart/cart'


import './Header.scss'
import { Context } from '../../utilis/context';

const Headers = () => {
    const { cartCount } = useContext(Context)


    const navigate = useNavigate()

    const [scrolled, setScrolled] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const [showSearch, setShowSearch] = useState(false)

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true)
        } else {
            setScrolled(true)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [])
    return (
        <>
            <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}>
                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => navigate("/")}>Home</li>
                        <li>About</li>
                        <li>Categories</li>
                    </ul>
                    <div className="center" onClick={() => navigate("/")}>
                        jeweory
                    </div>
                    <div className="right">
                        <SearchIcon onClick={() => setShowSearch(true)} />
                        <FavoriteBorderIcon />
                        <span className='cart-icon' onClick={() => setShowCart(true)}>
                            <ShoppingCartCheckoutIcon />
                            <span>{cartCount}</span>
                        </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart={setShowCart} />}
            {showSearch && <Search setShowSearch={setShowSearch} />}
        </>
    )
}

export default Headers