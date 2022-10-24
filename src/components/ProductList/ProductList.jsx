import s from '../ProductList/productList.module.scss';
const ProductList = ({ arr }) => {
    return (<ul className={s.list}>
            {arr && arr.map(({ id, name, src, price }) => {
            return <li key={id}>
                    <img src={src} alt={name}/>
                    <p>{name}</p>
                    <p>`$`{price}</p>
                    <button type='button'>fav</button>
                </li>;
        })}
        </ul>);
};
export default ProductList;
