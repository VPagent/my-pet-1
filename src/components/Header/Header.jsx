import Container from '../Container/Container';
import s from './header.module.scss';
import store from '../../globalState/store';
const Header = () => {
    const [isSinglePage] = store.useGlobalState("isSinglePage");
    return (<header className={s.header}>
            <Container>
                {!isSinglePage ?
            <p className={s.header_text}>Product list page</p>
            : <p className={s.header_text}>Product page</p>}
            </Container>
        </header>);
};
export default Header;
