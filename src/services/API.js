import axios from 'axios';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fetchAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield axios.get("https://testbackend.nc-one.com/image");
    return data;
});
const fetchSingleProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield axios.get(`https://testbackend.nc-one.com/image?id=${id}`);
    return data;
});
const servicesApi = { fetchSingleProduct, fetchAllProducts };
export default servicesApi;
