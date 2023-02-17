import React ,{useState,useEffect} from 'react'
import ProductInput from './ProductInput';
import {sortBy} from 'lodash'
import CostsList from './CostsList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Product(props) {

    let [costs_ar,setCostAr]=useState([]);
    useEffect(()=>{


        // בודקים אם קיים בהתחלה מוצרים  בלוקאל 
        if(localStorage["costsItems"]){
            // אם קיים מגדירים אותו בסטייס של הטאסק
            Promise.resolve(setCostAr(JSON.parse(localStorage["costsItems"])))
        }

    },[])
    // add to local array and run setitem to memory function
    const addCost =  (_costItem)=>{
      let sort_ar = [...costs_ar,_costItem];
       sort_ar=sortBy(sort_ar,"category");
       saveLocal(sort_ar)
      // מוסיף את המערך הקודם ומוסיף את המשימה החדשה

  }
// set array to memory
  const saveLocal = (_ar) =>{
     Promise.resolve(localStorage.setItem("costsItems",JSON.stringify(_ar)));
     setCostAr(_ar)
    
}
const removeAllCosts =()=>{
  toast.warning('Clear costs list !', {
    position: toast.POSITION.TOP_RIGHT
});
  saveLocal([])
}

// const sortByMonth =(_id)=>{
//   let temp_ar = costs_ar.filter(item =>item.id == _id);
//   console.log(_id +"id")
//   saveLocal(temp_ar)
// }
  

  return (

    <div className='container'>
    <div  className='col-lg-6 p-3 mx-auto '>
    <ProductInput addCost={addCost} removeAllCosts={removeAllCosts} />
    <CostsList costs_ar={costs_ar}   />

      </div>
    </div>
  )
}
