import axios from 'axios';

export const fetchItems = () => {
    return axios.get('/api/items');
};

export const postItems = (itemsData) => {
    return axios.post('/api/items', itemsData)
};

export const updateItemPurchased = (itemsData) => {
    return axios.put(`/api/items/${itemsData}`);
};

export const updateListPurchased = () => {
    return axios.put('/api/items');
};

export const resetList = () => {
    return axios.delete('/api/items')
};

export const deleteGrocery = (itemsData) => {
    return axios.delete(`/api/items/${itemsData}`)
};

