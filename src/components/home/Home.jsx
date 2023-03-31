import "./home.scss"
import Banner from "./banner/Banner"
import { Category } from "./category/category"
import Products from "../products/products"
import { useEffect, useContext } from "react"
import fetchDataFromApi from "../../utilis/api"
import { Context } from "../../utilis/context"

const Home = () => {

    const { categories, setCategories, products, setProducts } = useContext(Context)


    useEffect(() => {
        CategoryFromApi()
        productsFromApi()
    }, [])

    const productsFromApi = () => {
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            setProducts(res)
        })
    }

    const CategoryFromApi = () => {
        fetchDataFromApi("/api/categories").then((res) => {
            setCategories(res)
        })
    }

    if (!products) return
    return (
        <div >
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category categories={categories} />
                    <Products products={products} />
                </div>
            </div>
        </div>
    )
}

export default Home