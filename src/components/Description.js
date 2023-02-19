import React, {useState, Component} from 'react'

export const Description = (props) => {	
    // let [description,setDescription]=useState();

    // const onChange = (event) => {
    //     props.onChange('event.target.value');
    // };

	return (
		<input
            placeholder='Description'
            key='description'
            // onChange={(descriptionCurrent) => setDescription(descriptionCurrent)}
            onChange={(descriptionCurrent) => props.onChange(descriptionCurrent.target.value)}
        />
	);
};
