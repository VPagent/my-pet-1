import React from "react";
import s from "../ProductList/productList.module.scss";
import ItemCard from "../ItemCard/ItemCard";
import store from "../../globalState/store";
import stylesCard from "./cardStyles";
import servicesApi from "../../services/API";
import { useNavigate } from "react-router-dom";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

export type Item = {
  id: number | string;
  name: string;
  price: string | number;
  src: string;
};

const ProductList: React.FC = (): JSX.Element => {
  const [items] = store.useGlobalState("items");
  const [favorites, setFavorites] = store.useGlobalState("favorites");
  const [singleItem, setSingleItem] = store.useGlobalState("singleItem");
  const navigate = useNavigate();

  const handleClick = (id: Item["id"]) => {
    const inspect = favorites.some((elem) => elem.id === id);
    const currentItem = items.filter((elem) => elem.id === id);
    if (inspect) {
      const deletedArr = favorites.filter((elem) => elem.id !== id);
      setFavorites(() => deletedArr);
      return;
    }
    setFavorites((prev) => [...prev, ...currentItem]);
  };
  const handleClickOnCard = async (event, id) => {
    if (event.target.nodeName === "BUTTON") {
      return;
    }
    try {
      if (!singleItem) {
        const response = await servicesApi.fetchSingleProduct(id);
        setSingleItem(response);
        navigate(`/product/${id}`);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const Row = ({ index, style }) => (
    <div  className={s.list} style={{ display: "flex" }}>
      {items.map((elem) => {
        return (
          <div key={elem.id} >
            <ItemCard
              key={elem.id}
              item={elem}
              styles={stylesCard}
              handleClick={handleClick}
              handleClickOnCard={handleClickOnCard}
            />
          </div>
        );
      })}
    </div>
  );

  return (
    <AutoSizer>
      {({ height, width }) => (
          <List
            className="List"
            height={height}
            itemCount={items.length}
            itemSize={420}
            width={width}
            columnCount={4}
          >
            {Row}
          </List>
      )}
    </AutoSizer>
  );
};

export default ProductList;
