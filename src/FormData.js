export const FormData = {
	intro:{
		display: 'Solarize America is the new national program which helps homeowners save the maximum amount of money with solar across the country.',
		display2:'',
		options: ['Yes, I do', 'No, I rent'],
		page: 0,
		description: '',
		percentage: 0,
		key:'intro'
	},
	1:{
		display: 'Do you have a "SMART" Meter?' ,
		display2:'',
		options: ['Yes', 'No'],
		page: 1,
		image: 'https://images.typeform.com/images/d4XNM5icGjKJ/image/default',
		description: 'Example "SMART" Meter:',
		percentage:20,
		key:'Has_SMART_METER?'
	},
	2: {
		display: 'How are your monthly electricity bills?',
		display2:'',
		options: ['$50-$100', '$101 - $150', '$151 - $200', '$201+'],
		page: 2,
		description: '',
		percentage:30,
		key:'Electric_Bill'
	},
	3: {
		display: "How long does the sun shine on your roof?",
		display2:'',
		options: ['Morning Sun Only', 'Afternoon Sun Only', 'All Day Sun'],
		page: 3,
		description: '',
		percentage:40,
		key:'Sunshine_On_Roof'
	},
	namePage: {
		display: "What is your name?",
		display2:'',
		options: ['Your name'],
		page: 5,
		description: '(For your solar design)',
		percentage:60,
		key:'Credit Score'
	},
	5: {
		display: "What is your name stranger?",
		display2:'',
		options: ['Your name'],
		page: 5,
		description: 'My name is Chris, lets not be strangers for long!',
		percentage:60,
		key:'Credit Score'
	},
	creditProgramPage: {
		display: "There are different programs based off your credit, what range are you in?",
		display2:'',
		options: ['Cell Number'],
		page: 4,
		description: '',
		percentage:90,
		key:'Credit Score'
	},
	8: {
		display: "There are different programs based off your credit, what range are you in?",
		display2:'',
		options: ['599 and below', '600-650', '651+'],
		page: 4,
		description: '',
		percentage:90,
		key:'Credit Score'
	},
	//page 7 confirmation text
	7: {
		display: "What's the best number to text confirmation to when your design ready?",
		display2:'',
		options: ['Mobile Number'],
		page: 4,
		description: '',
		percentage:80,
		key:'Credit Score'
	},
	confirmationText: {
		display: "What's the best number to text confirmation to when your design ready?",
		display2:'',
		options: ['Mobile Number'],
		page: 4,
		description: '',
		percentage:80,
		key:'CellNumber'
	},
	//page 6 roof deign
	6: {
		display: "What email should we use to send your custom roof design?",
		display2:'',
		options: ['Email'],
		page: 4,
		description: 'Example solar roof design:',
		image:'https://images.typeform.com/images/iHS53ZvbqRef/image/default',
		percentage:70,
		key:'Credit Score'
	},
	roofDesignPage: {
		display: "What email should we use to send your custom roof design?",
		display2:'',
		options: ['Email'],
		page: 4,
		description: 'Example solar roof design:',
		image:'https://images.typeform.com/images/iHS53ZvbqRef/image/default',
		percentage:70,
		key:'Credit Score'
	},
	successPage :{
		display: "Nice Work!",
		display2:"We'll be calling shortly to confirm a few details about your solar design.",
		options:[],
		page: 6,
		description: "Please pick up 🙂",
		description2: "",
		percentage: 100,
		key:'success'
	},
	zipcodepage: {
		display: "Hello, what's your zipcode?" ,
		display2:'',
		options: ['Zip Code'],
		page: 0,
		description: "We'll first see if utilities are approved in your area.",
		percentage:10,
		key:'zipcode'
	},
	//page 4 address page
	addresspage:{
		display: 'What is your address?' ,
		display2:'',
		options: ['Address'],
		page: 0,
		description: "We'll use satellite imaging and see if your roof faces the right direction for solar",
		percentage:52,
		key:'Home Owner addressform'
	},
	4:{
		display: 'What is your address?' ,
		display2:'',
		options: ['Address'],
		page: 0,
		description: "We'll use satellite imaging and see if your roof faces the right direction for solar",
		percentage:52,
		key:'Home Owner addressform'
	},
	renterpage:{
		display: 'Thank you for your interest in going solar!' ,
		display2:"We work with homeowners to improve their cost savings and energy-efficient lifestyles, and are happy assist you if you connect us with the owner of the home. If they end up going solar with us, you'll even earn $250 for the recommendation!",
		options: ['Address'],
		page: 0,
		description: '',
		percentage:25,
		key:'Home Owner'
	},


}