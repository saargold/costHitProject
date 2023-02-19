import React, {Component, useState} from 'react'
import { v4 as uuid } from 'uuid';
import ItemForm from './ItemForm';

export const AddItem = (props) => { 
    const [message, setMessage] = useState("");

    const onBuildNewItem = (pieceOfItemData) => {
		props.onNewItem(pieceOfItemData);
        setMessage("Item saved successfully!");
    };

    const handleClean = (event)=> {
        props.cleanStorage();
        setMessage("Storage clean successfully!")
    }

    return(
        <>
        <ItemForm onBuildNewItem = {onBuildNewItem}/>
        <button onClick={handleClean}>Clean</button>
        {message && <div className='message'>{message}</div>}
        </>

        
    );
};

