import { deleteGrocery, 
    updateItemPurchased } from "../../itemAPI/item.api";

import { useState } from "react";

    function ShoppingListItem({itemData, shoppingListRefreshCall}) {
        const [buttonsVisible, setButtonsVisible]=useState(itemData.purchased ? false:true);
        
        const handleClickDelete = (id) => {
            console.log('DELETE - grocery:', id);
            deleteGrocery(id)
            .then((response) => {
                shoppingListRefreshCall();
            })
               .catch((err) => {
                   console.error('ERROR', err);
               })
        };

        const handleBuyButtonClick=(id)=>{
            updateItemPurchased(id)
            .then((response)=>{
                shoppingListRefreshCall();
                setButtonsVisible(false)
            })
            .catch((err)=>{
            console.log('error:', err);
            });
        
        }

        return (
            <div>
                <ul>
                <li>{itemData.name} Qty:{itemData.quantity} {itemData.unit}</li>
                </ul>
                {buttonsVisible && (
                <>
                <button onClick={(event) => handleClickDelete(itemData.id)}>Delete
                </button>
                <button onClick={()=>handleBuyButtonClick(itemData.id)}>Buy</button>
                </>
                )}
            </div>
        );
    }

    export default ShoppingListItem;