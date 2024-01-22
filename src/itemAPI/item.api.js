import axios from 'axios';

export const fetchItems = () => {
    return axios.get('/api/items');
};

export const postItems = (itemsData) => {
    return axios.post('/api/items', itemsData)
};

export const deleteItems = (itemsDataId) => {
    return axios.delete(`/api/items/${itemsDataId}`)
};

export const updateItems = (itemsDataId) => {
    return axios.put(`/api/items/${itemsDataId}`)
}

export const totaldeleteItems = () => {
    return axios.delete('/api/items')
}

export const totalupdateItems = () => {
    return axios.put('/api/items/')
}