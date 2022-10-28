import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemCard from '../../components/ItemCard/ItemCard';
import store from '../../globalState/store';
import servicesApi from '../../services/API';
import singleCardStyles from './singleCardStyle';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const SingleProductPage = () => {
    const [isSinglePage, setIsSinglePage] = store.useGlobalState("isSinglePage");
    const [singleItem, setSingleItem] = store.useGlobalState("singleItem");
    const [favorites, setFavorites] = store.useGlobalState("favorites");
    const [items, setItems] = store.useGlobalState("items");
    const { filmId } = useParams();
    const currentId = Number(filmId);
    useEffect(() => {
        setIsSinglePage(true);
        if (!singleItem) {
            servicesApi.fetchSingleProduct(currentId)
                .then((res) => setSingleItem(res)).catch((error) => alert(error.message));
        }
        if (items.length < 1) {
            const fetchAll = () => __awaiter(void 0, void 0, void 0, function* () {
                const response = yield servicesApi.fetchAllProducts();
                setItems(() => [...response]);
            });
            try {
                fetchAll();
            }
            catch (error) {
                alert(error.message);
            }
        }
        return () => setIsSinglePage(false);
    }, [currentId, setIsSinglePage, singleItem, setSingleItem, setItems, items.length]);
    const handleClick = (id) => {
        const inspect = favorites.some(elem => elem.id === id);
        const currentItem = items.filter(elem => elem.id === id);
        if (inspect) {
            const deletedArr = favorites.filter(elem => elem.id !== id);
            setFavorites(() => deletedArr);
            return;
        }
        setFavorites((prev) => [...prev, ...currentItem]);
    };
    return (<div style={{ marginLeft: "auto" }}>
            {singleItem && isSinglePage && <ItemCard item={singleItem} styles={singleCardStyles} handleClick={handleClick} backButton={true}/>}
        </div>);
};
export default SingleProductPage;
