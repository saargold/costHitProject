import './App.css';
import {Header} from './components/Header';
import {AddItem} from './components/AddItem';
import {Clock} from './components/Clock';
// import {IsToggleOnExample} from './training/IsToggleOnExample';
// import {NameFormExample} from './training/NameFormExample';
// import {HandleSubmitExample} from './training/HandleSubmitExample';
// import {FormAndSelectExample} from './training/FormAndSelectExample';
import {Categories} from './components/Categories'
import { Component, useEffect, useState } from 'react';
import Exception from './components/Exception';
import { useLocalStorage } from "./useLocalStorage";
import { ItemList } from './components/ItemsList';
import { ReactDOM } from 'react';



export default function App() {


  const [items, setItems, clean] = useLocalStorage('myData', []);

  const handleNewItem = (item) => {
    
    setItems(prevItem => { return [item, ...prevItem];
      });
    };

    const handleClean = (event) => {
      clean();
    };


    return (
      <div className="App">
        <Exception>
            <Header/>
            
            <AddItem onNewItem = {handleNewItem} cleanStorage={handleClean}/>
            <ItemList items={items}/>

            <Clock/>
        </Exception>
      </div>
    );
};
