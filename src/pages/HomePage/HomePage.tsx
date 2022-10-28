import ProductList from "../../components/ProductList/ProductList"
import servicesApi from '../../services/API'
import store from "../../globalState/store";
import { useEffect } from "react"

const HomePage = ():JSX.Element => {
  const [items, setItems] = store.useGlobalState("items")

  useEffect(()=>{
    const fetchAll = async () => {
    const response:[] = await servicesApi.fetchAllProducts() 
    setItems(() => [...response])  
    }
    try{
     fetchAll() 
    } catch(error){alert(error.message)}
           
    }, [setItems])

    return(
      <>
        {items.length > 0 && <ProductList/>}
      </>
    )
}

export default HomePage