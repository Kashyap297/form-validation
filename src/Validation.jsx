import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './validation.css'
import img1 from "./images/Computer login-pana.png"
import { useRef } from "react";

const Validation = () => {

  const hideRef = useRef(false)
  const showRef = useRef(true)
  const hideElement = () => {
    if (hideRef.current) {
      hideRef.current.style.display = 'none';
    }
  };
  const showElement = () => {
    if (showRef.current) {
      showRef.current.style.display = 'block';
    }
  };
  const initialInput = {
    name: "",
    email: "",
    number: "",
  };
  const [input, setInput] = useState(initialInput);
  const [errors, setErrrors] = useState({});
  const [datas, setDatas] = useState([]);

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    // setInput({ ...input, [e.target.name]: e.target.value })
    setInput({ ...input, [key]: value });
  };

  const checkValidate = (input) => {
    const errors = {};
    if (input.name === "" || input.name === " ") {
      errors.name = "Name is Required";
    }
    if (input.email === "" || input.email === " ") {
      errors.email = "Email is Required";
    }
    if (input.number === "" || input.number === " ") {
      errors.number = "Number is Required";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validate = checkValidate(input)
    setErrrors(validate)
    const check = Object.keys(validate)
    if (check.length < 1) {
      setDatas([...datas, input])
      showElement()
      hideElement()
      setInput(initialInput)
    }
  };



  return (
    <>
      <main className="d-flex justify-content-center align-items-center vh-100">
        <div className="container border bg-white rounded-4">
          <div className="row px-5 py-4 justify-content-center align-items-center">
            <div className="col-5 m-auto">
              <form className="row g-3 p-3" onSubmit={handleSubmit}>
                <h3>Registration</h3>
                <div className="col-md-12 position-relative">
                  <label className="form-label">First Name</label>
                  <input name="name" value={input.name} type="text" className="form-control" placeholder="Name" onChange={handleChange}></input>
                  <div className="text-danger">{errors && errors.name}</div>
                </div>
                <div className="col-md-12 position-relative">
                  <label className="form-label">Email ID</label>
                  <input name="email" value={input.email} type="email" className="form-control" placeholder="Email" onChange={handleChange}></input>
                  <div className="text-danger">{errors && errors.email}</div>
                </div>
                <div className="col-md-12 position-relative">
                  <label className="form-label">Phone Number</label>
                  <input name="number" value={input.number} type="number" className="form-control" placeholder="Number" maxLength={10} onChange={handleChange}></input>
                  <div className="text-danger">{errors && errors.number}</div>
                </div>
                <div className="col-12">
                  <button className="btn text-white">Register</button>
                </div>
              </form>
            </div>
            <div className="col-7">
              <div className="side-img" ref={hideRef}>
                <img src={img1} alt="" width="100%" />
              </div>
              <table className="table  w-100 text-center" ref={showRef}>
                <thead className="w-100">
                  <tr>
                    <th className="clr col-2">Name</th>
                    <th className="clr col-8">Email ID</th>
                    <th className="clr col-2">Number</th>
                  </tr>
                </thead>
                <tbody className="w-100">
                  {
                    datas.map(data => {
                      return (
                        <>
                          <tr className="col-4">
                            <td className="col-4">{data.name}</td>
                            <td className="col-4">{data.email}</td>
                            <td className="col-4">{data.number}</td>
                          </tr>
                        </>
                      )
                    })
                  }

                </tbody>
              </table>
            </div>


          </div>
        </div>

      </main>
    </>
  );
};

export default Validation;
