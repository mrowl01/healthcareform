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
          <br/>
          <p> {this.props.description} </p>
          <hr/>
            {this.props.pageNumber!== 'intro' ? <button className = 'backButton' onClick = {this.props.onClick}> See If I Qualify </button>  : <div> </div>}
        </div>
      
      </div>
    )
  }
}

export default RadioQuestions; 

