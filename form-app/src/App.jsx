import { useState } from 'react'
import './App.css'

function App() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false)
  const [valid, setValid] = useState(false)

  const handlefirstNameInputChange = (e) => {
    setValues({...values, firstName: e.target.value})
  }
  const handlelastNameInputChange = (e) => {
    setValues({...values, lastName: e.target.value})
  }
  const handleemailInputChange = (e) => {
    setValues({...values, email: e.target.value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(values.firstName && values.lastName && values.email){
      setValid(true)
    }
    setSubmitted(true);
  }

  return (
    <>
      <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? <div className="success-message">Success! Thank you for registering</div> : null}
        <input
          id="first-name"
          value={values.firstName}
          onChange={handlefirstNameInputChange}
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !values.firstName ?  <span>Please enter your first name</span> : null}
        <input
          id="last-name"
          value={values.lastName}
          onChange={handlelastNameInputChange}
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !values.lastName ?  <span>Please enter your last name</span> : null}
        <input
          id="email"
          value={values.email}
          onChange={handleemailInputChange}
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email ?  <span>Please enter your email</span> : null}
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
    </>
  )
}

export default App
