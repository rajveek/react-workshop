import { useState } from "react";

export default function Login() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [age, setAge] = useState(0);
  const [ageError, setAgeError] = useState(false);
  const [radiochecked, setradiochecked] = useState([]);
  const [radiocheckederror, setradiocheckederror] = useState("");
  const [userType, setUserType] = useState("");
  const [userTypeError, setuserTypeError] = useState(false);
  const[successMessage,setSuccessMessage] = useState(false);
  function validateForm(e) {
    e.preventDefault();
    if (name === "") {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (email === "") {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (password === "" || password.length < 8) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    if (age < 18) {
      setAgeError(true);
    } else {
      setAgeError(false);
    }
    if (userType === "") {
      setuserTypeError(true);
    } else {
      setuserTypeError(false);
    }
    if((nameError === false && emailError ===false && passwordError ===false && userTypeError ===false && ageError===false)){
        console.log(nameError)
        console.log(emailError)
        console.log(passwordError)
        console.log(userTypeError)
        console.log(ageError)
        setSuccessMessage(true)
      }  
      else{
        setSuccessMessage(false)
      }
  }
  return (
   <div className="container text-center">
      <h3>Signup</h3>
      <br></br>
      <form onSubmit={validateForm}>
        <div className="mb-3">
          <input
            placeholder="enter your email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>{" "}
          {emailError && (
            <div>
              <br></br>
              <span className="alert alert-danger">Email can't be blank</span>
            </div>
          )}
        </div>
        <div className="mb-3">
          <input
            placeholder="enter 8 digit password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>{" "}
          {passwordError && (
            <div>
              <br></br>
              <span className="alert alert-danger">
                Password is required and must be 8 or more characters
              </span>
            </div>
          )}
        </div>
        <div className="mb-3">
          <input
            placeholder="enter your name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br></br>{" "}
          {nameError && (
            <div>
              <br></br>
              <span className="alert alert-danger">Name is required field</span>
            </div>
          )}
        </div>
        <div className="mb-3">
          <input
            placeholder="enter your age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          {ageError && (
            <div>
              <br></br>
              <span className="alert alert-danger">
                age must be more than 18
              </span>
            </div>
          )}
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            name="flexRadioDefault"
            type="radio"
            value="F"
            onChange={(e) => setradiochecked(!radiochecked)}
          />
          <label> Female</label> &nbsp;
          <input
            className="form-check-input"
            name="flexRadioDefault"
            type="radio"
            value="M"
            onChange={(e) => setradiochecked(!radiochecked)}
          />
          <label> Male</label> &nbsp;
          <input
            className="form-check-input"
            name="flexRadioDefault"
            type="radio"
            value="O"
            onChange={(e) => setradiochecked(!radiochecked)}
          />
          <label> Others</label>
        </div>
        <div className="mb-3">
          <div className="btn-group">
            <select
              className="form-select"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value=""> Choose user type</option>
              <option value="admin"> Admin</option>
              <option value="student">Student</option>
              <option value="proffesor">Proffesor</option>
            </select>
          </div>
          {userTypeError && (
            <div>
              <br></br>
              <span className="alert alert-danger">
                Please choose user type !
              </span>
            </div>
          )}
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
      {successMessage && (
            <div>
              <br></br>
              <span className="alert alert-success">
                form submitted !
              </span>
            </div>
          )}
    </div> 
  );
}
