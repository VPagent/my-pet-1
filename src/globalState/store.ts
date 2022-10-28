import { createGlobalState } from 'react-hooks-global-state';
import {Item} from '../components/ProductList/ProductList'

type InitialState = {
    items: Item[],
    favorites: Item[],
    singleItem: Item | null,
    isSinglePage: boolean
}

const initialState:InitialState = {
    items:[],
    favorites: [],
    singleItem: null,
    isSinglePage: false
};

const { useGlobalState } = createGlobalState(initialState);

const store = {useGlobalState}

export default store
