// import React, { useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export const LocalStaorage = (props) => { 

//   const [items, setItems] = props;


//   const [data, setData] = useState('');

//   useEffect(() => {
//     // Fetch data from local storage
//     getData()
//       .then((value) => setData(value))
//       .catch((error) => console.error(error));
//   }, []);

//   const handleSaveData = async () => {
//     try {
//       // Save data to local storage
//       await setDataToLocalStorage('key', data);
//       console.log('Data saved to local storage');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const GGhandleChange = (item) => {
//     props.setItems(prevItem => {
//          return [item, ...prevItem];
//       });
//   };

//   const getData = () => {
//     return new Promise((resolve, reject) => {
//       try {
//         const value = localStorage.getItem('key');
//         resolve(value);
//       } catch (error) {
//         reject(error);
//       }
//     });
//   };

//   const setDataToLocalStorage = (key, value) => {
//     return new Promise((resolve, reject) => {
//       try {
//         localStorage.setItem(key, value);
//         resolve();
//       } catch (error) {
//         reject(error);
//       }
//     });
//   };

//   return (
//     <div>
//       <input type="text" value={data} onChange={handleChange} />
//       <button onClick={handleSaveData}>Save Data</button>
//     </div>
//   );
// };





//     const [data, setData] = useState(null);


//       useEffect(() => {

//         loadDataFromLocalStorage('myDataKey')

//           .then(data => setData(data))

//           .catch(error => console.error(error));

//       }, []);


//       const handleSaveData = () => {
//         const newData = { name: 'John', age: 30 };
    
//         saveDataToLocalStorage('myDataKey', newData)
//           .then(() => setData(newData))
//           .catch(error => console.error(error));
//       };
    
//       return (
//         <div>
//           <p>Data: {JSON.stringify(data)}</p>
//           <button onClick={handleSaveData}>Save data to local storage</button>
//         </div>
//       );



// / return new Promise((resolve, reject) => {
//   //   console.log(props.item);
//   //   const existingItems = JSON.parse(localStorage.getItem('costItems')) || [];
//   //   const newItems = [...existingItems, props.item];
//   //   localStorage.setItem('costItems', JSON.stringify(newItems));
//   //   resolve(newItems);
//   // });
//     // const getStored = localStorage.getItem(props.currentDate);
//     // if(getStored == null){
//     //     localStorage.setItem(props.currentDate ,JSON.stringify([newItem]));
//     // }
//     // else{
//     //     const stored = localStorage.getItem(this.state.currentDate);
//     //     const currentCart  = JSON.parse(stored);
//     //     currentCart.push(newItem);
//     //     localStorage.setItem(this.state.currentDate ,JSON.stringify(currentCart));
//     // }

//     // return (
//     //         <div>
//     //           {toast.success('Success add cost!', {position: toast.POSITION.TOP_RIGHT})}
//     //         </div>
//     // );