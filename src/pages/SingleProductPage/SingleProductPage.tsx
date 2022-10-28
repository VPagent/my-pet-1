import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemCard from '../../components/ItemCard/ItemCard'
import store from '../../globalState/store'
import servicesApi from '../../services/API'
import singleCardStyles from './singleCardStyle'
import {Item} from '../../components/ProductList/ProductList'

const SingleProductPage: React.FC = ():JSX.Element => {
    const [isSinglePage, setIsSinglePage] = store.useGlobalState("isSinglePage")
    const [singleItem, setSingleItem] = store.useGlobalState("singleItem")
    const [favorites, setFavorites] = store.useGlobalState("favorites")
    const [items, setItems] = store.useGlobalState("items")
    const {filmId} = useParams()
    const currentId = Number(filmId)
    
    useEffect(() =>{
        setIsSinglePage(true)
        if(!singleItem){
            servicesApi.fetchSingleProduct(currentId)
            .then((res) => setSingleItem(res)).catch((error) => alert(error.message))
        }
        if (items.length < 1){
            const fetchAll = async () => {
                const response:[] = await servicesApi.fetchAllProducts() 
                setItems(() => [...response])  
                }
                try{
                 fetchAll() 
                } catch(error){alert(error.message)}
        }
        return () => setIsSinglePage(false)
    }, [currentId, setIsSinglePage, singleItem, setSingleItem])

    const handleClick = (id:Item['id']):void =>{
        const inspect = favorites.some(elem => elem.id === id)
        const currentItem = items.filter(elem => elem.id === id)
        if (inspect){
          const deletedArr = favorites.filter(elem => elem.id !== id) 
          setFavorites(()=> deletedArr)
          return
        }
        setFavorites((prev) => [...prev, ...currentItem])
    }
    
    return(
        <div style={{marginLeft: "auto"}}>
            {singleItem && isSinglePage && <ItemCard item={singleItem} styles={singleCardStyles} handleClick={handleClick} backButton={true}/>}
        </div>
    )
}

export default SingleProductPage