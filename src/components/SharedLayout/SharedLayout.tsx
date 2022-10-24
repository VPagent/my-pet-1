import HomePage from "../../pages/HomePage"
import Container from "../Container/Container"
import Header from "../Header/Header"
import SideBar from "../SideBar/SideBar"
import s from '../SharedLayout/sharedLayout.module.scss'



const SharedLayout:React.FC = ():JSX.Element => {

    return(
        <>
        <Header />
        <Container>
            <section className={s.section}>
            <SideBar />
            <HomePage />
            </section>
        </Container>
        </>
    )
}

export default SharedLayout