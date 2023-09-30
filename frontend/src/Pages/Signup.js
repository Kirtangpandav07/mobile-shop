import React, { useState } from 'react'; 


const Signup = () => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const collectData = async () => {
    console.log(fname, lname, email, password);
    let result = await fetch('http://localhost:3000/user/signup', {
      method: 'post',
      body: JSON.stringify({ fname, lname, email, password }),
      headers: {
        'Content-type': 'application/json'
      }
    });
    result = await result.json();
    console.log(result);
  };

  return (
    <div className='register-container my-5 bg-black'>
      <h1>Register</h1>
      <div className='form'>
        <input type="text" placeholder='First Name' value={fname} onChange={(e) => setfname(e.target.value)} />
        <input type="text" placeholder='Last Name' value={lname} onChange={(e) => setlname(e.target.value)} />
        <input type="email" placeholder='Email' value={email} onChange={(e) => setemail(e.target.value)} />
        <input type="password" placeholder='Password' value={password} onChange={(e) => setpassword(e.target.value)} />
        <button onClick={collectData} type='button'>Submit</button>
      </div>
    </div>
  );
};

export default Signup;
