// import React from "react";
// import { Item } from "./Item";

// export const ItemList = (props) => {

// 	if(props.items.length === 0){
//         return <h2 className="expenses-list__fallback">Found no items.</h2>;
//     }

//     return(
//         <ul>
//             {props.items.map((item) => (
//                 <Item
//                     description={item.description}
//                     cost={item.cost}
//                     declarationYear={item.declarationYear}
//                     declarationMonth={item.declarationMonth}
//                     category={item.category}
//                 />
//             ))};
//         </ul>
//     ); 
// };


import React, { useRef,useState } from 'react'
import { Item } from "./Item";
import FilterData from './FilterData';
import {checkbox} from './checkbox.css'


export const ItemList = (props) => {
    const [checked, setChecked] = useState(false); 
    const [filterMonth, setFilterMonth] = useState(null); 
    const [filterYear, setFilterYear] = useState( null); 
    const [isFilterMonth, setIsFilterMonth] = useState(false); 
    const [isFilterYear, setIsFilterYear] = useState(false); 


    const handleChange = () => { 
        setChecked(!checked); 
    }; 

    const addFilterByMonth =  (_monthFilter)=>{
        console.log(_monthFilter)
        if(_monthFilter!= null){
        setFilterMonth(_monthFilter)
        setIsFilterMonth(true)
        setIsFilterYear(false)
        setChecked(false)
        }
    }

    const addFilterByYear =  (_yearFilter)=>{
    console.log(_yearFilter)
    if(_yearFilter!= null){
        setFilterYear(_yearFilter)
        setIsFilterYear(true)
        setIsFilterMonth(false)
        setChecked(false)
    }
        else
        {
        setChecked(false)
        }
    }

    const filterData = props.items.filter(item => {
        if(isFilterMonth){
        return item.declarationMonth == filterMonth;
        }
        else{
        console.log(filterYear)
        return item.declarationYear == filterYear;
        }
    });
    return (
        <div>
            <div className='filter-data' >
                <h2>Filter Data
                {/* <input type="checkbox" onChange={handleChange} id="toggle"/> */}
                </h2>

        </div>
                <input type="checkbox" id="switch" onChange={handleChange} /><label htmlFor="switch">Toggle</label>
        <ul id='list' className='list'>
            {checked ? <FilterData addFilterByMonth={addFilterByMonth}  addFilterByYear={addFilterByYear}/> : ' '}
        
        {isFilterMonth? <h2> Filter By Month {filterMonth}</h2> : ''}
        {isFilterYear? <h2> Filter By Year {filterYear}</h2> : ''}

        {!isFilterMonth && !isFilterYear?<h2>Costs you added:</h2>: '' }
        
        { isFilterMonth||isFilterYear ?
                filterData.map(item =>{ return( <Item key={item.id} item={item}/>); })  : 
                    props.items.map( (item) => {
                        return(
                            
                                <Item key={item.id} item={item}/>
                            
                            )
                        })
        }
        </ul>
        </div>
    );
};