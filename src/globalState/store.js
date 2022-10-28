import { createGlobalState } from 'react-hooks-global-state';
const initialState = {
    items: [],
    favorites: [],
    singleItem: null,
    isSinglePage: false
};
const { useGlobalState } = createGlobalState(initialState);
const store = { useGlobalState };
export default store;
