import React, {Component} from 'react';
import Footer from '../Footer/Footer';
class RentersPage extends Component {
	btnClick() {
        window.open("https://www.envirosolarpower.com/envirosolapowerreferralprogram");
    }
	render(){
		return (
		<div className = 'app' >
	
        <div className = 'contentbox'>
 
	       		<h1> {this.props.display} </h1>
          		<hr/>
          		<p> {this.props.display2} </p>
          		<button onClick = {this.btnClick} className = 'backButton'  >
          		 CLICK HERE!  
          		</button>
	        </div>
	   
	     </div>
		)
	}
}

export default RentersPage ; 