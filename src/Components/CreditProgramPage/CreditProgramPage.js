import React, {Component} from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
// import Logo from '../../Assets/logo.png';

class CreditProgramPage extends Component {
  render(){
    return(
      <div className = 'app'>
        <div className = 'contentbox'>
          <h1> {this.props.display} </h1>
          <h3>{this.props.display2} </h3>
          <br/>
          <p style = {{fontSize: '1.3rem'}}className = 'description'> {this.props.description} </p>
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
                  onChange = {this.props.onChange}
                  //When customer exits the text box submit data
                  />
                </label>
              </div>
              ))}
          <button id='formSubmit' onClick = {this.props.onClick}> Next </button>
          </div>
          {this.props.pageNumber!==0 ? <button className = 'backButton' onClick = {this.props.goBack}> Back </button>  : <div> </div>}
          <br/>
        </div>
      </div>
    )
  }
}

export default CreditProgramPage; 
