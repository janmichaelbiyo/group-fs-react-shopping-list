import react, { useEffect } from 'react';
import {
    resetList,
    updateListPurchased
} from '../../itemAPI/item.api';

function Footer({itemData, shoppingListRefreshCall}) {
    const handleClickClear = () => {
        console.log('reset shopping list');
        resetList()
            .then((response) => {
                shoppingListRefreshCall();
            })
            .catch((err) => {
                console.error('ERROR', err);
            })
    };

    const handleClickResetPurchased = () => {
        console.log('reset purchased items');
        updateListPurchased()
        .then((response) => {
            shoppingListRefreshCall();
        })
        .catch((err) => {
            console.error('ERROR', err);
        })
    };

    useEffect(() => {
        //body
        console.log('Welcome shopper');
        //api call
        shoppingListRefreshCall();
    }, []);
    

    return (
        <>
        <button onClick={(event) => handleClickClear(itemData)}>Clear List</button>
        <button onClick={(event) => handleClickResetPurchased()}>Reset Purchased</button>
        </>
    )
};

export default Footer;