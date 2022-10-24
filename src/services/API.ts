import axios from 'axios';


const fetchAllProducts = async () => {
    const {data} = await axios.get("https://testbackend.nc-one.com/image")
    console.log(data)
    return data
}

const fetchSingleProduct = async (id:number) => {
    const {data} = await axios.get(`https://testbackend.nc-one.com/image?id=${id}`)
    console.log(data)
    return data
}

const servicesApi = { fetchSingleProduct, fetchAllProducts}

export default servicesApi