import { createGlobalState } from 'react-hooks-global-state';
const initialState = {
    items: [],
    favourites: []
};
const { useGlobalState, setGlobalState } = createGlobalState(initialState);
const store = { useGlobalState };
export default store;
