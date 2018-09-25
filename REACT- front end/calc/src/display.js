import React, { Component } from 'react';
import logo from './logo.svg';
import logoREACT from './logoREACT.svg';
import './App.css';
import axios from 'axios';

class Display extends Component {
    constructor() {
        super();
        this.state = {
            values: {}
        }
    }

    handleSubmit(e) {
        if(this.refs.fnum.value === '' || this.refs.snum.value === ''){
            alert("You haven't specified a number");
        }
        else if(this.refs.operator.value === ''){
            alert("You haven't specified an operator")
        }
        else
            {
                this.setState({
                    values: {
                        fnum: this.refs.fnum.value,
                        snum: this.refs.snum.value,
                        operator: this.refs.operator.value
    
    
                    }
                });

          //console.log(this.refs.fnum.value, this.refs.snum.value, this.refs.operator.value) 
         }
          let signUpAPI = "http://localhost:3004/calculate"
          let apiPayload = {
              fnum : this.state.values.fnum,
              snum : this.state.values.snum,
              operator : this.state.values.operator
          }
        
          axios.post(signUpAPI, apiPayload) 
          .then(res => {
             // alert(res.data.msg);
            this.setState({
               result:res.data.result 
            })
            this.props.sendResult(res.data.result)
          })
          .catch(err => {
              console.error(err);
          });
        
        
        e.preventDefault();
    }
    
    
    render() {

        return (

            <div className="MainDiv">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <img src={logoREACT} className="App-logo1" alt="logoREACT" />
                    <h1 className="App-title">Simple Calculator
                    </h1>


                </header>
                <p className="App-intro">
                    Lab 1 - Part 1</p>

                <form className="Calculate" onSubmit={this.handleSubmit.bind(this)}>
                    <label>Enter the first number:</label>
                    <input type="number" ref="fnum" name="firstnumber" />

                    <label>Enter the second number:</label>
                    <input type="number" ref="snum" name="secondnumber" />

                    <label>Operator:</label>
                    <select ref="operator" name="operators">
                        <option value="Add">Add</option>
                        <option value="Subtract">Subtract</option>
                        <option value="Multiply">Multiply</option>
                        <option value="Divide">Divide</option>
                    </select>

                    <input type="submit" value="Calculate" />
                </form>
            </div>


        );
    }
}


export default Display;