import React, {Component, useState} from 'react'
import {Categories} from './Categories'
import { v4 as uuid } from 'uuid';
import { Description } from './Description';
import { Cost } from './Cost';


const ItemForm = (props) => {
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
	const [cost, setCost] = useState('');
	const [declarationMonth, setDeclarationMonth] = useState('');
	const [declarationYear, setDeclarationYear] = useState('');
	const [id, setId] = useState('');

	const handleSubmit = (event) => {
        
        const pieceOfItemData = {
            description: description,
            category: category,
            cost: cost,
            declarationMonth: (new Date().getMonth() + 1),
            declarationYear: (new Date().getFullYear()),
            id: uuid().slice(0,8),
		};
		props.onBuildNewItem(pieceOfItemData);
		setDescription('') ;setCategory(''); setCost(''); setDeclarationMonth(''); setDeclarationYear('');
        event.preventDefault();
        event.target.reset();
    };

    return(
        <form className='form-control' onSubmit={handleSubmit}>
            <Description onChange={(currentDescription) => setDescription(currentDescription)}/>
            <Categories onChange={(currentCategory) => setCategory(currentCategory)} />
            <Cost onChange={(currentCost) => setCost(currentCost)} />
            <button type='submit'>Add Cost</button>
        </form>
    );
};

export default ItemForm;