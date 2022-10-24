import Container from '../Container/Container';
import s from './header.module.scss';
const Header = () => {
    return (<header className={s.header}>
            <Container>
                <p className={s.header_text}>Product list page</p>
            </Container>
        </header>);
};
export default Header;
