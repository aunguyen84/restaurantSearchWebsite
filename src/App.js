import React from 'react';
import './App.css';
import axios from 'axios';
import * as AmazonCognitoIdentity from "amazon-cognito-identity-js";

class HomePage extends React.Component {
	render() {
		return (
			<div className="homePage">
				{this.props.currentCityBestRestaurants.length > 0 && this.props.currentCityHotRestaurants.length > 0 && (
					<div className="homeSection currentCity">
						<div className="homeSubSection">
							<div className="subSectionTitle">{this.props.currentLocation.city}&apos;s Most Popular</div>	
							<ul className="restaurantHolder">
								{this.props.currentCityBestRestaurants.map((v, i) => {
									return (
										<li className="restaurant" key={"currentCityBestRestaurant_" + i}>
											<div className="left">
												<img src={v["image_url"]}/>
												<div>
													<div className="name" onClick={() => this.props.getRestaurantDetails(v.id)}>{v.name}</div>
													<div className="review">{this.props.getStars(v.rating)} {v["review_count"]} reviews</div>
													<div>{v.categoryString}</div>
												</div>
											</div>
											<div className="right">
												{v.price}
											</div>
										</li>
									)
								})}			
							</ul>
						</div>
						<div className="homeSubSection">
							<div className="subSectionTitle">{this.props.currentLocation.city}&apos;s Hot and New</div>	
							<ul className="restaurantHolder">
								{this.props.currentCityHotRestaurants.map((v, i) => {
									return (
										<li className="restaurant" key={"currentCityHotRestaurant_" + i}>
											<div className="left">
												<img src={v["image_url"]}/>
												<div>
													<div className="name" onClick={() => this.props.getRestaurantDetails(v.id)}>{v.name}</div>
													<div className="review">{this.props.getStars(v.rating)} {v["review_count"]} reviews</div>
													<div>{v.categoryString}</div>
												</div>
											</div>
											<div className="right">
												{v.price}
											</div>
										</li>
									)
								})}			
							</ul>
						</div>
					</div>
				)}
				{Object.keys(this.props.currentLocation).length > 0 && (this.props.currentCityBestRestaurants.length === 0 || this.props.currentCityHotRestaurants.length === 0) && (<div className="spinnerHolder"><i className="fas fa-spinner fa-spin"></i></div>)}
				{this.props.bayAreaBestRestaurants.length > 0 && this.props.bayAreaHotRestaurants.length > 0 && (
					<div className="homeSection">
						<div className="homeSubSection">
							<div className="subSectionTitle">Bay Area&apos;s Most Popular</div>	
							<ul className="restaurantHolder">
								{this.props.bayAreaBestRestaurants.map((v, i) => {
									return (
										<li className="restaurant" key={"bayAreaBestRestaurant_" + i}>
											<div className="left">
												<img src={v["image_url"]}/>
												<div>
													<div className="name" onClick={() => this.props.getRestaurantDetails(v.id)}>{v.name}</div>
													<div className="review">{this.props.getStars(v.rating)} {v["review_count"]} reviews</div>
													<div>{v.categoryString}</div>
												</div>
											</div>
											<div className="right">
												{v.price}
											</div>
										</li>
									)
								})}			
							</ul>
						</div>
						<div className="homeSubSection">
							<div className="subSectionTitle">Bay Area&apos;s Hot and New</div>	
							<ul className="restaurantHolder">
								{this.props.bayAreaHotRestaurants.map((v, i) => {
									return (
										<li className="restaurant" key={"bayAreaHotRestaurant_" + i}>
											<div className="left">
												<img src={v["image_url"]}/>
												<div>
													<div className="name" onClick={() => this.props.getRestaurantDetails(v.id)}>{v.name}</div>
													<div className="review">{this.props.getStars(v.rating)} {v["review_count"]} reviews</div>
													<div>{v.categoryString}</div>
												</div>
											</div>
											<div className="right">
												{v.price}
											</div>
										</li>
									)
								})}			
							</ul>
						</div>
					</div>
				)}
				{(this.props.bayAreaBestRestaurants.length === 0 || this.props.bayAreaHotRestaurants.length === 0) && (<div className="spinnerHolder"><i className="fas fa-spinner fa-spin"></i></div>)}
			</div>
		);
	}
}

class SearchResultPage extends React.Component {	
	
