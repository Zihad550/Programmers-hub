
import { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
import Programmer from '../Programmer/Programmer';
import './BodyContainer.css';

const BodyContainer = () => {

// use state to fecth programmers
  const [programmers, setProgrammers] = useState([]);
  useEffect( () =>{
    fetch('./programmers.json')
    .then(res => res.json())
    .then(data => setProgrammers(data));
  }, [])

  // use state to set programmers on cart
  const [cart, setCart] = useState([]);
  const addToCart = programmer => {
    const newProgrammer = [...cart, programmer];
    setCart(newProgrammer);
  }
  return (
    <div className="body-container">
      <div className="programmers">
       {
         programmers.map(programmer => <Programmer key={programmer.id} addToCart={addToCart} programmer={programmer}></Programmer>)
       }
      </div>
      <div>
       <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default BodyContainer;