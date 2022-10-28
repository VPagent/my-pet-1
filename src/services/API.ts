import axios from 'axios';


const fetchAllProducts = async () => {
    const {data} = await axios.get("https://testbackend.nc-one.com/image")
    return data
}

const fetchSingleProduct = async (id) => {
    const {data} = await axios.get(`https://testbackend.nc-one.com/image?id=${id}`)
    return data
}

const servicesApi = { fetchSingleProduct, fetchAllProducts}

export default servicesApi