import React from 'react'
import Validator from 'validator'

export default React.createClass({
  getDefaultProps(){
    return {
      errors: {
        email: {
          isValidEmail: "your email is invalid",
          isValidLength: "your email needs to be at least 10 characters"
        }
      }
    }
  },
  getInitialState(){
    return {
      email: {
        hasError: false,
        typeOfError: ""
      }
    }
  },
  handleEmailInputChange(e){
    // give person errors if the bool is false
      // content "password needs to have at least 10 characters" (HTML text content)
      // present coloring to guide person errors (CSS)
    if(!Validator.isEmail(e.target.value)){
      this.setState({
        email: {
          hasError: true,
          typeOfError: "isValidEmail"
        }
      });
    }else{
      // invalid email
      // I want parent div to change className to input--error
      this.setState({
        email: {
          hasError: false
        }
      });
    }

    if(Validator.isLength(e.target.value, { min: 10, max: 51})){
      // if length matches!
      this.setState({
        email: {
          hasError: false
        }
      });
    }else{
      this.setState({
        email: {
          hasError: true,
          typeOfError: "isValidLength"
        }
      });
    }
  },
  handlePasswordInputChange(e){
    console.log(Validator.isLength(e.target.value,{
      min: 10,
      max: 51
    }));

  },
  render() {
    console.log(this.state.email.hasError);
    return (
      <form>
        <div className={this.state.email.hasError? "input--error": ""}>
          <span className="input__errorText">
            {this.state.email.hasError? this.props.errors.email[this.state.email.typeOfError] : ""}
          </span>
          <input type="email" ref="emailInput" onChange={this.handleEmailInputChange} placeholder="email" />
        </div>
        <input type="password" onChange={this.handlePasswordInputChange} placeholder="password" />
        <input type="submit" />
      </form>
    )
  }
})
