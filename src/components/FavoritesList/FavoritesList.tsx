import s from '../FavoritesList/favoritesList.module.scss'
import store from '../../globalState/store';
import ItemCard from '../ItemCard/ItemCard';
import favoriteCardStyles from './favoriteCardStyles'
import { useNavigate } from 'react-router-dom';
import {Item} from '../ProductList/ProductList'
import servicesApi from '../../services/API';


const FavoritesList:React.FC = ():JSX.Element=> {
    const [favorites, setFavorites] = store.useGlobalState("favorites")
    const [singleItem, setSingleItem] = store.useGlobalState("singleItem")
    const navigate = useNavigate()

    const handleClick = (id:Item["id"]):void =>{
      const deletedArr = favorites.filter(elem => elem.id !== id)
      setFavorites(deletedArr)
    }
    const handleClickOnCard = async (event, id) => {
        if(event.target.nodeName === "BUTTON"){
          return
        }
        try{
          const response = await servicesApi.fetchSingleProduct(id) 
          setSingleItem(response)
          navigate(`/product/${id}`)
        } catch(error){alert(error.message)}
    }
    
    return(
        <div className={s.list}>
            {favorites.length > 0 && favorites.map(elem => {
                return <ItemCard 
                key={elem.id} 
                item={elem}
                styles={favoriteCardStyles}
                handleClick={handleClick}
                handleClickOnCard={handleClickOnCard}
                />
            })}
        </div>
    )
}

export default FavoritesList