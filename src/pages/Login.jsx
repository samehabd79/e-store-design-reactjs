import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Login extends Component {
  //style
  inputStyle =
    "border-[2px] border-silver rounded-lg outline-[#007AFF] p-2 focus:border-[#007AFF] ease-linear duration-200 ";

  //states
  state = {
    email: "",
    pass: "",
  };

  handleChange = (evt) => {
    const fields = Object.assign({}, this.state);
    fields[evt.target.name] = evt.target.value;
    this.setState({ ...fields });
  };

  render() {
    return (
      <div className="flex justify-center w-[100%] h-[100vh] bg-[#007AFF]">
        <div className="flex flex-col absolute top-[30%] bg-white shadow-lg shadow-black border-silver border-[2px] rounded-lg p-5 w-[40%] mobile:w-[90%]">
            <text className="text-2xl ">Log in</text>

          {/* First Name Last Name */}
          <div className="flex mt-7">
            {/* Email */}
            <input
              className={this.inputStyle + ` mt-2 w-[100%]`}
              name="email"
              type="email"
              placeholder="Email"
              onChange={this.handleChange}
              value={this.state.email}
              required
            />
          </div>
          {/* Password */}
          <div className="flex mt-7">
            <input
              className={this.inputStyle + ` w-[100%]`}
              name="pass"
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
              value={this.state.pass}
              required
            />
          </div>
          {/* Submit button */}
            <Link to={'/'}>
                <button className="mt-5 flex justify-center w-[100%] bg-[#007AFF] text-white font-medium rounded-md p-2 hover:bg-white hover:text-[#007AFF] hover:scale-[1.0.5] hover:border-[2px] hover:shadow-md hover:border-[#007AFF] ease-linear duration-200">
                    Log in
                </button>
            </Link>
        </div>
      </div>
    );
  }
}