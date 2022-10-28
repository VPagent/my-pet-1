import ProductList from "../../components/ProductList/ProductList";
import servicesApi from '../../services/API';
import store from "../../globalState/store";
import { useEffect } from "react";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const HomePage = () => {
    const [items, setItems] = store.useGlobalState("items");
    useEffect(() => {
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
    }, [setItems]);
    return (<>
        {items.length > 0 && <ProductList />}
      </>);
};
export default HomePage;
