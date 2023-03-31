import "./search.scss"

import CloseIcon from '@mui/icons-material/Close';
import img from "../../../assets/banner.png"
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'

const Search = ({ setShowSearch }) => {

    const [query, setQuery] = useState("")
    const navigate = useNavigate()

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    let { data } = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`)
    console.log(data)

    if (!query.length) {
        data = null;
    }
    const URL = import.meta.env.VITE_backendurl
    return (
        <div className="search-model">
            <div className="form-field">
                <input
                    type="text"
                    autoFocus
                    placeholder='Search for porducts'
                    value={query}
                    onChange={handleChange}
                />
                <span onClick={() => setShowSearch(false)}> <CloseIcon /></span>
            </div>
            <div className="search-result-content">
                <div className="search-results">
                    {
                        data?.data?.map(item => (
                            <div key={item.id} className="search-result-item"
                                onClick={() => {
                                    navigate("/product/" + item.id)
                                    setShowSearch(false)
                                }}
                            >
                                <div className="img-container">
                                    <img src={URL + item.attributes.img.data[0].attributes.url} alt="" />
                                </div>
                                <div className="prod-details">
                                    <span className="name">{item.attributes.title}</span>
                                    <span className="desc">{item.attributes.description}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    )
}

export default Search