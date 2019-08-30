import React, {Component} from 'react';

class Filler extends Component {
  render(){
    //magic number representing # of pages
    //toDo: remove magic number
    return(   
      <div>
       <div className = 'filler' style = {{ width: `${this.props.percentage}%`}} />
      </div>
    )
  }
}
export default Filler; 