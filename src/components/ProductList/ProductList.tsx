import s from '../ProductList/productList.module.scss'


type Props = {
    arr?: Array<Item>,
};

// {
//     "id": 5,
//     "name": "Shloimys Sprinkles Cookies",
//     "price": 8.99,
//     "src": "/static/1665003905322.jpeg"
//     },
type Item = {
    id:number|string,
    name:string,
    price: string|number,
    src: string
}

const ProductList:React.FC<Props> = ({arr}:Props):JSX.Element =>{

    return(
        <ul className={s.list}>
            {arr && arr.map(({id, name, src, price}) => {
                return <li key={id}>
                    <img src={src} alt={name} />
                    <p>{name}</p>
                    <p>`$`{price}</p>
                    <button type='button'>fav</button>
                </li>
            })}
        </ul>
    )
}

export default ProductList