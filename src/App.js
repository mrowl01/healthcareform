import React, {Component} from 'react';
import './App.css';
import {FormData} from './FormData.js';
import ProgressBar from './Components/ProgressBar/ProgressBar';
import Loading from './Components/Loading/Loading';
import RadioQuestions from './Components/RadioQuestions/RadioQuestions';
import Form from './Components/Form/Form';
import ZipcodePage from './Components/ZipcodePage/ZipcodePage'; 
import AddressPage from './Components/AddressPage/AddressPage';
import AfterSubmission from './Components/AfterSubmission/AfterSubmission';
import RenterPage from './Components/RenterPage/RenterPage';
import RoofAddressPage from './Components/RoofAddressPage/RoofAddressPage';
import IntroPage from './Components/IntroPage/IntroPage';
import NamePage from './Components/NamePage/NamePage';
import RoofDesignPage from './Components/RoofDesignPage/RoofDesignPage';
import TextPage from './Components/TextPage/TextPage';


class App extends Component { 
  constructor() {
    super()
    this.state = {
      token:'',
      userItem: {
        itemCreated:false,
        itemID: null,
        qualified: true,
      },
      data:{
        pageNumber: 0,
        responses: {},
        percentage: 20,
      },
      fields: {
        title: 'NONAME',
        phone: [{ "type": "mobile", "value": "NOPHONE" }],
        email: [{ "type": "other", "value": "NOEMAIL" }],
        source: '',
        zip: 'NOZIPCODE',
        street: 'NOSTREET',
        state: 'NOSTATE',
        city: 'NO CITY',
        leadsource:'Funnel_Conversational_Voice_8_16_19'
      }
    }
  }
  //This just records what the customer selects and sends it to the object
  whenSelected = (e) =>{
    e.preventDefault() ;
    //if they select no, i rent make qualified false
    if(e.target.value === 'No, I rent'){
      this.setState({
        userItem:{
          qualified:false
        }
      })
    } else {
      this.setState({
      data: {
        pageNumber: this.state.data.pageNumber + 1,
        responses: Object.assign( {}, this.state.data.responses, { [FormData[this.state.data.pageNumber].key] : e.target.value })
        }
      })
    }
  }
  //react lifecycle method to get the auth token
  componentDidMount= () =>{
    fetch(`https://enviroserver.herokuapp.com/`, { 
      method:'post',
      headers: {
        'Content-Type': 'application/json', 
        "Authorization":'Bearer d10132ab046741c7a218ed304f85be96',
      },
        body: JSON.stringify({
        'key':'key'
        })
      })
      .then(response => response.json())
      .then(res => {
        console.log(res);
        this.setState({
          token: res
        })
      })
      .catch (err=> console.log(err))
  }
  //this function records what the customers is typing in real time, then updates out object
  //The name must match exactly, can change to something less precice later todo:
  onChange = (e) => {
    e.preventDefault();
    if(e.target.name === 'saver'){
    }
    if(e.target.name === 'Mobile Number'){
      this.setState({
        fields: {
          email: this.state.fields.email,
          phone: [{"type": "mobile" , "value": e.target.value}],
          title: this.state.fields.title,
          source: JSON.stringify(this.state.data.responses),
          zip: this.state.fields.zip,
          street: this.state.fields.street,
          state: this.state.fields.state,
          city: this.state.fields.city,
          leadsource: this.state.fields.leadsource
        }
      })
    }
    if(e.target.name === 'Email'){
      this.setState({
        fields: {
          phone: this.state.fields.phone,
          email: [{"type": "other" , "value": e.target.value}],
          title: this.state.fields.title,
          source: JSON.stringify(this.state.data.responses),
          zip: this.state.fields.zip,
          street: this.state.fields.street,
          state: this.state.fields.state,
          city: this.state.fields.city,
          leadsource: this.state.fields.leadsource
        }
      })
    }
    if(e.target.name === 'Your name'){
      this.setState({
        fields: {
          phone:this.state.fields.phone,
          email:this.state.fields.email,
          title: e.target.value,
          source: JSON.stringify(this.state.data.responses),
          zip: this.state.fields.zip,
          street: this.state.fields.street,
          state: this.state.fields.state,
          city: this.state.fields.city,
          leadsource: this.state.fields.leadsource
        }
      })
    }
    //special form cases
    if(e.target.name === 'Zip Code'){
      this.setState({
        fields: {
          phone:this.state.fields.phone,
          email:this.state.fields.email,
          title: this.state.fields.title,
          source: JSON.stringify(this.state.data.responses),
          zip: e.target.value,
          street: this.state.fields.street,
          state: this.state.fields.state,
          city: this.state.fields.city,
          leadsource: this.state.fields.leadsource
        }
      })
    }
    if(e.target.name === 'Address' || e.target.name === 'Street Address'){
      this.setState({
        fields: {
          phone:this.state.fields.phone,
          email: this.state.fields.email,
          title: this.state.fields.title,
          source: JSON.stringify(this.state.data.responses),
          street: e.target.value,
          state: this.state.fields.state,
          city: this.state.fields.city,
          leadsource: this.state.fields.leadsource
        }
      })
    }
    if(e.target.name === 'State'){
     
      this.setState({
        fields: {
          phone:this.state.fields.phone,
          email: this.state.fields.email,
          title: this.state.fields.title,
          source: JSON.stringify(this.state.data.responses),
          street: this.state.fields.street,
          state: e.target.value,
          city: this.state.fields.city,
          leadsource: this.state.fields.leadsource
        }
      })
    }
    if(e.target.name === 'City'){
      
      this.setState({
        fields: {
          phone:this.state.fields.phone,
          email: this.state.fields.email,
          title: this.state.fields.title,
          source: JSON.stringify(this.state.data.responses),
          street: this.state.fields.street,
          city: e.target.value,
          state: this.state.fields.state,
          leadsource: this.state.fields.leadsource
        }
      })
    }
    //this will keep the responses thus far in the object to be sent on submit
  }
  //the special cases have to be first in this if-else statment or else it will not render properly
  // magic numbers , todo:remove magic numbers 
  renderMaster = () => {
    //if they are renter display renter page
    if(this.state.userItem.qualified === false){
      return (
        <React.Fragment>
          <RenterPage 
          description = {FormData['renterpage'].description} 
          display = {FormData['renterpage'].display}
          display2 = {FormData['renterpage'].display2}
          />
        </React.Fragment>

      )
    }
    //intro page
    if(this.state.data.pageNumber === 0){
      return(
        <React.Fragment>
        <ZipcodePage
          pageNumber = {this.state.data.pageNumber} options = {FormData['zipcodepage'].options} 
          description = {FormData['zipcodepage'].description} 
          display = {FormData['zipcodepage'].display} 
          onChange = {this.onChange}
          percentage = {FormData['zipcodepage'].percentage}
          onClick = {this.incrementPage}
          goBack = {this.decrementPage}
          display2 = {FormData['zipcodepage'].display2}
          submit = {this.submitData }
          />
        </React.Fragment>
      )
    } else if (this.state.data.pageNumber === 10){ 
      return (
        <React.Fragment>
           <AfterSubmission
          description = {FormData['successPage'].description} 
          description2 = {FormData['successPage'].description2} 
          display = {FormData['successPage'].display}
          display2 = {FormData['successPage'].display2}
          />
       </React.Fragment>
      )  
    } else if (this.state.data.pageNumber === 9){ 
      return (
        <React.Fragment>
          <Loading nextPage = {this.incrementPage}/>
       </React.Fragment>
      )  
    } else if (this.state.data.pageNumber === 7){ 
      return (
        <React.Fragment>
          <TextPage
          pageNumber = {this.state.data.pageNumber} options = {FormData['confirmationText'].options} 
          description = {FormData['confirmationText'].description} 
          display = {FormData['confirmationText'].display} onChange = {this.onChange}
          percentage = {FormData['confirmationText'].percentage}
          onClick = {this.incrementPage}
          goBack = {this.decrementPage}
          display2 = {FormData['confirmationText'].display2}
          image = {FormData['confirmationText'].image}
          submit = {this.submitData}
          />
       </React.Fragment>
      )  
    } else if (this.state.data.pageNumber === 6){ 
      return (
        <React.Fragment>
          <RoofDesignPage
          pageNumber = {this.state.data.pageNumber} options = {FormData['roofDesignPage'].options} 
          description = {FormData['roofDesignPage'].description} 
          display = {FormData['roofDesignPage'].display} onChange = {this.onChange}
          percentage = {FormData['roofDesignPage'].percentage}
          onClick = {this.incrementPage}
          goBack = {this.decrementPage}
          display2 = {FormData['roofDesignPage'].display2}
          image = {FormData['roofDesignPage'].image}
          submit = {this.submitData}
          />
       </React.Fragment>
      )  
    }
    else if (this.state.data.pageNumber === 5){ 
      return (
        <React.Fragment>
          <NamePage
          pageNumber = {this.state.data.pageNumber} options = {FormData['namePage'].options} 
          description = {FormData['namePage'].description} 
          display = {FormData['namePage'].display} onChange = {this.onChange}
          percentage = {FormData['namePage'].percentage}
          onClick = {this.incrementPage}
          goBack = {this.decrementPage}
          display2 = {FormData['namePage'].display2}
          submit = {this.submitData}
          />
       </React.Fragment>
      )  
    }
    //make page number where you want the loading to take place
     else if (this.state.data.pageNumber === 4){ 
      return (
        <React.Fragment>
          <AddressPage
          pageNumber = {this.state.data.pageNumber} options = {FormData['addresspage'].options} 
          description = {FormData['addresspage'].description} 
          display = {FormData['addresspage'].display} onChange = {this.onChange}
          percentage = {FormData['addresspage'].percentage}
          onClick = {this.incrementPage}
          goBack = {this.decrementPage}
          display2 = {FormData['addresspage'].display2}
          submit = {this.submitData}
          />
       </React.Fragment>
      )  
    } else {
      return (
        <React.Fragment>
          <RadioQuestions pageNumber = {this.state.data.pageNumber} options = {FormData[this.state.data.pageNumber].options} 
          whenSelected ={this.whenSelected } description = {FormData[this.state.data.pageNumber].description} 
          display = {FormData[this.state.data.pageNumber].display}
          percentage = {FormData[this.state.data.pageNumber].percentage}
          goBack = {this.decrementPage}
          display2 = {FormData[this.state.data.pageNumber].display2}
          image = {FormData[this.state.data.pageNumber].image}
          />
       </React.Fragment>
      )
    }
  }
  incrementPage = () => {
    this.setState({
      data: {
        pageNumber: this.state.data.pageNumber + 1,
      }
    })
  }
  decrementPage = () =>{
    this.setState({
      data: {
        pageNumber: this.state.data.pageNumber - 1,
        responses: Object.assign( {}, this.state.data.source, { [FormData[this.state.data.pageNumber].key] : '' })
      } 
    })
  }
  //When customer enters phoneNum/Email/address handle
  submitData = () =>{
    //if Item hasn't been created, create item
    if(!this.state.userItem.itemCreated){
      fetch('https://api.podio.com/item/app/23185020/', {
      method:'post',
      headers: {
        'Content-Type': 'application/json', 
        "Authorization":`Bearer ${this.state.token}`,
      },
        body: JSON.stringify({
        "fields": this.state.fields
        })
      })
      .then(response => response.json())
      .then(res => {
        console.log(res);
        //tell app item has been created for updating in future
        this.setState({
          userItem:{
            itemCreated:true,
            itemID: res.item_id
          }
        })
        //update id and item info in state
      })
      .catch (err=> console.log(err));
    } else {
      //update item
      fetch(`https://api.podio.com/item/${this.state.userItem.itemID}`, {
      method:'put',
      headers: {
        'Content-Type': 'application/json', 
        "Authorization":`Bearer ${this.state.token}`,
      },
        body: JSON.stringify({
        "fields": this.state.fields
        })
      })
      .then(response => response.json())
      .then(res => {
        console.log(res)
        //response
      })
      .catch (err=> console.log(err));
    }
  } 
  render(){
    //magic number representing # of pages
    //toDo: remove magic number 
    return (
     this.renderMaster()
    )
  }
}
//https://podio.com/oauth/token?grant_type=refresh_token&client_id=23185020&client_secret=d8e4650a31a14b3eb09228fe3d88582d&refresh_token=50d7b1180e0f4f3b81e45080574b76e6

//50d7b1180e0f4f3b81e45080574b76e6
export default App; 