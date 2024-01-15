import axios from 'axios';

export const fetchItems = () => {
    return axios.get('/api/items');
};

export const postItems = (itemsData) => {
    return axios.post('/api/items', itemsData)
};

