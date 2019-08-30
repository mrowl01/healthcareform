import Filler from '../Filler/Filler.js';
import React, {Component} from 'react';

class ProgressBar extends Component {
  render(){
    return(
      <div className = 'progressbar'>
           <Filler percentage={this.props.percentage} />
      </div>
    )
  }
}

export default ProgressBar; 