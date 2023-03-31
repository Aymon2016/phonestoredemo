


import Product from "./product/product"
import "./products.scss"

const Products = ({ products }) => {

    if (!products) return
    return (
        <div className="products-container">
            <div className="sec-heading">Section Heading</div>
            <div className="products">
                {
                    products?.data?.map((item) => (
                        <Product key={item.attributes.title} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products