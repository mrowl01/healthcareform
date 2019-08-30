import React, {Component} from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';

// import Logo from '../../Assets/logo.png';

class Form extends Component {
    constructor(){
    super();
    this.state = {
      email: '',
      number: '',
      name: '',
    }
  }
  onInput = (e) => {
    e.preventDefault();
    if(e.target.name === 'Mobile Number '){
      this.setState({
        number:e.target.value
      })
    }
    if(e.target.name === 'Email '){
      this.setState({
        email:e.target.value
      })
    }
    if(e.target.name === 'Full Name '){
      this.setState({
        name:e.target.value
      })
    }
  }
  checkInput = () =>{
    if (this.state.email === '' || this.state.name === '' ||this.state.number === '' ){
      return true;
    } else {
      return false; 
    }
  }
  render(){
    return(
      <div className = 'app'>
            
        <div className = 'contentbox'>
            
          <ProgressBar percentage = {this.props.percentage}/>
          <h1> {this.props.display} </h1>
          <br/>
          <p className = 'description'> {this.props.description} </p>
          <hr/>
          <div className = 'fields'>
            {this.props.options.map((item, index)=>(
              <div  key = {this.props.pageNumber + item}>
                <label>
                  <input type='text' 
                  name = {item}
                  placeholder ={'   '+ item}
                  className = 'inputField'
                  //When customer exits the text box submit data
                  onBlur = {this.props.submitData}
                  onChange={e => { this.onInput(e); this.props.onChange(e)}}
                  />
                </label>
              </div>
              ))}
          <button disabled = {this.checkInput()} id='formSubmit' onClick = {this.props.onClick}> Send </button>
          </div>
          {this.props.pageNumber!==0 ? <button className = 'backButton' onClick = {this.props.goBack}> Back </button>  : <div> </div>}
          <br/>
        </div>
        
      </div>
    )
  }
}

export default Form; 

// <div id = 'mobile-logo'> </div>
//  <div id='desktop-logo'> </div>