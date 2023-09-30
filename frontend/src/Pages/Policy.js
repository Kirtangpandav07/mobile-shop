import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const policy = () => {
  return (
    <>
        <div className=' yyy container text-center my-5' >
            <h1>Apple Customer Privacy Policy</h1><br></br><br></br><br></br>
           
            <span>Apple is committed to your privacy. Read our customer Privacy Policy for<br></br> a clear explanation of how we collect, use, disclose, transfer, and store<br></br> your information.</span><br></br><br></br>
            <span>To access and manage your Apple data please visit Manage your Apple<br></br> account. For corrections or general enquiries, please<Link to="/policy"> Contact Privacy</Link> .</span>
        </div>
    </>
  )
}

export default policy