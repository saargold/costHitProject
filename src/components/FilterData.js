import React, { useRef,useState } from 'react'
import {checkbox} from './checkbox.css'
export default function FilterData(props) {
    
    const filterByMonthRef = useRef();
    const filterByYearRef = useRef();

    const filterBtnMonth = async () =>{
        let param = 0;
        if( filterByMonthRef!= null){
            param=filterByMonthRef.current.value;
            await props.addFilterByMonth(param);
        };
    };

    const filterBtnYear = async() =>{
        let param = 0;
        if(filterByYearRef!= null){
            param = filterByYearRef.current.value;
            await props.addFilterByYear(param);
        };
    };

  return (
    <div>
        <input type="text" placeholder='Enter Month Value' ref = {filterByMonthRef}/>
        <button onClick = {filterBtnMonth}>Filter By Month</button>

        <input type = "text" placeholder = 'Enter Year Value' ref = {filterByYearRef}/>
        <button onClick = {filterBtnYear}>Filter By Year</button>
    </div>
  );
};
