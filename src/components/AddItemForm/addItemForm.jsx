import { useState } from 'react';

import { postItems } from '../../itemAPI/item.api.js';

function AddItemForm(props) {
    const [nameValue, setNameValue] = useState('');
    const [quantityValue, setQuantityValue] = useState('');
    const [unitValue, setUnitValue] = useState('');


const handleSubmitItem = (event) => {
    event.preventDefault();
    console.log('Values for SUBMIT:', {
        name: nameValue,
        quantity: quantityValue,
        unit: unitValue,
    });
    
    //Post Item Data
    postItems({
        name: nameValue,
        quantity: quantityValue, 
        unit: unitValue,
    })
    .then((response) => {
        props.itemRefreshCallback();

        setNameValue('');
        setQuantityValue('');
        setUnitValue('');
    })
    .catch((err) => {
        console.error('Error', err);
    });
};

return (
    <form onSubmit={handleSubmitItem}>
        <label>
            <span>Name:</span>
            <input id="name" onChange={(event) => setNameValue(event.target.value)}
            value={nameValue}
            />
        </label>
        <label>
            <span>Quantity:</span>
            <input id="quantity" onChange={(event) => setQuantityValue(event.target.value)}
            value={quantityValue}
            />
        </label>
        <label>
            <span>Unit:</span>
            <input id="unit" onChange={(event) => setUnitValue(event.target.value)}
            value={unitValue}
            />
        </label>
        <button type="submit">Submit</button>
    </form>
);
}
    
    export default AddItemForm;