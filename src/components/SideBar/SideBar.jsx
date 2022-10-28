import s from '../SideBar/sideBar.module.scss';
import store from "../../globalState/store";
import FavoritesList from '../FavoritesList/FavoritesList';
const SideBar = () => {
    const [favorites] = store.useGlobalState("favorites");
    return (<div style={{ position: "relative" }}>
        <aside className={s.aside}>
           <p className={s.text}>Favorites</p>
            {favorites.length > 0 && <FavoritesList />}        
        </aside>
        </div>);
};
export default SideBar;
