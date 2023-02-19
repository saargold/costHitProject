import React from 'react'
// Saar Goldshtein 312593239 & Shahar Shemesh 315049460

export const Cost = (props) => {
	return (
		<input
            placeholder='Cost'
            type='number'
            key='cost'
            onChange={(currentCost) => props.onChange(currentCost.target.value)}
        />
	);
};
