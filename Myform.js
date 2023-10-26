import React, { Component } from 'react'

export default class Myform extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
       username:'',
       age:null
      };
    };
myChangehandler=(event)=>{
    let name=event.target.name;
    let val=event.target.value;
    this.setState({[name]:val})
}
  render() {
    return (
      <div>
        <h2>enter your details</h2>
        <h2>your name is{this.state.username} your age is {this.state.age}</h2>
        <form>
            <h1>enter your name</h1><br/>
            <input type='text' name='username'onChange={this.myChangehandler}/>
            <h1>enter your age</h1><br/>
            <input type='text' name='age' onChange={this.myChangehandler}/><br/>
            <textarea>this is for text area </textarea><br/>
            <select>
              <option value='apple'>Apple</option>
              <option value='grape'>Grapes</option>
              <option selected value='pineapple'>Pineapple</option>
            </select><br/>
            <h3>upload your CV</h3>
            <input type='file'/>
            
                        <input type='submit' name='save'/>
        </form>
      </div>
    )
  }
}
