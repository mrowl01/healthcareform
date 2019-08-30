import React, {Component} from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';

// import Logo from '../../Assets/logo.png';
// <img id = 'mobile-logo' src ={Logo}/>
class RadioQuestions extends Component {
  render(){
    return(
      <div className = 'app'>
        <div className = 'contentbox'>
          <ProgressBar percentage = {this.props.percentage}/>
          <h1> {this.props.display} </h1>
          <h1>{this.props.display2}</h1>
          <p> {this.props.description} </p>
          {(this.props.image) ? <img width = "250px" src = {this.props.image} /> : null} 
          <hr/>
            <div className = 'options'>
              {this.props.options.map((item, index)=>(
                <div className = 'items' key = {this.props.pageNumber + item}>
                  <label>
                  <input type='radio'
                  onClick = {this.props.whenSelected}
                  value= {this.props.options[index]}
                  name = {this.props.pageNumber}
                  /> 
                  <span className= 'options' >{this.props.options[index]} <br/></span>
                  {this.props.options[index] === 'Needs some repair' ? <span id='creditline' style ={{marginLeft:'5%', fontSize:'1.6rem'}}>(below 650)</span> : <div></div>}
                  </label>
                </div>
                ))}
            </div>
            {this.props.pageNumber!==0 ? <button className = 'backButton' onClick = {this.props.goBack}> Back </button>  : <div> </div>}
        </div>
      
      </div>
    )
  }
}

export default RadioQuestions; 

