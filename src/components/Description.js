import React, {useState, Component} from 'react'
// Saar Goldshtein 312593239 & Shahar Shemesh 315049460

export const Description = (props) => {	
	return (
		<input
            placeholder='Description'
            key='description'
            onChange={(descriptionCurrent) => props.onChange(descriptionCurrent.target.value)}
        />
	);
};
