import React, {Component} from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import Logo from '../../Assets/logo.png';


class ZipcodePage extends Component {
  constructor(){
    super();
    this.state = {
      currentInput: ''
    }
  }
  onInput = (e) => {
    e.preventDefault();
    this.setState({
      currentInput: e.target.value
    })
  }
  //if input empty set disabled button to true, else disable = false 
  checkInput = () =>{
    let isnum = /^\d+$/.test(this.state.currentInput);
    if(this.state.currentInput.length !== 5 ){
      return true;
    }
      return !isnum;
  }
  render(){ 
    return(
      <div className = 'app'>
        <div className = 'contentbox'>
        <ProgressBar percentage = {this.props.percentage}/>
          <h1> {this.props.display} </h1>
          <h3>{this.props.display2} </h3>
          <br/>
          <p style = {{fontSize:'1.3rem'}}className = 'description'> {this.props.description} </p>
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
                  onBlur = {this.props.submit}
                  //When customer exits the text box submit data
                  
                  />
                </label>
              </div>
              ))}
          <button disabled = {this.checkInput()} id='formSubmit' onClick = {this.props.onClick}> Next </button>
          </div>
          <br/>
        </div>
     
      </div>
    )
  }
}

export default ZipcodePage; 

