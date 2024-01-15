import React, {useState, useEffect} from 'react';

import Header from '../Header/Header.jsx'
import './App.css';
import { fetchItems } from '../../itemAPI/item.api.js'
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
        {shoppingList.map((itemData, dataIndex) => {
            return (
              
                <div key={dataIndex}>
                    <ul>
                    <li>{itemData.name}  Qty:{itemData.quantity}  {itemData.unit}</li>
                    </ul>
                </div>
            );
        })}
    </div>
);
} 
export default App;