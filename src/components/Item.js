import '../App.css';
import React from "react";

export const Item = (props) => {
    const {declarationMonth,declarationYear,category,description,cost}= props.item;

//   return(
//         <div className='shadow  my-4 p-4'>
//             <div className='carditem'>
//                 <span>  {description} </span>

//                 <span> {category}</span>

//                 {description}
//                 <span className=""> {cost}</span>
                
//                 <span>  {declarationMonth}  / {declarationYear}</span>
//             </div>
//         </div>
//   );
// };


return (
    <li className='plus'>
        <ul>
             <h2>{description}</h2>
        </ul>
        <ul><h3>{category}</h3></ul>
        <ul><h3>{declarationMonth + '/' + declarationYear}</h3></ul>
        <ul><h3>{cost}</h3></ul>
    </li>
)
};