	render() {
		return (
			<div className="searchResult">
				<div className="filterPanel">
					<div className="filterSection">
						<div className="name">Features</div>
						<ul className="filterList">
							<li className={this.props.searchSetting.reservation ? "selected" : "deselected"} onClick={() => this.props.toggleFilterFeature("reservation")}><i className="far fa-calendar-alt"></i> Reservation</li>
							<li className={this.props.searchSetting.delivery ? "selected" : "deselected"} onClick={() => this.props.toggleFilterFeature("delivery")}><i className="fas fa-car-side"></i> Delivery</li>
							<li className={this.props.searchSetting.takeout ? "selected" : "deselected"} onClick={() => this.props.toggleFilterFeature("takeout")}><i className="fas fa-shopping-bag"></i> Takeout</li>
						</ul>
					</div>
					<div className="filterSection">
						<div className="name">Rating</div>
						<ul className="filterList">
							<li className={this.props.searchSetting.rating === 1 ? "selected" : "deselected"} onClick={() => this.props.handlePriceRatingChange("rating", 1)}>Any</li>
							<li className={this.props.searchSetting.rating === 2 ? "selected" : "deselected"} onClick={() => this.props.handlePriceRatingChange("rating", 2)}>2+</li>
							<li className={this.props.searchSetting.rating === 3 ? "selected" : "deselected"} onClick={() => this.props.handlePriceRatingChange("rating", 3)}>3+</li>
							<li className={this.props.searchSetting.rating === 4 ? "selected" : "deselected"} onClick={() => this.props.handlePriceRatingChange("rating", 4)}>4+</li>
							<li className={this.props.searchSetting.rating === 5 ? "selected" : "deselected"} onClick={() => this.props.handlePriceRatingChange("rating", 5)}>5 Only</li>
						</ul>
					</div>
					<div className="filterSection">
						<div className="name">Price</div>
						<ul className="filterList">
							<li className={this.props.searchSetting.price === 0 ? "selected" : "deselected"} onClick={() => this.props.handlePriceRatingChange("price", 0)}>Any</li>
							<li className={this.props.searchSetting.price === 1 ? "selected" : "deselected"} onClick={() => this.props.handlePriceRatingChange("price", 1)}>$</li>
							<li className={this.props.searchSetting.price === 2 ? "selected" : "deselected"} onClick={() => this.props.handlePriceRatingChange("price", 2)}>$$</li>
							<li className={this.props.searchSetting.price === 3 ? "selected" : "deselected"} onClick={() => this.props.handlePriceRatingChange("price", 3)}>$$$</li>
							<li className={this.props.searchSetting.price === 4 ? "selected" : "deselected"} onClick={() => this.props.handlePriceRatingChange("price", 4)}>$$$$</li>
						</ul>
					</div>
					<div className="applyHolder">
						<button onClick={() => this.props.searchRestaurants(false)}>Apply</button>
					</div>
				</div>
				<div className="searchList">
					<div className="sortingPanel">
						<div className="sortLabel">Sort By</div>
						<select value={this.props.searchSetting.sort} onChange={this.props.handleSorting} className="sortDropdown">
							<option value="best_match">Best Match</option>
							<option value="rating">Highest Rated</option>
							<option value="review_count">Most Reviewed</option>
						</select>
					</div>
					<ul className="restaurantHolder">
						{this.props.searching === false && (this.props.searchResult.map((v, i) => {
							return (
								<li className="restaurant" key={"business_" + i}>
									<div className="left">
										<img src={v["image_url"]}/>
										<div>
											<div className="name" onClick={() => this.props.getRestaurantDetails(v.id)}>{v.name}</div>
											<div className="review">{this.props.getStars(v.rating)} {v["review_count"]} reviews</div>
											<div>{v.categoryString}</div>
										</div>
									</div>
									<ul className="right">
										<li>{v.price}</li>
										<li className="iconHolder">{v.transactions.includes("restaurant_reservation") && (<i className="far fa-calendar-alt"></i>)}{v.transactions.includes("delivery") && (<i className="fas fa-car-side"></i>)}{v.transactions.includes("pickup") && (<i className="fas fa-shopping-bag"></i>)}</li>
									</ul>
								</li>
							)
						}))}
						{this.props.searchResult.length === 0 && this.props.searching === false && (<div className="searchErrorMessage">No restaurant found. Please try again.</div>)}
						{this.props.searching === true && (<div className="spinnerHolder"><i className="fas fa-spinner fa-spin"></i></div>)}
					</ul>
					
				</div>
			</div>
		);
	}
}

class RestaurantDetailsPage extends React.Component {

	render() {
		return (
			<div className="restaurantDetails">
				{this.props.loadingDetails === false && (
					<div className="topSection">
						<div className="info">
							<ul className="leftPart">
								<li className="name">{this.props.restaurantDetails.name}</li>
								<li className="review">{this.props.getStars(this.props.restaurantDetails.rating)} {this.props.restaurantDetails["review_count"]} reviews</li>
								<li>{this.props.restaurantDetails.categoryString}</li>
								<li className="addressPhone"><i className="fas fa-map-marker-alt"></i><div>{this.props.restaurantDetails.location["display_address"][0]}, {this.props.restaurantDetails.location["display_address"][1]}</div></li>
								{this.props.restaurantDetails.phone && (<li className="addressPhone"><i className="fas fa-phone"></i><div>{this.props.restaurantDetails.phone}</div></li>)}
							</ul>
							<ul className="centerPart">
								<li>{this.props.restaurantDetails.hours[0]["is_open_now"] ? (<span className="open">Open Now</span>) : (<span className="close">Closed Now</span>)}</li>
								<li>{this.props.restaurantDetails.price}</li>
								<li>
									<i className="far fa-calendar-alt"></i>&nbsp;Reservation&nbsp;<span className="answer">{this.props.restaurantDetails.transactions.includes("restaurant_reservation") ? "Yes" : "No"}</span>
								</li>
								<li>
									<i className="fas fa-car-side"></i>&nbsp;Delivery&nbsp;<span className="answer">{this.props.restaurantDetails.transactions.includes("delivery") ? "Yes" : "No"}</span>
								</li>
								<li>
									<i className="fas fa-shopping-bag"></i>&nbsp;Pickup&nbsp;<span className="answer">{this.props.restaurantDetails.transactions.includes("pickup") ? "Yes" : "No"}</span>
								</li>
							</ul>
							<ul className="rightPart">
								{this.props.restaurantDetails.hours[0].open.map((v, i) => {
									return (
										<li key={v.dayStr}>
											<div className="day">{v.dayStr}</div>
											<div>{v.timeStr}</div>
										</li>
									);
								})}
							</ul>
						</div>
						<div className="photos">
							{this.props.restaurantDetails.photos.map((v, i) => {
								return (
									<img src={v} key={"image" + i}/>
								);
							})}
						</div>
					</div>
				)}
				{this.props.restaurantReviews.length > 0 && (
					<div className="reviewSection">
						{this.props.restaurantReviews.map((review, i) => {
							return (
								<div className="review" key={"review" + i}>
									<div className="user">
										<img src={review.user["image_url"]}/>
										<ul className="userInfo">
											<li>{review.user.name}</li>
											<li>{this.props.getStars(review.rating)}</li>
										</ul>
									</div>
									<div className="reviewContent">{review.text}</div>
								</div>
							);
						})}
					</div>
				)}
				{this.props.restaurantReviews.length === 0 && (<div className="spinnerHolder"><i className="fas fa-spinner fa-spin"></i></div>)}
			</div>
		);
	}
}

