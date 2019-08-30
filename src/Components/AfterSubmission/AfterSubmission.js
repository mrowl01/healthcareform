import React, {Component} from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
class AfterSubmission extends Component {
	render(){
		return (
		<div className = 'app' >
        	<div className = 'contentbox'>
        		<ProgressBar percentage = {this.props.percentage}/>
	       		<h1> {this.props.display} </h1>
          		<hr/>
          		<h2> {this.props.display2} </h2>
          		<h2>{this.props.description}</h2>
          		<p>{this.props.description2}</p>
	        </div>
	        <iframe className ='iframe'
	        style = {{border:0}}
	        	src = 'https://www.solarizeamerica.info/thankyoufromsolarizeamerica'
	    		width = '0vh'
	    		height = '0vh'
	        />
	     </div>
		)
	}
}

export default AfterSubmission ; 