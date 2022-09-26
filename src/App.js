import React, { useEffect, useState } from 'react';
// import ShopList from './component/shoplist';
import Game from './pages/game';
import './style.css';

// const shoppingList = [
//   {
//     id: '123',
//     name: 'Whatapp',
//   },
//   {
//     id: '456',
//     name: 'Facebook',
//   },
//   {
//     id: '789',
//     name: 'Instragram',
//   },
// ];

export default function App() {
  // const [list, setList] = useState([]);
  // console.log(1, list);
  // useEffect(() => {
  //   setList(shoppingList);
  // }, []);
  // console.log(2, list);
  return (
    <div>
      <Game />
      {/* <h1>Hello StackBlitz!</h1> */}
      {/* <ShopList name="Prasad" list={list} /> */}
      {/* <p>Start editing to see some magic happen :)</p> */}
    </div>
  );
}
