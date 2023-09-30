import React from 'react'
import Button from 'react-bootstrap/Button';
import { AiOutlineTwitter, AiOutlineYoutube, AiOutlineGithub, AiOutlineWhatsApp } from "react-icons/ai";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Footer = () => {
  return (
    <div className='main'>

      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-6 col-lg-4 col-12'>
            <div className='part1'>

              <ul>
                <div className='yyy'>COMPANY</div>
                <hr className="w-25 m-start"></hr>
                <li>About us</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact Us</li>
                <li>Our Stores</li>
                <li>Price Match Guarantee</li>
              </ul>
            </div>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4 col-12'>
            <div className='part1'>
              <ul>
                <li className='yyy'>POLICIES AND ORDER</li>
                {/* <div className='uuu'></div> */}
                <hr className="w-25 m-start"></hr>
                <li>Authenticity Guarantee</li>
                <li>Disclaimer</li>
                <li ><Link to="/policy" className="kkku">Privacy Policy</Link></li>
                <li>Shipping and Return Policies</li>
                <li>Terms and Conditions</li>
                <li>Warranty Information</li>
              </ul>
            </div>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4 col-12'>
            <div className='part1'>
              <ul>
                <li className='yyy'>HELP</li>
                <hr className="w-25 m-start"></hr>
                <li>Authenticity Guarantee</li>
                <li>Disclaimer</li>
                <li>Privacy Policy</li>
                <li>Shipping and Return Policies</li>
                <li>Terms and Conditions</li>
                <li>Warranty Information</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-100 m-start"></hr>
      <div className='container-fluid text-center text-secondary  pb-3 '>
        Devlopment by Kirtan pandav 

      </div>
    </div>
  )
}

export default Footer