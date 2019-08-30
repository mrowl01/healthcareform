import React, {Component} from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import Logo from '../../Assets/logo.png';

class AddressPage extends Component {
   constructor(){
    super();
    this.state = {
      street: '',
      city: '',
      state: '',
      zipcode: '',
    }
  }
  onInput = (e) => {
    e.preventDefault();
    if(e.target.name === 'Street Address'){
      this.setState({
        street:e.target.value
      })
    }
    if(e.target.name === 'City'){
      this.setState({
        city:e.target.value
      })
    }
    if(e.target.name === 'State'){
      this.setState({
        state:e.target.value
      })
    }
    if(e.target.name === 'Zip Code'){
      this.setState({
        zipcode:e.target.value
      })
    }
  }
  checkInput = () =>{
    if (this.state.street === '' || this.state.city === '' ||this.state.state === '' ||this.state.zipcode === ''){
      return true;
    } else {
      return false; 
    }
  }
  render(){
    return(
      <div className = 'app'>
     
        <div className = 'contentbox'>
        
          <h1> {this.props.display} </h1>
          <h3>{this.props.display2} </h3>
          <br/>
          <p className = 'description'> {this.props.description} </p>
          <hr/>
          <div className = 'fields'>
            {this.props.options.map((item, index)=>(
              <div  key = {this.props.pageNumber + item}>
                <label>
                  <input 
                  type='text' 
                  name = {item}
                  placeholder ={'   '+ item}
                  className = 'inputField'
                  onChange={e => { this.onInput(e); this.props.onChange(e)}}
                  //When customer exits the text box submit data
                  />
                </label>
              </div>
              ))}
            <button name = 'saver' disabled = {this.checkInput()} id='formSubmit' 
            onClick = {e => { this.props.onClick(); this.props.submitData()}}> Next </button>
          </div>
          {this.props.pageNumber!==0 ? <button className = 'backButton' onClick = {this.props.goBack}> Back </button>  : <div> </div>}
          <br/>
        </div>
      </div>
    )
  }
}

export default AddressPage; 

