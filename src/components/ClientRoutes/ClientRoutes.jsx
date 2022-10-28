import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import SingleProductPage from "../../pages/SingleProductPage/SingleProductPage";
const ClientRoutes = () => {
    return (<Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/product/:filmId" element={<SingleProductPage />}/>  
        </Routes>);
};
export default ClientRoutes;
