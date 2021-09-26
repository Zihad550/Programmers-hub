import ShowName from '../ShowProgrammerOnCart/ShowProgrammerOnCart';
import './Cart.css';

const Cart = (props) => {
const {cart} = props;
const total = cart.reduce((previous, current) => previous + current.salary, 0); 

  return (
    <div className="cart">
     <h2>Programmers Selected: {cart.length}</h2>
     <h4>Total Cost: ${total}</h4>
     {
       cart.map(programmer => <ShowName key={programmer.id} cart={programmer}></ShowName>)
     }
    </div>
  );
};

export default Cart;