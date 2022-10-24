import ProductList from "../components/ProductList/ProductList"
import servicesApi from '../services/API'
import store from "../globalState/store";
import { useEffect } from "react"
// import { createGlobalState } from 'react-hooks-global-state';





const HomePage = ():JSX.Element => {

    const [items, setItems] = store.useGlobalState("items")
    
    useEffect(()=>{
     const fetchAll = async () => {
        const response:[] = await servicesApi.fetchAllProducts() 
        setItems(() => [...response])  
     }
     fetchAll()  
    }, [])
    
    return(
        <ProductList arr={items}/>
    
    )
}

export default HomePage