import "./category.scss";
import { useNavigate, } from "react-router-dom";


export const Category = ({ categories }) => {

    if (!categories) return
    const navigate = useNavigate();
    return (
        <div className="shop-by-category">
            <div className="categories">
                {
                    categories.data.map((item) => (
                        <h1 key={item.attributes.title} onClick={() => navigate(`/category/${item.id}`)} className="category">{item.attributes.title}</h1>
                    ))
                }

            </div>
        </div>
    )
}
