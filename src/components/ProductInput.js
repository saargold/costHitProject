import React, { useRef,useState } from 'react'
import { v4 as uuid } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductInput = (props) => {

    const itemNameRef = useRef();
    const itemSumRef = useRef();
    const itemDescriptionRef = useRef();
    const itemCategoryRef = useRef();
    let newDate = new Date()
    let month = newDate.getMonth() + 1;

    let year = newDate.getFullYear();
    const unique_id = uuid();
    const small_id = unique_id.slice(0,8)

    const onAddCost  =async () =>{

        let todoItem={
            id:small_id,
            name: itemNameRef.current.value,
            sum: itemSumRef.current.value,
            description:itemDescriptionRef.current.value,
            category:itemCategoryRef.current.value,
            month:month,
            year:year
        }
        await props.addCost(todoItem)
        showToastMessage();


        

    }
    const showToastMessage = () => {
      toast.success('Success add cost!', {
          position: toast.POSITION.TOP_RIGHT
      });
     // refresh page
      // setTimeout(function() {
      //   window.location.reload();
      // }, 5000);
    }
  return (
    <div>
    <form onSubmit={onAddCost}>
      <h3>Cost Name:</h3>
      <input ref={itemNameRef} type="text" className='form-control' required  />
      <h3>Cost Sum:</h3>
      <input  ref={itemSumRef} type="number"  className='form-control' required  /> 
      <h3>Cost Description:</h3>
      <textarea  ref={itemDescriptionRef} type="text"  className='form-control' required /> 
     <h3>Choose Category</h3>
     <select ref={itemCategoryRef}  className='form-select'>
    <option  value="Drink"> Drink </option> 
            <option value="Food">Food</option>
            <option value="Shoes">Shoes</option>
            </select>
            <div className='my-3 text-center'>
            <button type='submit' className='btn btn-success me-2'>Add Cost</button>
                    <button className='btn btn-danger' onClick={
            () =>{  
            {props.removeAllCosts()}}}>Reset  Task</button>
            </div>
</form>

       {/* <div className='my-3 text-center'>
       <button className='btn btn-success me-2' onClick={onAddCost}>Add Cost</button> 
        

        <button className='btn btn-danger' onClick={
            () =>{  
            {props.removeAllCosts()}}}>Reset  Task</button>
      </div> */}



      <ToastContainer />
    </div>
  )
}

export default ProductInput
