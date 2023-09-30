import axios from 'axios';
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

const Login = () => {
  const history = useHistory();

  // Define the validation schema using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required'),
  });

  const loginHandler = async (data) => {
    try {
      const logindata = await axios.post('http://localhost:3000/user/login', data);
      if (logindata) {
        localStorage.setItem('token', logindata.data.token);
        history.push('/addkart');
      } else {
        history.push('/');
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const logoutHandler = () => {
    // Remove the token from local storage to log out the user
    localStorage.removeItem('token');
    // Redirect the user to the login page or any other desired route
    history.push('/');
  };

  return (
    <div className="container  bg-image text-white">
      <div className="row justify-content-center">
        <div className="col-md-6">
          
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            // Use the validation schema here
            validationSchema={validationSchema}
            onSubmit={async (values) => {
              loginHandler(values);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="text-center bg-black p-4 mt-5">
                <div className="form-group mb-3">
                <h2 className='text-center my-5'>Login Page</h2>
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <Field
                    id="email"
                    name="email"
                    placeholder="jane@acme.com"
                    type="email"
                    className="form-control"
                  />
                  {/* Display validation errors */}
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <Field
                    id="password"
                    name="password"
                    placeholder="password"
                    type="password"
                    className="form-control"
                  />
                  {/* Display validation errors */}
                  <ErrorMessage name="password" component="div" className="text-danger" />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-success">
                    {isSubmitting ? 'Signing in...' : 'Submit'}
                  </button>
                  <button onClick={logoutHandler} className="btn btn-danger mt-3">
                    Logout
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
