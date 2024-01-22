import React, {useState, useEffect} from 'react';

import Header from '../Header/Header.jsx'
import './App.css';
import { deleteItems, fetchItems, totaldeleteItems, updateItems} from '../../itemAPI/item.api.js'
import AddItemForm from '../AddItemForm/AddItemForm.jsx'

function App() {
    const [shoppingList, setShoppingList] = useState([]);  


const refreshItems = () => { 
    const shoppingListPromise = fetchItems();
    shoppingListPromise
    .then((response) => {
        console.log('Server Data:', response);
        setShoppingList(response.data);
    })
  .catch((err) => {
        console.log('ERROR', err);
    });
};

const handleClickDelete = (itemDataId) => {
    console.log('i hope this one is delete', itemDataId);
    deleteItems(itemDataId)
    .then((response) => {
        refreshItems();
    })
    .catch((error) => {
        console.log('this is a delete error on the app', error);
    });
};

const handleClickTotalDelete = () => {
    totaldeleteItems()
    .then((response) => {
        refreshItems();
    })
    .catch((error) => {
        console.log('this is error for the clear button', error)
    });
}

const handleClickUpdate = (itemDataId) => {
    updateItems(itemDataId)
    .then((response) => {
        refreshItems();
    })
    .catch((error) => {
        console.log('this error is for update but in the app', error)
    });
}

;//initial load of component
useEffect(() => {
    //body
    console.log('Welcome shopper');
    //api call
    refreshItems();
}, []);

return (
    <div>
        <AddItemForm itemRefreshCallback={refreshItems} />

        <p> Shopping List </p>
        <button> Reset </button>
        <button onClick={(event) => handleClickTotalDelete()}> Clear </button>
        {shoppingList.map((itemData, dataIndex) => {
            return (
              
                <div key={dataIndex}>
                    <ul>
                    <li>{itemData.name}  Qty:{itemData.quantity}  {itemData.unit}</li>
                    <p> Bought?: {itemData.purchased ? 'Yes' : 'No'}  </p>
                    <button onClick={(event) => handleClickUpdate(itemData.id)}> Buy </button>
                    <button onClick={(event) => handleClickDelete(itemData.id)}> Remove </button>
                    </ul>
                </div>
            );
        })}
    </div>
);
} 
export default App;