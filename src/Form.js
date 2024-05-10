import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="app">
      <div className="container">
        <form action="">
          <div>
            <h1 className="heading">Form</h1>
            <div>
              <label htmlFor="" className="label">Email:</label>
              <input type="text" placeholder="email" />
            </div>
            <div>
              <label htmlFor="" className="label">Password:</label>
              <input type="text" placeholder="password" />
            </div>
          </div>
          <div>
            <button>submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
