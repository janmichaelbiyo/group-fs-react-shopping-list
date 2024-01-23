import ShoppingListItem from "../ShoppingListItem/ShoppingListItem";

function ShoppingList({ shoppingList, shoppingListRefreshCall }) {
    return (
        shoppingList.map((itemData) => {
            return (
                <ShoppingListItem
                    key={itemData.id}
                    itemData={itemData}
                    shoppingListRefreshCall={shoppingListRefreshCall}
                />
            );
        })
    );
};

export default ShoppingList;