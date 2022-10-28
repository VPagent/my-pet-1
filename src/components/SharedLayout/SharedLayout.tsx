import HomePage from "../../pages/HomePage/HomePage"
import Container from "../Container/Container"
import Header from "../Header/Header"
import SideBar from "../SideBar/SideBar"
import s from '../SharedLayout/sharedLayout.module.scss'
import ClientRoutes from "../ClientRoutes/ClientRoutes"



const SharedLayout:React.FC = ():JSX.Element => {

    return(
        <>
        <Header />
        <Container>
            <section className={s.section}>
                <SideBar />
                <ClientRoutes/>
            </section>
        </Container>
        </>
    )
}

export default SharedLayout