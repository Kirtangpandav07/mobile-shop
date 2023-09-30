import React from 'react'
// import Watchcaro from '../Components/Watchcaro'
import img1 from '../images/img1.webp'
import Home from './Home'
import phone1 from '../images/phone1.jpg'
import phone2 from '../images/phone2.jpg'
import phone3 from '../images/phone3.jpg'
import phone4 from '../images/phone4.jpg'
import phone5 from '../images/phone5.jpg'
import Button from 'react-bootstrap/Button';
import img66 from '../images/img66.jpg'

import img77 from '../images/img77.jpg'
import { useState } from 'react'
import { useEffect } from 'react'
import Mainproduct from '../Components/Mainproduct'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';






const About = () => {





  return (

    <>
   
      
      <div className='textu text-black text-center mb-5 '>
            <h2 className='text-center pt-5'>iphone</h2>
            <span className='iii '>Wonderfull.</span><br></br>
            <span className='ooo'>From ₹129900.00* before trade‑in</span><br />
            <Button variant="primary my-2">Buy</Button>{' '}
            <Button variant="link" className='rrr' >Learn more</Button>

       </div>
       <div className='contaner mb-4'>
          <div className='container'>
          <div className='container '>
            <img src={img77} alt=""  width="100%"/>
            </div>
          </div>
       </div>
       <div className='text-center'>
        <div className='w-100 bg-black'>
          <div className='tex text-white text-center mb-5'>
            <h2 className='text-center pt-5'>iphone 14 pro</h2>
            <span className='iii'>Pro. Beyond.</span><br></br>
            <span className='ooo'>From ₹129900.00* before trade‑in</span><br />
            <Button variant="primary my-2">Buy</Button>{' '}
            <Button variant="link"><Link to="/product">Learn more</Link></Button>
          </div>
          <img src={phone5} alt="" />
        </div>
      </div>

      <div className="container">
      <div className='row'>
        <div className='mmm col-sm-12 col-md-6 col-lg-6 col-12'>
          <div className='textv text-black text-center mb-5'>
            <h2 className='text-center pt-5'>iphone</h2>
            <span className='iii text-primary'>Love the power.<br></br>Love the price.</span><br></br>
            <span className='ooo'>From ₹129900.00* before trade‑in</span><br />
            <Button variant="primary my-2">Buy</Button>{' '}
            <Button variant="link"><Link to="/product">Learn more</Link></Button>

          </div>
        </div>
        <div className='nnn col-sm-12 col-md-6 col-lg-6 col-12'>
          <div className='imges text-center'>
            <img src={img66} alt=""/>
          </div>
        </div>

      </div>
      </div>

     








      <div className='section1 my-5 '>
        <div className='container-fluid text-center my-5'>
          <h1 className='fs-1'>Pro<span className="text-primary fs-5">duct</span> </h1>
          <hr className="w-50 m-auto"></hr>
        </div>
        <div className='container-fluid' >
          <div className='row ' >
            <div className='col-sm-12 col-md-6 col-lg-3 col-12 text-center ' >
              <Mainproduct image={phone1} title="Apple iPhone 14 Pro Max (256 GB)- Deep Purple" price="1,49,900" />
            </div>
            <div className='col-sm-12 col-md-6 col-lg-3 col-12 text-center'>
              <Mainproduct image={phone2} title="Apple iPhone 14 Pro (1 TB) - Gold-screen body" price="1,43,990" />
            </div>
            <div className='col-sm-12 col-md-6 col-lg-3 col-12 text-center'>
              <Mainproduct image={phone3} title="Samsung Galaxy S23 Ultra 5G (Phantom Black, 12GB, 256GB Storage)" price="1,24,999 " />
            </div>
            <div className='col-sm-12 col-md-6 col-lg-3 col-12 text-center'>
              <Mainproduct image={phone4} title="Samsung Galaxy Z Fold4 5G (Beige, 12GB RAM, 512GB Storage)" price="1,64,999" />
            </div>
            {/* {
              cardProduct.map((el)=>{
                return <Mainproduct title={el.title} image={el.category.image} price={el.price} />
              })
            } */}

          </div>
        </div>
      </div>

    </>
  )
}

export default About