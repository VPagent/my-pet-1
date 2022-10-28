import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import Typography from '@mui/material/Typography';
import store from "../../globalState/store";
import BackButton from '../BackButton/BackButton';
const ItemCard = ({ item, styles, handleClick, handleClickOnCard, backButton }) => {
    const [favorites] = store.useGlobalState("favorites");
    const { id, name, price, src } = item;
    const inspect = favorites.some(elem => elem.id === id);
    return (<Card sx={styles.cardStyle} onClick={(event) => { handleClickOnCard && handleClickOnCard(event, id); }}>
        <CardMedia image={src} title={name}>
        {backButton && <BackButton styles={styles.backBtn}></BackButton>}
        </CardMedia>
        <CardContent sx={styles.cardTextContent}>
          <Typography gutterBottom sx={styles.cardContent} variant="h5" component="h2">
            {name}
          </Typography>
          <Typography sx={styles.cardFooterStyle} gutterBottom variant="h5" component="h2">
            $ {price}
            <ButtonIcon styles={styles.buttonStyle} id={id} handler={handleClick}><FavoriteIcon sx={inspect ? styles.blackIcon : styles.iconStyle}/></ButtonIcon>
          </Typography>
        </CardContent>
        </Card>);
};
export default ItemCard;