class ProfilePage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {currentStage: "login", loginEmail: "", loginPassword: "", loggingIn: false, loginErrorMessage: "", signupEmail: "", signupPassword: "", signupFirstName: "", signupFamilyName: "", signingUp: false, showSignupEmailError: false, showSignupPasswordError: false, signupErrorMessage: "", forgotPasswordEmail: "", verificationCode: "", verifyingEmail: false, verifyEmailErrorMessage: "", successfulResendCodeMessage: false, failureResendCodeMessage: "", resetPasswordEmailError: "", newPasswordErrorMessage: "", details: {email: "", firstname: "", lastName: ""}, loadingDetails: false};
	}
	
	handleLoginEmail = (event) => {
		this.setState({loginEmail: event.target.value});
	}
	
	handleLoginPassword = (event) => {
		this.setState({loginPassword: event.target.value});
	}
	
	handleSignupEmail = (event) => {
		this.setState({signupEmail: event.target.value});
	}
	
	handleSignupPassword = (event) => {
		this.setState({signupPassword: event.target.value});
	}
	
	handleSignupGivenName = (event) => {
		this.setState({signupGivenName: event.target.value});
	}
	
	handleSignupFamilyName = (event) => {
		this.setState({signupFamilyName: event.target.value});
	}
	
	changeStage = (stage) => {
		this.setState({currentStage: stage});
	}
	
	login = () => {
		if (this.state.loginEmail !== "" && this.state.loginPassword !== "") {
			this.setState({loginErrorMessage: "", loggingIn: true, currentStage: "login"});
			let self = this;
			let authenticationData = {
     		   	Username : this.state.loginEmail,
     		   	Password : this.state.loginPassword
    		};
    		let authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
    		let poolData = {
     	  		UserPoolId : 'us-west-2_lKuq4wYJ9',
    			ClientId : '4jkka6bjqjok6507qo8bbmktot'
			};
    		let userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    		let userData = {
    		    Username : this.state.loginEmail,
    		    Pool : userPool
    		};
    		let cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    		cognitoUser.authenticateUser(authenticationDetails, {
    	    	onSuccess: function (result) {
     	  	 		let accessToken = result.getAccessToken().getJwtToken();
     	  	 		sessionStorage.setItem("token", accessToken);
    	   	 		self.setState({currentStage: "details", loginPassword: "", loginEmail: "", loggingIn: false, loadingDetails: true}, () => {
    	   	 			cognitoUser.getUserAttributes(function(err, result) {
    	   	 				self.setState({loadingDetails: false});
        					if (err) {
        					    console.log(err.message || JSON.stringify(err));
      						      return;
      						 }
      						 if (result) {
      						 	let details = {};
      						  	result.forEach(item => {
      						  		if (item.getName() === "given_name") {
      						  			details.firstName = item.getValue();
      						  		} else if (item.getName() === "family_name") {
      						  			details.lastName = item.getValue();
      						  		} else if (item.getName() === "email") {
      						  			details.email = item.getValue();
      						  		}
      						  	});
      						  	self.setState({details: details});
      						 }
    					});
    	   	 		});
    	   	 		
    	    	},
 
      	  	onFailure: function(err) {
      	  		console.log("login error");
     	     	  	console.log(err);
     	     	  	if (err.message === "User is not confirmed.") {
     	     	  		self.setState({currentStage: "unconfirmed", loginPassword: "", loggingIn: false});
      	    	  	} else {
        	  	  		self.setState({loginErrorMessage: err.message, loggingIn: false});
       	   	  		}
       	 		}
    		});
		}
	}
	
	signup = () => {
		this.setState({signupErrorMessage: ""});
		let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
		let emailRegExp = new RegExp(emailPattern);
		let passwordRegExp = new RegExp(passwordPattern);
		let emailTestResult = emailRegExp.test(this.state.signupEmail);
		let passwordTestResult = passwordRegExp.test(this.state.signupPassword);
		if (emailTestResult) {
			this.setState({showSignupEmailError: false});
		} else {
			this.setState({showSignupEmailError: true});
		}
		if (passwordTestResult) {
			this.setState({showSignupPasswordError: false});
		} else {
			this.setState({showSignupPasswordError: true});
		}
		if (emailTestResult && passwordTestResult && this.state.signupGivenName !== "" && this.state.signupFamilyName !== "") {
			this.setState({signingUp: true});
			let poolData = {
       			UserPoolId : 'us-west-2_lKuq4wYJ9',
    			ClientId : '4jkka6bjqjok6507qo8bbmktot'
			};
 			let userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
			let attributeList = [];
 			let dataFamilyName = {
     			Name : 'family_name',
    			Value : this.state.signupFamilyName
			};
    		
			let dataGivenName = {
     	  		Name : 'given_name',
    	   		Value : this.state.signupGivenName
			};
    	
    		let attributeFamilyName = new AmazonCognitoIdentity.CognitoUserAttribute(dataFamilyName);
    		var attributeGivenName = new AmazonCognitoIdentity.CognitoUserAttribute(dataGivenName);
			attributeList.push(attributeFamilyName);
			attributeList.push(attributeGivenName);
			this.setState({signingUp: true});
			
			userPool.signUp(this.state.signupEmail, this.state.signupPassword, attributeList, null, (err, result) => {
     	  		if (result) {
     	  			this.setState({currentStage: "confirmation", signupPassword: "", signupFirstName: "", signupFamilyName: "", signingUp: false});
     	  		}
     	 		if (err) {
     	 			this.setState({signupErrorMessage: err.message, signingUp: false});
      		    	console.log(err.message || JSON.stringify(err));
      		    	return;
     			}
    		});
    	}
	}
	
	handleForgotPasswordEmail = (event) => {
		this.setState({forgotPasswordEmail: event.target.value});
	}
	
	resetPassword = () => {
		let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		let emailRegExp = new RegExp(emailPattern);
		let emailTestResult = emailRegExp.test(this.state.forgotPasswordEmail);
		if (emailTestResult) {
			this.setState({resetPasswordEmailError: ""});
		} else {
			this.setState({resetPasswordEmailError: "Invalid email"});
		}
		if (emailTestResult) {
			let self = this;
			let poolData = {
        		UserPoolId : 'us-west-2_lKuq4wYJ9',
        		ClientId : '4jkka6bjqjok6507qo8bbmktot'
    		};

    		let userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    		var userData = {
       		 	Username : this.state.forgotPasswordEmail,
       			Pool : userPool
    		};

    		var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
			cognitoUser.forgotPassword({
        		onSuccess: function (data) {
	          		console.log('reset password');
	          		console.log(data);
	          		self.setState({currentStage: "confirmPassword"});
        		},
        		onFailure: function(err) {
            		console.log(err.message || JSON.stringify(err));
            		self.setState({resetPasswordEmailError: err.message});
        		},   
    		});
		}
	}
	
	handleVerificationCode = (event) => {
		this.setState({verificationCode: event.target.value});
	}
	
	resendCode = () => {
		let self = this;
		this.setState({failureResendCodeMessage: "", successfulResendCodeMessage: false});
		let poolData = {
        	UserPoolId : 'us-west-2_lKuq4wYJ9',
        	ClientId : '4jkka6bjqjok6507qo8bbmktot'
    	};

    	let userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    	var userData = {
       	 	Username : this.state.signupEmail || this.state.loginEmail,
       			Pool : userPool
    	};

    	var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
		cognitoUser.resendConfirmationCode(function(err, result) {
			if (result) {
				self.setState({successfulResendCodeMessage: true});
			}
       		if (err) {
       			self.setState({failureResendCodeMessage: err.message});
       	    	console.log(err.message || JSON.stringify(err));
       	    	return;
      	 	}
    	});
	}
	
	afterSubmission = (event) => {
		event.preventDefault();
	}
	
	verifyAccount = () => {
		this.setState({verifyEmailErrorMessage: ""});
		if (this.state.verificationCode !== "") {
			let self = this;
			this.setState({verifyingEmail: true});
			let poolData = {
        		UserPoolId : 'us-west-2_lKuq4wYJ9',
        		ClientId : '4jkka6bjqjok6507qo8bbmktot'
    		};

    		let userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    		var userData = {
       	 		Username : this.state.signupEmail || this.state.loginEmail,
       	 		Pool : userPool
    		};

    		var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    		cognitoUser.confirmRegistration(this.state.verificationCode, true, (err, result) => {
    			self.setState({verifyingEmail: false, });
    			if (result) {
    				self.setState({currentStage: "confirmed", signupEmail: "", signupPassword: "", signupFirstName: "", signupFamilyName: "", loginEmail: "", loginPassword: "", verificationCode: "", verifyingEmail: false});
    			}
       	 		if (err) {
       	 			self.setState({verifyEmailErrorMessage: err.message, verifyingEmail: false});
       	  		   console.log(err.message || JSON.stringify(err));
       	  		   return;
        		}
    		});
		}
	}
	
	handleNewPassword = (event) => {
		this.setState({newPassword: event.target.value});
	}
	
	logout = () => {
		let poolData = {
        	UserPoolId : 'us-west-2_lKuq4wYJ9',
        	ClientId : '4jkka6bjqjok6507qo8bbmktot'
    	};
   		let userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
  	  	let cognitoUser = userPool.getCurrentUser();
		cognitoUser.signOut();
		this.setState({currentStage: "login", details: null});
	}
	
	setNewPassword = () => {
		this.setState({newPasswordErrorMessage: ""});
		let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
		let passwordRegExp = new RegExp(passwordPattern);
		let passwordTestResult = passwordRegExp.test(this.state.newPassword);
		if (passwordTestResult) {
			this.setState({newPasswordErrorMessage: ""});
		} else {
			this.setState({newPasswordErrorMessage: "Weak Password. Please follow guideline to improve your password"});
		}
		if (this.state.verificationCode !== "" && passwordTestResult) {	
			let self = this;
			this.setState({verifyingEmail: true});
			let poolData = {
        		UserPoolId : 'us-west-2_lKuq4wYJ9',
        		ClientId : '4jkka6bjqjok6507qo8bbmktot'
    		};

    		let userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    		var userData = {
       	 		Username : this.state.forgotPasswordEmail,
       	 		Pool : userPool
    		};

    		var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    		cognitoUser.confirmPassword(this.state.verificationCode, this.state.newPassword, {
                onSuccess() {
                    self.setState({currentStage: "newPasswordSet", newPassword: "", verificationCode: ""});
                },
                onFailure(err) {
                    self.setState({newPasswordErrorMessage: err.message});
                }
            });
		}
	}
	
	componentDidMount () {
		let poolData = {
        	UserPoolId : 'us-west-2_lKuq4wYJ9',
        	ClientId : '4jkka6bjqjok6507qo8bbmktot'
    	};
   		let userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
  	  	let cognitoUser = userPool.getCurrentUser();
		let self = this;
  	  	if (cognitoUser != null) {
       		 cognitoUser.getSession(function(err, session) {
         	 	if (err) {
         	        console.log(err.message || JSON.stringify(err));
        	    	return;
        	    }
        	    
        	    if (session) {
        	    	self.setState({currentStage: "details", loadingDetails: true});
        	    	cognitoUser.getUserAttributes(function(attributesError, result) {
        	    		self.setState({loadingDetails: false});
                		if (attributesError) {
                    		console.log(attributesError);
                		} 
                		if (result) {
      						let details = {};
      						console.log(result);
      						result.forEach(item => {
      							if (item.getName() === "given_name") {
      							  	details.firstName = item.getValue();
      							} else if (item.getName() === "family_name") {
      							  	details.lastName = item.getValue();
      							} else if (item.getName() === "email") {
      							  	details.email = item.getValue();
      							}
      						});
      						self.setState({details: details});
      					}
      				});
        	    } 	
        	    
        	});
    	}
	}
	
	render() {
		return (
			<div className="profilePage">
				{(this.state.currentStage === "login" || this.state.currentStage === "confirmed" || this.state.currentStage === "newPasswordSet") && (
					<form onSubmit = {this.afterSubmission} className="profileForm">
						<div className="stageTitle">Log In</div>
						<div><input type="email" className="profileInput" placeholder="Email" onChange={this.handleLoginEmail} value={this.state.loginEmail} required/></div>
						<div><input type="password" className="profileInput" placeholder="Password" onChange={this.handleLoginPassword} value={this.state.loginPassword} required/></div>
						{this.state.currentStage === "confirmed" && (<div className="profileVerifiedMessage">Successfully verify email!</div>)}
						{this.state.currentStage === "newPasswordSet" && (<div className="profileVerifiedMessage">Successfully change password!</div>)}
						{this.state.loginErrorMessage.length > 0 && (
							<div className="profileErrorMessage">{this.state.loginErrorMessage}</div>
						)}
						<div className="profileLinkHolder"><div className="profileLink" onClick={() => this.changeStage("forgot")}>Forgot password?</div></div>
						<button onClick={this.login} type="submit" className="profileButton">{this.state.loggingIn ? (<i className="fas fa-spinner fa-spin"></i>) : ("Log In")}</button>
						<div className="profileLinkHolder">
							<div>New user? <span onClick={() => this.changeStage("signup")} className="profileLink">Sign Up</span></div>
						</div>
					</form>
				)}
				{this.state.currentStage === "signup" && (
					<form onSubmit = {this.afterSubmission} className="profileForm">
						<div className="stageTitle">Sign Up</div>
						<div><input type="text" className="profileInput" placeholder="First Name" onChange={this.handleSignupGivenName} value={this.state.signupGivenName} required/></div>
						<div><input type="text" className="profileInput" placeholder="Last Name" onChange={this.handleSignupFamilyName} value={this.state.signupFamilyName} required/></div>
						<div><input type="email" className="profileInput" placeholder="Email" onChange={this.handleSignupEmail} value={this.state.signupEmail} required/></div>
						<div><input type="password" className="profileInput" placeholder="Password" onChange={this.handleSignupPassword} value={this.state.signupPassword} required/></div>
						{this.state.signupErrorMessage.length > 0 && (
							<div className="profileErrorMessage">{this.state.signupErrorMessage}</div>
						)}
						{this.state.showSignupEmailError && (
							<div className="profileErrorMessage">Invalid Email</div>
						)}
						{this.state.showSignupPasswordError && (
							<div className="profileErrorMessage">Weak password. Please follow password guideline to improve password.</div>
						)}
						<div className="instruction">
							<div>Password must have</div>
							<ul>
								<li>At least 8 characters</li>
								<li>At least 1 lowercase alphabetical character</li>
								<li>At least 1 uppercase alphabetical character</li>
								<li>At least 1 numeric character</li>
								<li>At least 1 special character</li>
							</ul>	
						</div>
						<button onClick={this.signup} type="submit" className="profileButton">{this.state.signingUp ? (<i className="fas fa-spinner fa-spin"></i>) : ("Sign Up")}</button>
						<div className="profileLinkHolder">Already have account?&nbsp;<span onClick={() => this.changeStage("login")} className="profileLink">Log in</span></div>	
					</form>
				)}
				{(this.state.currentStage === "confirmation" || this.state.currentStage === "unconfirmed") && (
					<form onSubmit = {this.afterSubmission} className="profileForm">
						<div className="stageTitle">Email Verification</div>
						<div className="instruction">{this.state.currentStage === "unconfirmed" && (<span>Failed to log in because this email was not confirmed. </span>)}Please check your email and enter the verification code to verify account {this.state.signupEmail || this.state.loginEmail}.</div>
						<div><input type="text" className="profileInput" placeholder="Verification Code" onChange={this.handleVerificationCode} value={this.state.verificationCode} required/></div>
						{this.state.successfulResendCodeMessage && (<div className="profileVerifiedMessage">Successfully resend code!</div>)}
						{this.state.failureResendCodeMessage.length > 0 && (
							<div className="profileErrorMessage">{this.state.failureResendCodeMessage}</div>
						)}
						{this.state.verifyEmailErrorMessage.length > 0 && (
							<div className="profileErrorMessage">{this.state.verifyEmailErrorMessage}</div>
						)}
						<button onClick={this.verifyAccount} type="submit" className="profileButton">{this.state.verifyingEmail ? (<i className="fas fa-spinner fa-spin"></i>) : ("Verify Email")}</button>
						<div className="profileLinkHolder">Did not get code?&nbsp;<span onClick={this.resendCode} className="profileLink">Resend code</span>.</div>
					</form>
				)}
				{this.state.currentStage === "forgot" && (
					<form className="profileForm" onSubmit = {this.afterSubmission}>
						<div className="stageTitle">Forgot Password</div>
						<div className="instruction">Please enter your email address and I will send you an email about how to reset your password.</div>
						<input type="email" placeholder="Email" onChange={this.handleForgotPasswordEmail} value={this.state.forgotPasswordEmail} required className="profileInput"/>
						{this.state.resetPasswordEmailError.length > 0 && (
							<div className="profileErrorMessage">{this.state.resetPasswordEmailError}</div>
						)}
						<button onClick={this.resetPassword} type="submit" className="profileButton">Reset Password</button>
						<div className="profileLinkHolder">Back to&nbsp;<span onClick={() => this.changeStage("login")} className="profileLink">Login</span></div>
					</form>
				)}
				{this.state.currentStage === "confirmPassword" && (
					<form className="profileForm" onSubmit = {this.afterSubmission}>
						<div className="stageTitle">Set New Password</div>
						<div className="instruction">Please check your email for verification code.</div>
						<div><input type="text" className="profileInput" placeholder="Verification Code" onChange={this.handleVerificationCode} value={this.state.verificationCode} required/></div>
						<div><input type="password" className="profileInput" placeholder="New Password" onChange={this.handleNewPassword} value={this.state.newPassword} required/></div>
						<div className="instruction">
							<div>Password must have</div>
							<ul>
								<li>At least 8 characters</li>
								<li>At least 1 lowercase alphabetical character</li>
								<li>At least 1 uppercase alphabetical character</li>
								<li>At least 1 numeric character</li>
								<li>At least 1 special character</li>
							</ul>	
						</div>
						{this.state.newPasswordErrorMessage.length > 0 && (
							<div className="profileErrorMessage">{this.state.newPasswordErrorMessage}</div>
						)}
						<button onClick={this.setNewPassword} type="submit" className="profileButton">Set New Password</button>
						<div className="profileLinkHolder">Back to&nbsp;<span onClick={() => this.changeStage("login")} className="profileLink">Login</span></div>
					</form>
				)}
				{this.state.currentStage === "details" && this.state.loadingDetails === false && (
					<div className="detailsForm">
						<div className="stageTitle">Profile</div>
						<div className="detailsHolder"><span className="detailsLabel">Email:</span> {this.state.details.email}</div>
						<div className="detailsHolder"><span className="detailsLabel">First Name:</span> {this.state.details.firstName}</div>
						<div className="detailsHolder"><span className="detailsLabel">Last Name:</span> {this.state.details.lastName}</div>
						<button onClick={this.logout} className="profileButton">Log Out</button>
					</div>
				)}
				{this.state.currentStage === "details" && this.state.loadingDetails === true && (<div className="spinnerHolder"><i className="fas fa-spinner fa-spin"></i></div>)}
			</div>
		);
	}
}

