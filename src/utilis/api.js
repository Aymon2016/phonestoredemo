import axios from 'axios'

const params = {
    Headers: {
        Authorization: "bearer" + import.meta.env.VITE_STRAPI_AUTH_TOKEN,
    }
}



const URL = import.meta.env.VITE_backendurl


const fetchDataFromApi = async (url) => {
    try {

        const { data } = await axios.get(URL + url, params)
        return data;
    } catch (error) {

        console.log(error)
        return error
    }
}
export default fetchDataFromApi

export const makePaymentRequest = axios.create({
    baseURL: URL,
    Headers: {
        Authorization: "bearer" + import.meta.env.VITE_STRAPI_AUTH_TOKEN,
    }

}
)
