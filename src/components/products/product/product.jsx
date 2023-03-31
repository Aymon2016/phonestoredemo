import "./product.scss"
import imgurl from '../../../assets/banner.png'

import { useNavigate } from 'react-router-dom'

const Product = ({ item }) => {
    const navigate = useNavigate()
    if (!item) return

    return (
        <div className="product-card" onClick={() => navigate('/product/' + item.id)}>
            <div className="thumbnail">
                <img src={imgurl} alt="" />
            </div>
            <div className="prod-details">
                <span className="category-name">{item.attributes.productName}</span>
                <span className="name">{item.attributes.productTitle}</span>
                <span className="price">&#8377;{item.attributes.Price}</span>
            </div>
        </div>
    )
}

export default Product