class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {currentPage: "home", restaurantAutoCompleteItems: [], restaurantSearchField: "", locationAutoCompleteItems: [], locationSearchField: "", currentLocation: {}, searching: false, searchResult: [], searchSetting: {term: "", location: "", reservation: false, delivery: false, takeout: false, rating: 1, price: 0, sort: "best_match"}, loadingDetails: false, restaurantDetails: {}, restaurantReviews: [], bayAreaHotRestaurants: [], bayAreaBestRestaurants: [], currentCityBestRestaurants: [], currentCityHotRestaurants: []};
	}
	
	handleRestaurantAutoComplete = (event) => {
		this.setState({restaurantSearchField: event.target.value});
		let tempParam;
		if (this.state.currentLocation.latitude) {
			tempParam = {text: event.target.value, latitude: this.state.currentLocation.latitude, longitude: this.state.currentLocation.longitude};
		} else {
			tempParam = {text: event.target.value};
		}
		axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/autocomplete', {headers: {Authorization: 'Bearer 41SGxTBx5354alav7mdzMsbwoX0HYuA-llpye8Xx3vD94L5YcSYkv0WGEEfngtcgBsRZsE_yRGdvO0EWR0_-rfhR7UuUbzVjNb0pWM132lmvdMcFzaZa-K_Nz7X3WXYx'}, params: tempParam}).then((res) =>
		{	
			let restaurantItems = [];
			res.data.businesses.forEach((business) => {
				restaurantItems.push(business.name);
			});
			res.data.terms.forEach((term) => {
				restaurantItems.push(term.text);
			});
			this.setState({restaurantAutoCompleteItems: restaurantItems});
			this.setState({restaurantAutoCompleteShow: true});
		}).catch((err) => {
			console.log(err);
			this.setState({restaurantAutoCompleteItems: []});
			this.setState({restaurantAutoCompleteShow: false});
		})
	}
	
	handleLocationAutoComplete = (event) => {
		this.setState({locationSearchField: event.target.value});
		axios.get('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + event.target.value + '&types=(cities)&components=country:us&key=AIzaSyD80XiICNx0KtiVyK-n431A1EenEU3gdCw').then((res) =>
		{	
			let locationItems = [];
			res.data.predictions.forEach((prediction) => {
				locationItems.push(prediction.terms[0].value + ', ' + prediction.terms[1].value);
			});
			this.setState({locationAutoCompleteItems: locationItems});
			this.setState({locationAutoCompleteShow: true});
		}).catch((err) => {
			console.log(err);
			this.setState({locationAutoCompleteItems: []});
			this.setState({locationAutoCompleteShow: false});
		})
	}
	
	setSearchField = (searchFieldName, event) => {
		if (searchFieldName === "restaurant") {
			this.setState({restaurantSearchField: event.target.textContent});
			this.setState({restaurantAutoCompleteItems: []});
		} else if (searchFieldName === "location") {
			this.setState({locationSearchField: event.target.textContent});
			this.setState({locationAutoCompleteItems: []});
		}
	}
	
	searchRestaurants = (fromSearchField) => {
		if ((fromSearchField && this.state.locationSearchField !== "" && this.state.restaurantSearchField !== "") || !fromSearchField) {
			let bearer;
			let searchParams = {categories: 'food,restaurants', limit: "50"};
			if (fromSearchField) {
				bearer = "41SGxTBx5354alav7mdzMsbwoX0HYuA-llpye8Xx3vD94L5YcSYkv0WGEEfngtcgBsRZsE_yRGdvO0EWR0_-rfhR7UuUbzVjNb0pWM132lmvdMcFzaZa-K_Nz7X3WXYx";
			} else {
				bearer = "USzCLHTDQTXTmYOzJlPcpBt0J4H0RIQ_WlsxVsujyC3VHWxAlq6m9orefglZvYT8fGGhwJXXr1nNQ3oHFHsMtX5yqpD7GLahDWNbRLgk3hp4FpC_0MneEEcP135MXXYx";
			}
			this.setState({restaurantAutoCompleteItems: []});
			this.setState({locationAutoCompleteItems: []});
			if (this.state.currentPage !== "search") {
				this.setState({currentPage: "search"});
			}
			this.setState({searching: true});
			
			if (fromSearchField) {
				searchParams.location = this.state.locationSearchField;
				searchParams.term = this.state.restaurantSearchField;
				let tempSearchSetting = {...this.state.searchSetting};
				tempSearchSetting.location = this.state.locationSearchField;
				tempSearchSetting.term = this.state.restaurantSearchField;
				tempSearchSetting.reservation = false;
				tempSearchSetting.delivery = false;
				tempSearchSetting.takeout = false;
				tempSearchSetting.price = 0;
				tempSearchSetting.rating = 1;
				tempSearchSetting.sort = "best_match";
				this.setState({searchSetting: tempSearchSetting});
			} else {
				searchParams.location = this.state.searchSetting.location;
				searchParams.term = this.state.searchSetting.term;
				if (this.state.searchSetting.price !== 0) {
					searchParams.price = this.state.searchSetting.price;
				}
				searchParams["sort_by"] = this.state.searchSetting.sort;
			}
			
			axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search', {headers: {Authorization: 'Bearer ' + bearer}, params: searchParams}).then((res) =>
			{	
				this.setState({searching: false});
				let result = res.data.businesses;
				result = result.filter(business => business.rating >= this.state.searchSetting.rating);
				if (this.state.searchSetting.reservation) {
					result = result.filter(business => business.transactions.includes("restaurant_reservation"));
				}
				if (this.state.searchSetting.delivery) {
					result = result.filter(business => business.transactions.includes("delivery"));
				}
				if (this.state.searchSetting.takeout) {
					result = result.filter(business => business.transactions.includes("pickup"));
				}
				result.forEach(restaurant => {
					let categoryString = restaurant.categories[0].title;
					for (let i = 1; i < restaurant.categories.length; i++) {
						categoryString += ", " + restaurant.categories[i].title; 
					}
					restaurant.categoryString = categoryString;
					
				})
				
				this.setState({searchResult: result});
			}).catch((err) => {
				console.log(err);
				this.setState({searching: false});
			})
		}
	}
	
	handleAutoCompleteBlur = (name, event) => {
		if (name === "restaurant") {
			setTimeout(() => this.setState({restaurantAutoCompleteItems: []}) , 500);
		} else if (name === "location") {
			setTimeout(() => this.setState({locationAutoCompleteItems: []}) , 500);
		}
	}
	
	handleSorting = (event) => {
		let tempSearchSetting = {...this.state.searchSetting};
		tempSearchSetting.sort = event.target.value;
		this.setState({searchSetting: tempSearchSetting}, () => this.searchRestaurants(false));
		
	}
	
	toggleFilterFeature = (name) => {
		if (this.state.searchSetting.hasOwnProperty(name)) {
			let tempSearchSetting = {...this.state.searchSetting};
			tempSearchSetting[name] = !tempSearchSetting[name];
			this.setState({searchSetting: tempSearchSetting});
		}
	}
	
	handlePriceRatingChange = (type, value) => {
		let tempSearchSetting = {...this.state.searchSetting};
		if (type === "rating") {
			tempSearchSetting.rating = value;
		} else if (type === "price") {
			tempSearchSetting.price = value;
		}
		this.setState({searchSetting: tempSearchSetting});
	}
	
	changePage = (page) => {
		this.setState({currentPage: page});
	}
	
	getRestaurantDetails= (id) => {
		this.setState({loadingDetails: true});
		this.setState({currentPage: "details"});
			
		axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/' + id, {headers: {Authorization: 'Bearer Qte-yvxrkHEkuvVm_iDtig3yyiSKbbwwPDPEVzhBetIkTyCNgKPuYZRKVQYjxB7xkkQIHpacEHHhvUcLRVievb2SwoOPFvsWi43ng7deVIGubYhFldDqaPQSkCdPXXYx'}, params: {location: this.state.locationSearchField, categories: 'food,restaurants', limit: 50, term: this.state.restaurantSearchField}}).then((res) =>
		{	
			let result = res.data;
			result.categoryString = result.categories[0].title;
			for (let i = 1; i < result.categories.length; i++) {
				result.categoryString += ", " + result.categories[i].title; 
			}
			result.hours[0].open.forEach((day, index) => {
				let startHour = parseInt(day.start.substr(0, 2));
				day.startHour = startHour;
				let startMinute = parseInt(day.start.substr(2, 2));
				let endHour = parseInt(day.end.substr(0, 2));
				let endMinute = parseInt(day.end.substr(2, 2));
				let startStr, endStr;
				if (startHour > 12 || (startHour === 12 && startMinute > 0)) {
					startStr = ("0" + (startHour - 12)).slice(-2) + ":" + ("0" +  startMinute).slice(-2) + " pm";
				} else {
					startStr = ("0" + startHour).slice(-2) + ":" + ("0" + startMinute).slice(-2) + " am";
				}
				if (endHour > 12 || (endHour === 12 && endMinute > 0)) {
					endStr = ("0" + (endHour - 12)).slice(-2) + ":" + ("0" +  endMinute).slice(-2) + " pm";
				} else {
					endStr = ("0" + endHour).slice(-2) + ":" + ("0" + endMinute).slice(-2) + " am";
				}
				day.timeStr = startStr + " - " + endStr;
				day.dayStr = this.getDay(day.day)
			});
			
			
			
			
			for (let i = 1; i < result.hours[0].open.length; i++) {
				if (result.hours[0].open[i].day === result.hours[0].open[i-1].day) {
					result.hours[0].open[i].dayStr = "";
				}
			}
			
			this.setState({restaurantDetails: result}, () => this.setState({loadingDetails: false}));
		}).catch((err) => {
			this.setState({loadingDetails: false});
			console.log(err);
			
		})
		
		axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/' + id + '/reviews', {headers: {Authorization: 'Bearer _HGfbnU75QUjx3jCXVggC0QyRWZ_aQ7wyk0gBvYi7phUpXPYgZO_yZvftDOV-vNw0uRBQouDAo3CCnbdHbG0yC1IRwAvvBSV-omnr_UHfp-jmRQUwcaq2d_jTCRPXXYx'}, params: {location: this.state.locationSearchField, categories: 'food,restaurants', limit: 50, term: this.state.restaurantSearchField}}).then((res) =>
		{	
			this.setState({restaurantReviews: res.data.reviews});
		}).catch((err) => {
			console.log(err);
			
		})
	}
	
	getStars = (rating) => {
		let stars = [];
		let emptyStar = Math.floor(5 - rating);
		let solidStar = Math.floor(rating);
		let halfStar = rating > Math.floor(rating) ? true : false;
		for (let i = 0; i < solidStar; i++) {
			stars.push(<i className="fas fa-star" key={"solid" + i}></i>);
		}
		if (halfStar) {
			stars.push(<i className="fas fa-star-half-alt" key={"middleStar"}></i>);
		}
		for (let i = 0; i < emptyStar; i++) {
			stars.push(<i className="far fa-star" key={"empty" + i}></i>);
		}
		return stars;
	}
	
	getDay = (dayNum) => {
		let result
		if (dayNum === 0) {
			result = "Monday";
		} else if (dayNum === 1) {
			result = "Tuesday";
		} else if (dayNum === 2) {
			result = "Wednesday";
		} else if (dayNum === 3) {
			result = "Thursday";
		} else if (dayNum === 4) {
			result = "Friday";
		} else if (dayNum === 5) {
			result = "Saturday";
		} else if (dayNum === 6) {
			result = "Sunday";
		}
		return result;
	}
	
	searchHomePage = (location, searchType) => {
		let bearer;
		let searchParams = {categories: 'food,restaurants', limit: "5"};			
		searchParams.location = location;
		if (searchType === "best") {
			searchParams["sort_by"] = "review_count";
			bearer = "41SGxTBx5354alav7mdzMsbwoX0HYuA-llpye8Xx3vD94L5YcSYkv0WGEEfngtcgBsRZsE_yRGdvO0EWR0_-rfhR7UuUbzVjNb0pWM132lmvdMcFzaZa-K_Nz7X3WXYx";
		} else if (searchType === "hot") {
			searchParams.attributes = "hot_and_new";
			bearer = "USzCLHTDQTXTmYOzJlPcpBt0J4H0RIQ_WlsxVsujyC3VHWxAlq6m9orefglZvYT8fGGhwJXXr1nNQ3oHFHsMtX5yqpD7GLahDWNbRLgk3hp4FpC_0MneEEcP135MXXYx";
		}
			
		axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search', {headers: {Authorization: 'Bearer ' + bearer}, params: searchParams}).then((res) =>
		{	
			let result = res.data.businesses;		
			result.forEach(restaurant => {
				let categoryString = restaurant.categories[0].title;
				for (let i = 1; i < restaurant.categories.length; i++) {
					categoryString += ", " + restaurant.categories[i].title; 
				}
				restaurant.categoryString = categoryString;	
			});
			if (location === "bay area" && searchType === "best") {
				this.setState({bayAreaBestRestaurants: result});
			} else if (location === "bay area" && searchType === "hot") {
				this.setState({bayAreaHotRestaurants: result});
			} else if (location !== "bay area" && searchType === "best") {
				this.setState({currentCityBestRestaurants: result});
			} else if (location !== "bay area" && searchType === "hot") {
				this.setState({currentCityHotRestaurants: result});
			}
		}).catch((err) => {
			console.log(err);
		})
	}
	
	componentDidMount () {
		this.searchHomePage("bay area", "best");
		this.searchHomePage("bay area", "hot");
		if (navigator.geolocation) {
			console.log("geolocation");
    		navigator.geolocation.getCurrentPosition((position) => {
    			axios.get('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + '%2C' + position.coords.longitude + '&key=AIzaSyD80XiICNx0KtiVyK-n431A1EenEU3gdCw').then((res) =>
				{	
					console.log(res);
					let city, zip, state, stateShort;
					res.data.results[4]["address_components"].forEach((component) => {
						component.types.forEach((type) => {
							if (type === "postal_code") {
								zip = component["long_name"];
							} else if (type === "locality") {
								city = component["long_name"];
							} else if (type === "administrative_area_level_1") {
								state = component["long_name"];
								stateShort = component["short_name"];
							}
						});
					});
					this.setState({currentLocation: {city: city, zip: zip, state: state, stateShort: stateShort, latitude: position.coords.latitude, longitude: position.coords.longitude}});
					this.setState({locationSearchField: city + "," + stateShort})
					this.searchHomePage(city + "," + stateShort, "hot");
					this.searchHomePage(city + "," + stateShort, "best");
				}).catch((err) => {
					console.log(err);
				})	
    		})
  		}
	}

  render() {
  	let content;
  	if (this.state.currentPage === "home") {
  		content = <HomePage getStars={this.getStars} bayAreaBestRestaurants={this.state.bayAreaBestRestaurants} bayAreaHotRestaurants={this.state.bayAreaHotRestaurants} currentCityBestRestaurants={this.state.currentCityBestRestaurants} currentCityHotRestaurants={this.state.currentCityHotRestaurants} currentLocation={this.state.currentLocation} getRestaurantDetails={this.getRestaurantDetails}/>
  	} else if (this.state.currentPage === "search") {
  		content = <SearchResultPage searchSetting={this.state.searchSetting} handleSorting={this.handleSorting} toggleFilterFeature={this.toggleFilterFeature} handlePriceRatingChange={this.handlePriceRatingChange} searchRestaurants={this.searchRestaurants} searchResult={this.state.searchResult} searching={this.state.searching} getRestaurantDetails={this.getRestaurantDetails} getStars={this.getStars}/>
  	} else if (this.state.currentPage === "details") {
  		content = <RestaurantDetailsPage getStars={this.getStars} restaurantDetails={this.state.restaurantDetails} restaurantReviews={this.state.restaurantReviews} loadingDetails={this.state.loadingDetails}/>
  	} else if (this.state.currentPage === "profile") {
  		content = <ProfilePage isUserAuthenticated={this.state.isUserAuthenticated}/>
  	}
  	return (
  		<div className="main">
  			
  			<div className="upperSection">
  				<ul className="searchBar">
  					<li onBlur={(event) => this.handleAutoCompleteBlur("restaurant", event)}>
  						<div className="holder"><i className="fas fa-search fieldIcon"></i><input type="text" placeholder="Find restaurant, pizza, Korean" onChange={this.handleRestaurantAutoComplete} value={this.state.restaurantSearchField}/></div>
  						{this.state.restaurantAutoCompleteItems.length > 0 && (
  							<div className="autoCompleteItems">
								{this.state.restaurantAutoCompleteItems.map((v, i) => {
									return (
										<div key={"restaurantSuggestion" + i} className="item" onClick={(event) => this.setSearchField("restaurant", event)}>{v}</div>
									)
								})}
  							</div>
  						)}
  					</li>
  					<li onBlur={(event) => this.handleAutoCompleteBlur("location", event)}>
  						<div className="holder"><i className="fas fa-map-marker-alt fieldIcon"></i><input type="text" placeholder="Near city, county" onChange={this.handleLocationAutoComplete} value={this.state.locationSearchField}/></div>
  						{this.state.locationAutoCompleteItems.length > 0 && (
  							<div className="autoCompleteItems">
								{this.state.locationAutoCompleteItems.map((v, i) => {
									return (
										<div key={"locationSuggestion" + i} className="item" onClick={(event) => this.setSearchField("location", event)}>{v}</div>
									)
								})}
  							</div>
  						)}
  					</li>
  					<li onClick={() => this.searchRestaurants(true)} className="searchButton">{this.state.searching ? (<i className="fas fa-spinner fa-spin"></i>) : (<i className="fas fa-chevron-right"></i>)}</li>
  				</ul>
  				<ul className="navBar">
  					<li onClick={() => this.changePage("home")}>Home</li>
  					<li>|</li>
  					<li onClick={() => this.changePage("profile")}>Profile</li>
  					{this.state.currentLocation.city && <li>|</li>}
  					{this.state.currentLocation.city && <li><i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;{this.state.currentLocation.city}, {this.state.currentLocation.stateShort}</li>}
  				</ul>
  			</div>
  			<div className="contentSection">
  				{content}
  				<div className="credit">Designed and developed by <a className="about" href="https://www.linkedin.com/in/au-nguyen-29040528" target="_blank">Au Nguyen</a></div>
  			</div>
  		</div>
  	);
  }
}

export default App;
