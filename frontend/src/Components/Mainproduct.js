import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Mainproduct = (props) => {
  return (
    <div className='box'>
        <div className='img'>
          <img src={props.image} alt="" width={300} />
        </div>
        <div className='text'><span>{props.title}</span></div>
        <div className='prise py-3 text-secondary'><span> ₹{props.price}</span><span className='uuu'>₹1,61,900 </span></div>
        <Button  variant="outline-info py-2" ><Link to="/login" className='ttt'>Details</Link></Button>{' '}
        
       
        
      </div>
  )
}

export default Mainproduct