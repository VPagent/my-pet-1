import { Button } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from 'react-router-dom';
import store from '../../globalState/store';


type Props = {
    styles: object;
}

const BackButton:React.FC<Props> = ({styles}:Props):JSX.Element => {
    const navigate = useNavigate() 
    const [singleItem, setSingleItem] = store.useGlobalState("singleItem")

    const handleClick = () => {
        setSingleItem(null)
        navigate("/")
    }
    return(
        <>
        {singleItem && <Button 
        sx={styles} 
        onClick={handleClick}
        variant="contained" 
        startIcon={<ChevronLeftIcon />}>
            Back
        </Button>}
        </>
    )
}

export default BackButton