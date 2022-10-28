import React from 'react';
import s from '../ProductList/productList.module.scss';
import ItemCard from '../ItemCard/ItemCard';
import store from '../../globalState/store';
import stylesCard from './cardStyles';
import servicesApi from '../../services/API';
import { useNavigate } from 'react-router-dom';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const ProductList = () => {
    const [items] = store.useGlobalState("items");
    const [favorites, setFavorites] = store.useGlobalState("favorites");
    const [singleItem, setSingleItem] = store.useGlobalState("singleItem");
    const navigate = useNavigate();
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
            {items.length > 0 && items.map(elem => {
            return <ItemCard key={elem.id} item={elem} styles={stylesCard} handleClick={handleClick} handleClickOnCard={handleClickOnCard}/>;
        })}
        </div>);
};
export default ProductList;
