import s from '../FavoritesList/favoritesList.module.scss';
import store from '../../globalState/store';
import ItemCard from '../ItemCard/ItemCard';
import favoriteCardStyles from './favoriteCardStyles';
import { useNavigate } from 'react-router-dom';
import servicesApi from '../../services/API';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const FavoritesList = () => {
    const [favorites, setFavorites] = store.useGlobalState("favorites");
    const [singleItem, setSingleItem] = store.useGlobalState("singleItem");
    const navigate = useNavigate();
    const handleClick = (id) => {
        const deletedArr = favorites.filter(elem => elem.id !== id);
        setFavorites(deletedArr);
    };
    const handleClickOnCard = (event, id) => __awaiter(void 0, void 0, void 0, function* () {
        if (event.target.nodeName === "BUTTON") {
            return;
        }
        try {
            if (!singleItem) {
                const response = yield servicesApi.fetchSingleProduct(id);
                setSingleItem(response);
                navigate(`/product/${id}`);
            }
        }
        catch (error) {
            alert(error.message);
        }
    });
    return (<div className={s.list}>
            {favorites.length > 0 && favorites.map(elem => {
            return <ItemCard key={elem.id} item={elem} styles={favoriteCardStyles} handleClick={handleClick} handleClickOnCard={handleClickOnCard}/>;
        })}
        </div>);
};
export default FavoritesList;
