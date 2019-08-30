import React, {Component} from 'react';

// import Logo from '../../Assets/logo.png';

class Loading extends Component {
	changePage = () =>{
		setTimeout(
	    function() {
	        this.props.nextPage();
	    }
	    .bind(this),
	    2000
		);
	}
	render(){
		return (
		<div className = 'app' >
			{this.changePage()}
        	<div className = 'contentbox'>
        	
	        Checking Area For Eligibility ...
	        <br/>
	        <div className ="lds-circle loading-item"><div></div></div>
	        </div>
	        
	     </div>
		)
	}
}

export default Loading ; 