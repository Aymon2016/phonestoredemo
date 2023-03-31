
import { useParams } from 'react-router-dom'
import Product from '../products/product/product'
import './category.scss'
import useFetch from '../../hooks/useFetch'
import Products from '../products/products'
const Category = () => {

    const { id } = useParams()

    const { data } = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`)

    if (!data) return
    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">{data.data[0].attributes.categoryName}</div>
                <div className="product-container">
                    <Products products={data} />
                </div>
            </div>
        </div>

    )
}

export default Category