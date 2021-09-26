import React from 'react';
import './Programmer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Programmer = (props) => {
  const {name, age, topSkill, salary, country, img} = props.programmer;
  return (
    <div className="programmer">
      <div className="programmer-img-container">
      <img className="programmer-img" src={img} alt="" />
      </div>
      <div className="programmer-info">
      <h2 className="programmer-name">Name:{name}</h2>
      <h4>Master at programming language: {topSkill}</h4>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
      <p>Salary: ${salary}</p>
      <button onClick={() => props.addToCart(props.programmer)} className="btn-regular"><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
      <p className="icons"><FontAwesomeIcon className="icon1 icon" icon={faFacebookF}/> <FontAwesomeIcon className="icon2 icon" icon={faTwitter}/></p>
      </div>
      
    </div>
  );
};

export default Programmer;