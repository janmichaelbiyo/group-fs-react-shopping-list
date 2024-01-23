import React, { useState, useEffect } from 'react';

import Header from '../Header/Header.jsx';
import './App.css';
import { fetchItems } from '../../itemAPI/item.api.js'
import AddItemForm from '../AddItemForm/AddItemForm.jsx'
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import Footer from '../Footer/Footer.jsx';

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
                console.error('ERROR', err);
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
            <main>
            <AddItemForm itemRefreshCallback={refreshItems} />
            <ShoppingList
                shoppingList={shoppingList}
                shoppingListRefreshCall={refreshItems} />
            </main>
            <Footer shoppingListRefreshCall={refreshItems} />
        </div>
    );
}
export default App;