
import './ShowProgrammerOnCart.css';

const ShowProgrammerOnCart = (props) => {
  const {name, img} = props.cart;

  return (
    <div className="showOnCart">
      
      <img src={img} alt="" />
      <p>Programmer: {name}</p>
      
    </div>
  );
};

export default ShowProgrammerOnCart;