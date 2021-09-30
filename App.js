var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import './App.css';
import axios from 'axios';
import * as AmazonCognitoIdentity from "amazon-cognito-identity-js";

var HomePage = function (_React$Component) {
	_inherits(HomePage, _React$Component);

	function HomePage() {
		_classCallCheck(this, HomePage);

		return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
	}

	_createClass(HomePage, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return React.createElement(
				'div',
				{ className: 'homePage' },
				this.props.currentCityBestRestaurants.length > 0 && this.props.currentCityHotRestaurants.length > 0 && React.createElement(
					'div',
					{ className: 'homeSection currentCity' },
					React.createElement(
						'div',
						{ className: 'homeSubSection' },
						React.createElement(
							'div',
							{ className: 'subSectionTitle' },
							this.props.currentLocation.city,
							'\'s Most Popular'
						),
						React.createElement(
							'ul',
							{ className: 'restaurantHolder' },
							this.props.currentCityBestRestaurants.map(function (v, i) {
								return React.createElement(
									'li',
									{ className: 'restaurant', key: "currentCityBestRestaurant_" + i },
									React.createElement(
										'div',
										{ className: 'left' },
										React.createElement('img', { src: v["image_url"] }),
										React.createElement(
											'div',
											null,
											React.createElement(
												'div',
												{ className: 'name', onClick: function onClick() {
														return _this2.props.getRestaurantDetails(v.id);
													} },
												v.name
											),
											React.createElement(
												'div',
												{ className: 'review' },
												_this2.props.getStars(v.rating),
												' ',
												v["review_count"],
												' reviews'
											),
											React.createElement(
												'div',
												null,
												v.categoryString
											)
										)
									),
									React.createElement(
										'div',
										{ className: 'right' },
										v.price
									)
								);
							})
						)
					),
					React.createElement(
						'div',
						{ className: 'homeSubSection' },
						React.createElement(
							'div',
							{ className: 'subSectionTitle' },
							this.props.currentLocation.city,
							'\'s Hot and New'
						),
						React.createElement(
							'ul',
							{ className: 'restaurantHolder' },
							this.props.currentCityHotRestaurants.map(function (v, i) {
								return React.createElement(
									'li',
									{ className: 'restaurant', key: "currentCityHotRestaurant_" + i },
									React.createElement(
										'div',
										{ className: 'left' },
										React.createElement('img', { src: v["image_url"] }),
										React.createElement(
											'div',
											null,
											React.createElement(
												'div',
												{ className: 'name', onClick: function onClick() {
														return _this2.props.getRestaurantDetails(v.id);
													} },
												v.name
											),
											React.createElement(
												'div',
												{ className: 'review' },
												_this2.props.getStars(v.rating),
												' ',
												v["review_count"],
												' reviews'
											),
											React.createElement(
												'div',
												null,
												v.categoryString
											)
										)
									),
									React.createElement(
										'div',
										{ className: 'right' },
										v.price
									)
								);
							})
						)
					)
				),
				Object.keys(this.props.currentLocation).length > 0 && (this.props.currentCityBestRestaurants.length === 0 || this.props.currentCityHotRestaurants.length === 0) && React.createElement(
					'div',
					{ className: 'spinnerHolder' },
					React.createElement('i', { className: 'fas fa-spinner fa-spin' })
				),
				this.props.bayAreaBestRestaurants.length > 0 && this.props.bayAreaHotRestaurants.length > 0 && React.createElement(
					'div',
					{ className: 'homeSection' },
					React.createElement(
						'div',
						{ className: 'homeSubSection' },
						React.createElement(
							'div',
							{ className: 'subSectionTitle' },
							'Bay Area\'s Most Popular'
						),
						React.createElement(
							'ul',
							{ className: 'restaurantHolder' },
							this.props.bayAreaBestRestaurants.map(function (v, i) {
								return React.createElement(
									'li',
									{ className: 'restaurant', key: "bayAreaBestRestaurant_" + i },
									React.createElement(
										'div',
										{ className: 'left' },
										React.createElement('img', { src: v["image_url"] }),
										React.createElement(
											'div',
											null,
											React.createElement(
												'div',
												{ className: 'name', onClick: function onClick() {
														return _this2.props.getRestaurantDetails(v.id);
													} },
												v.name
											),
											React.createElement(
												'div',
												{ className: 'review' },
												_this2.props.getStars(v.rating),
												' ',
												v["review_count"],
												' reviews'
											),
											React.createElement(
												'div',
												null,
												v.categoryString
											)
										)
									),
									React.createElement(
										'div',
										{ className: 'right' },
										v.price
									)
								);
							})
						)
					),
					React.createElement(
						'div',
						{ className: 'homeSubSection' },
						React.createElement(
							'div',
							{ className: 'subSectionTitle' },
							'Bay Area\'s Hot and New'
						),
						React.createElement(
							'ul',
							{ className: 'restaurantHolder' },
							this.props.bayAreaHotRestaurants.map(function (v, i) {
								return React.createElement(
									'li',
									{ className: 'restaurant', key: "bayAreaHotRestaurant_" + i },
									React.createElement(
										'div',
										{ className: 'left' },
										React.createElement('img', { src: v["image_url"] }),
										React.createElement(
											'div',
											null,
											React.createElement(
												'div',
												{ className: 'name', onClick: function onClick() {
														return _this2.props.getRestaurantDetails(v.id);
													} },
												v.name
											),
											React.createElement(
												'div',
												{ className: 'review' },
												_this2.props.getStars(v.rating),
												' ',
												v["review_count"],
												' reviews'
											),
											React.createElement(
												'div',
												null,
												v.categoryString
											)
										)
									),
									React.createElement(
										'div',
										{ className: 'right' },
										v.price
									)
								);
							})
						)
					)
				),
				(this.props.bayAreaBestRestaurants.length === 0 || this.props.bayAreaHotRestaurants.length === 0) && React.createElement(
					'div',
					{ className: 'spinnerHolder' },
					React.createElement('i', { className: 'fas fa-spinner fa-spin' })
				)
			);
		}
	}]);

	return HomePage;
}(React.Component);

var SearchResultPage = function (_React$Component2) {
	_inherits(SearchResultPage, _React$Component2);

	function SearchResultPage() {
		_classCallCheck(this, SearchResultPage);

		return _possibleConstructorReturn(this, (SearchResultPage.__proto__ || Object.getPrototypeOf(SearchResultPage)).apply(this, arguments));
	}

	_createClass(SearchResultPage, [{
		key: 'render',
		value: function render() {
			var _this4 = this;

			return React.createElement(
				'div',
				{ className: 'searchResult' },
				React.createElement(
					'div',
					{ className: 'filterPanel' },
					React.createElement(
						'div',
						{ className: 'filterSection' },
						React.createElement(
							'div',
							{ className: 'name' },
							'Features'
						),
						React.createElement(
							'ul',
							{ className: 'filterList' },
							React.createElement(
								'li',
								{ className: this.props.searchSetting.reservation ? "selected" : "deselected", onClick: function onClick() {
										return _this4.props.toggleFilterFeature("reservation");
									} },
								React.createElement('i', { className: 'far fa-calendar-alt' }),
								' Reservation'
							),
							React.createElement(
								'li',
								{ className: this.props.searchSetting.delivery ? "selected" : "deselected", onClick: function onClick() {
										return _this4.props.toggleFilterFeature("delivery");
									} },
								React.createElement('i', { className: 'fas fa-car-side' }),
								' Delivery'
							),
							React.createElement(
								'li',
								{ className: this.props.searchSetting.takeout ? "selected" : "deselected", onClick: function onClick() {
										return _this4.props.toggleFilterFeature("takeout");
									} },
								React.createElement('i', { className: 'fas fa-shopping-bag' }),
								' Takeout'
							)
						)
					),
					React.createElement(
						'div',
						{ className: 'filterSection' },
						React.createElement(
							'div',
							{ className: 'name' },
							'Rating'
						),
						React.createElement(
							'ul',
							{ className: 'filterList' },
							React.createElement(
								'li',
								{ className: this.props.searchSetting.rating === 1 ? "selected" : "deselected", onClick: function onClick() {
										return _this4.props.handlePriceRatingChange("rating", 1);
									} },
								'Any'
							),
							React.createElement(
								'li',
								{ className: this.props.searchSetting.rating === 2 ? "selected" : "deselected", onClick: function onClick() {
										return _this4.props.handlePriceRatingChange("rating", 2);
									} },
								'2+'
							),
							React.createElement(
								'li',
								{ className: this.props.searchSetting.rating === 3 ? "selected" : "deselected", onClick: function onClick() {
										return _this4.props.handlePriceRatingChange("rating", 3);
									} },
								'3+'
							),
							React.createElement(
								'li',
								{ className: this.props.searchSetting.rating === 4 ? "selected" : "deselected", onClick: function onClick() {
										return _this4.props.handlePriceRatingChange("rating", 4);
									} },
								'4+'
							),
							React.createElement(
								'li',
								{ className: this.props.searchSetting.rating === 5 ? "selected" : "deselected", onClick: function onClick() {
										return _this4.props.handlePriceRatingChange("rating", 5);
									} },
								'5 Only'
							)
						)
					),
					React.createElement(
						'div',
						{ className: 'filterSection' },
						React.createElement(
							'div',
							{ className: 'name' },
							'Price'
						),
						React.createElement(
							'ul',
							{ className: 'filterList' },
							React.createElement(
								'li',
								{ className: this.props.searchSetting.price === 0 ? "selected" : "deselected", onClick: function onClick() {
										return _this4.props.handlePriceRatingChange("price", 0);
									} },
								'Any'
							),
							React.createElement(
								'li',
								{ className: this.props.searchSetting.price === 1 ? "selected" : "deselected", onClick: function onClick() {
										return _this4.props.handlePriceRatingChange("price", 1);
									} },
								'$'
							),
							React.createElement(
								'li',
								{ className: this.props.searchSetting.price === 2 ? "selected" : "deselected", onClick: function onClick() {
										return _this4.props.handlePriceRatingChange("price", 2);
									} },
								'$$'
							),
							React.createElement(
								'li',
								{ className: this.props.searchSetting.price === 3 ? "selected" : "deselected", onClick: function onClick() {
										return _this4.props.handlePriceRatingChange("price", 3);
									} },
								'$$$'
							),
							React.createElement(
								'li',
								{ className: this.props.searchSetting.price === 4 ? "selected" : "deselected", onClick: function onClick() {
										return _this4.props.handlePriceRatingChange("price", 4);
									} },
								'$$$$'
							)
						)
					),
					React.createElement(
						'div',
						{ className: 'applyHolder' },
						React.createElement(
							'button',
							{ onClick: function onClick() {
									return _this4.props.searchRestaurants(false);
								} },
							'Apply'
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'searchList' },
					React.createElement(
						'div',
						{ className: 'sortingPanel' },
						React.createElement(
							'div',
							{ className: 'sortLabel' },
							'Sort By'
						),
						React.createElement(
							'select',
							{ value: this.props.searchSetting.sort, onChange: this.props.handleSorting, className: 'sortDropdown' },
							React.createElement(
								'option',
								{ value: 'best_match' },
								'Best Match'
							),
							React.createElement(
								'option',
								{ value: 'rating' },
								'Highest Rated'
							),
							React.createElement(
								'option',
								{ value: 'review_count' },
								'Most Reviewed'
							)
						)
					),
					React.createElement(
						'ul',
						{ className: 'restaurantHolder' },
						this.props.searching === false && this.props.searchResult.map(function (v, i) {
							return React.createElement(
								'li',
								{ className: 'restaurant', key: "business_" + i },
								React.createElement(
									'div',
									{ className: 'left' },
									React.createElement('img', { src: v["image_url"] }),
									React.createElement(
										'div',
										null,
										React.createElement(
											'div',
											{ className: 'name', onClick: function onClick() {
													return _this4.props.getRestaurantDetails(v.id);
												} },
											v.name
										),
										React.createElement(
											'div',
											{ className: 'review' },
											_this4.props.getStars(v.rating),
											' ',
											v["review_count"],
											' reviews'
										),
										React.createElement(
											'div',
											null,
											v.categoryString
										)
									)
								),
								React.createElement(
									'ul',
									{ className: 'right' },
									React.createElement(
										'li',
										null,
										v.price
									),
									React.createElement(
										'li',
										{ className: 'iconHolder' },
										v.transactions.includes("restaurant_reservation") && React.createElement('i', { className: 'far fa-calendar-alt' }),
										v.transactions.includes("delivery") && React.createElement('i', { className: 'fas fa-car-side' }),
										v.transactions.includes("pickup") && React.createElement('i', { className: 'fas fa-shopping-bag' })
									)
								)
							);
						}),
						this.props.searchResult.length === 0 && this.props.searching === false && React.createElement(
							'div',
							{ className: 'searchErrorMessage' },
							'No restaurant found. Please try again.'
						),
						this.props.searching === true && React.createElement(
							'div',
							{ className: 'spinnerHolder' },
							React.createElement('i', { className: 'fas fa-spinner fa-spin' })
						)
					)
				)
			);
		}
	}]);

	return SearchResultPage;
}(React.Component);

var RestaurantDetailsPage = function (_React$Component3) {
	_inherits(RestaurantDetailsPage, _React$Component3);

	function RestaurantDetailsPage() {
		_classCallCheck(this, RestaurantDetailsPage);

		return _possibleConstructorReturn(this, (RestaurantDetailsPage.__proto__ || Object.getPrototypeOf(RestaurantDetailsPage)).apply(this, arguments));
	}

	_createClass(RestaurantDetailsPage, [{
		key: 'render',
		value: function render() {
			var _this6 = this;

			return React.createElement(
				'div',
				{ className: 'restaurantDetails' },
				this.props.loadingDetails === false && React.createElement(
					'div',
					{ className: 'topSection' },
					React.createElement(
						'div',
						{ className: 'info' },
						React.createElement(
							'ul',
							{ className: 'leftPart' },
							React.createElement(
								'li',
								{ className: 'name' },
								this.props.restaurantDetails.name
							),
							React.createElement(
								'li',
								{ className: 'review' },
								this.props.getStars(this.props.restaurantDetails.rating),
								' ',
								this.props.restaurantDetails["review_count"],
								' reviews'
							),
							React.createElement(
								'li',
								null,
								this.props.restaurantDetails.categoryString
							),
							React.createElement(
								'li',
								{ className: 'addressPhone' },
								React.createElement('i', { className: 'fas fa-map-marker-alt' }),
								React.createElement(
									'div',
									null,
									this.props.restaurantDetails.location["display_address"][0],
									', ',
									this.props.restaurantDetails.location["display_address"][1]
								)
							),
							this.props.restaurantDetails.phone && React.createElement(
								'li',
								{ className: 'addressPhone' },
								React.createElement('i', { className: 'fas fa-phone' }),
								React.createElement(
									'div',
									null,
									this.props.restaurantDetails.phone
								)
							)
						),
						React.createElement(
							'ul',
							{ className: 'centerPart' },
							React.createElement(
								'li',
								null,
								this.props.restaurantDetails.hours[0]["is_open_now"] ? React.createElement(
									'span',
									{ className: 'open' },
									'Open Now'
								) : React.createElement(
									'span',
									{ className: 'close' },
									'Closed Now'
								)
							),
							React.createElement(
								'li',
								null,
								this.props.restaurantDetails.price
							),
							React.createElement(
								'li',
								null,
								React.createElement('i', { className: 'far fa-calendar-alt' }),
								'\xA0Reservation\xA0',
								React.createElement(
									'span',
									{ className: 'answer' },
									this.props.restaurantDetails.transactions.includes("restaurant_reservation") ? "Yes" : "No"
								)
							),
							React.createElement(
								'li',
								null,
								React.createElement('i', { className: 'fas fa-car-side' }),
								'\xA0Delivery\xA0',
								React.createElement(
									'span',
									{ className: 'answer' },
									this.props.restaurantDetails.transactions.includes("delivery") ? "Yes" : "No"
								)
							),
							React.createElement(
								'li',
								null,
								React.createElement('i', { className: 'fas fa-shopping-bag' }),
								'\xA0Pickup\xA0',
								React.createElement(
									'span',
									{ className: 'answer' },
									this.props.restaurantDetails.transactions.includes("pickup") ? "Yes" : "No"
								)
							)
						),
						React.createElement(
							'ul',
							{ className: 'rightPart' },
							this.props.restaurantDetails.hours[0].open.map(function (v, i) {
								return React.createElement(
									'li',
									{ key: v.dayStr },
									React.createElement(
										'div',
										{ className: 'day' },
										v.dayStr
									),
									React.createElement(
										'div',
										null,
										v.timeStr
									)
								);
							})
						)
					),
					React.createElement(
						'div',
						{ className: 'photos' },
						this.props.restaurantDetails.photos.map(function (v, i) {
							return React.createElement('img', { src: v, key: "image" + i });
						})
					)
				),
				this.props.restaurantReviews.length > 0 && React.createElement(
					'div',
					{ className: 'reviewSection' },
					this.props.restaurantReviews.map(function (review, i) {
						return React.createElement(
							'div',
							{ className: 'review', key: "review" + i },
							React.createElement(
								'div',
								{ className: 'user' },
								React.createElement('img', { src: review.user["image_url"] }),
								React.createElement(
									'ul',
									{ className: 'userInfo' },
									React.createElement(
										'li',
										null,
										review.user.name
									),
									React.createElement(
										'li',
										null,
										_this6.props.getStars(review.rating)
									)
								)
							),
							React.createElement(
								'div',
								{ className: 'reviewContent' },
								review.text
							)
						);
					})
				),
				this.props.restaurantReviews.length === 0 && React.createElement(
					'div',
					{ className: 'spinnerHolder' },
					React.createElement('i', { className: 'fas fa-spinner fa-spin' })
				)
			);
		}
	}]);

	return RestaurantDetailsPage;
}(React.Component);

var ProfilePage = function (_React$Component4) {
	_inherits(ProfilePage, _React$Component4);

	function ProfilePage(props) {
		_classCallCheck(this, ProfilePage);

		var _this7 = _possibleConstructorReturn(this, (ProfilePage.__proto__ || Object.getPrototypeOf(ProfilePage)).call(this, props));

		_this7.state = { currentStage: "login", loginEmail: "", loginPassword: "", loggingIn: false, loginErrorMessage: "", signupEmail: "", signupPassword: "", signupFirstName: "", signupFamilyName: "", signingUp: false, showSignupEmailError: false, showSignupPasswordError: false, signupErrorMessage: "", forgotPasswordEmail: "", verificationCode: "", verifyingEmail: false, verifyEmailErrorMessage: "", successfulResendCodeMessage: false, failureResendCodeMessage: "", resetPasswordEmailError: "", newPasswordErrorMessage: "", details: { email: "", firstname: "", lastName: "" }, loadingDetails: false };
		_this7.handleLoginEmail = _this7.handleLoginEmail.bind(_this7);
		_this7.handleLoginPassword = _this7.handleLoginPassword.bind(_this7);
		_this7.handleSignupEmail = _this7.handleSignupEmail.bind(_this7);
		_this7.handleSignupPassword = _this7.handleSignupPassword.bind(_this7);
		_this7.handleSignupGivenName = _this7.handleSignupGivenName.bind(_this7);
		_this7.handleSignupFamilyName = _this7.handleSignupFamilyName.bind(_this7);
		_this7.changeStage = _this7.changeStage.bind(_this7);
		_this7.login = _this7.login.bind(_this7);
		_this7.signup = _this7.signup.bind(_this7);
		_this7.handleForgotPasswordEmail = _this7.handleForgotPasswordEmail.bind(_this7);
		_this7.resetPassword = _this7.resetPassword.bind(_this7);
		_this7.handleVerificationCode = _this7.handleVerificationCode.bind(_this7);
		_this7.verifyAccount = _this7.verifyAccount.bind(_this7);
		_this7.resendCode = _this7.resendCode.bind(_this7);
		_this7.afterSubmission = _this7.afterSubmission.bind(_this7);
		_this7.handleNewPassword = _this7.handleNewPassword.bind(_this7);
		_this7.setNewPassword = _this7.setNewPassword.bind(_this7);
		_this7.logout = _this7.logout.bind(_this7);
		return _this7;
	}

	_createClass(ProfilePage, [{
		key: 'handleLoginEmail',
		value: function handleLoginEmail(event) {
			this.setState({ loginEmail: event.target.value });
		}
	}, {
		key: 'handleLoginPassword',
		value: function handleLoginPassword(event) {
			this.setState({ loginPassword: event.target.value });
		}
	}, {
		key: 'handleSignupEmail',
		value: function handleSignupEmail(event) {
			this.setState({ signupEmail: event.target.value });
		}
	}, {
		key: 'handleSignupPassword',
		value: function handleSignupPassword(event) {
			this.setState({ signupPassword: event.target.value });
		}
	}, {
		key: 'handleSignupGivenName',
		value: function handleSignupGivenName(event) {
			this.setState({ signupGivenName: event.target.value });
		}
	}, {
		key: 'handleSignupFamilyName',
		value: function handleSignupFamilyName(event) {
			this.setState({ signupFamilyName: event.target.value });
		}
	}, {
		key: 'changeStage',
		value: function changeStage(stage) {
			this.setState({ currentStage: stage });
		}
	}, {
		key: 'login',
		value: function login() {
			if (this.state.loginEmail !== "" && this.state.loginPassword !== "") {
				this.setState({ loginErrorMessage: "", loggingIn: true, currentStage: "login" });
				var self = this;
				var authenticationData = {
					Username: this.state.loginEmail,
					Password: this.state.loginPassword
				};
				var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
				var poolData = {
					UserPoolId: 'us-west-2_lKuq4wYJ9',
					ClientId: '4jkka6bjqjok6507qo8bbmktot'
				};
				var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
				var userData = {
					Username: this.state.loginEmail,
					Pool: userPool
				};
				var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
				cognitoUser.authenticateUser(authenticationDetails, {
					onSuccess: function onSuccess(result) {
						var accessToken = result.getAccessToken().getJwtToken();
						sessionStorage.setItem("token", accessToken);
						self.setState({ currentStage: "details", loginPassword: "", loginEmail: "", loggingIn: false, loadingDetails: true }, function () {
							cognitoUser.getUserAttributes(function (err, result) {
								self.setState({ loadingDetails: false });
								if (err) {
									console.log(err.message || JSON.stringify(err));
									return;
								}
								if (result) {
									var details = {};
									result.forEach(function (item) {
										if (item.getName() === "given_name") {
											details.firstName = item.getValue();
										} else if (item.getName() === "family_name") {
											details.lastName = item.getValue();
										} else if (item.getName() === "email") {
											details.email = item.getValue();
										}
									});
									self.setState({ details: details });
								}
							});
						});
					},

					onFailure: function onFailure(err) {
						console.log("login error");
						console.log(err);
						if (err.message === "User is not confirmed.") {
							self.setState({ currentStage: "unconfirmed", loginPassword: "", loggingIn: false });
						} else {
							self.setState({ loginErrorMessage: err.message, loggingIn: false });
						}
					}
				});
			}
		}
	}, {
		key: 'signup',
		value: function signup() {
			var _this8 = this;

			this.setState({ signupErrorMessage: "" });
			var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
			var emailRegExp = new RegExp(emailPattern);
			var passwordRegExp = new RegExp(passwordPattern);
			var emailTestResult = emailRegExp.test(this.state.signupEmail);
			var passwordTestResult = passwordRegExp.test(this.state.signupPassword);
			if (emailTestResult) {
				this.setState({ showSignupEmailError: false });
			} else {
				this.setState({ showSignupEmailError: true });
			}
			if (passwordTestResult) {
				this.setState({ showSignupPasswordError: false });
			} else {
				this.setState({ showSignupPasswordError: true });
			}
			if (emailTestResult && passwordTestResult && this.state.signupGivenName !== "" && this.state.signupFamilyName !== "") {
				this.setState({ signingUp: true });
				var poolData = {
					UserPoolId: 'us-west-2_lKuq4wYJ9',
					ClientId: '4jkka6bjqjok6507qo8bbmktot'
				};
				var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
				var attributeList = [];
				var dataFamilyName = {
					Name: 'family_name',
					Value: this.state.signupFamilyName
				};

				var dataGivenName = {
					Name: 'given_name',
					Value: this.state.signupGivenName
				};

				var attributeFamilyName = new AmazonCognitoIdentity.CognitoUserAttribute(dataFamilyName);
				var attributeGivenName = new AmazonCognitoIdentity.CognitoUserAttribute(dataGivenName);
				attributeList.push(attributeFamilyName);
				attributeList.push(attributeGivenName);
				this.setState({ signingUp: true });

				userPool.signUp(this.state.signupEmail, this.state.signupPassword, attributeList, null, function (err, result) {
					if (result) {
						_this8.setState({ currentStage: "confirmation", signupPassword: "", signupFirstName: "", signupFamilyName: "", signingUp: false });
					}
					if (err) {
						_this8.setState({ signupErrorMessage: err.message, signingUp: false });
						console.log(err.message || JSON.stringify(err));
						return;
					}
				});
			}
		}
	}, {
		key: 'handleForgotPasswordEmail',
		value: function handleForgotPasswordEmail(event) {
			this.setState({ forgotPasswordEmail: event.target.value });
		}
	}, {
		key: 'resetPassword',
		value: function resetPassword() {
			var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			var emailRegExp = new RegExp(emailPattern);
			var emailTestResult = emailRegExp.test(this.state.forgotPasswordEmail);
			if (emailTestResult) {
				this.setState({ resetPasswordEmailError: "" });
			} else {
				this.setState({ resetPasswordEmailError: "Invalid email" });
			}
			if (emailTestResult) {
				var self = this;
				var poolData = {
					UserPoolId: 'us-west-2_lKuq4wYJ9',
					ClientId: '4jkka6bjqjok6507qo8bbmktot'
				};

				var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
				var userData = {
					Username: this.state.forgotPasswordEmail,
					Pool: userPool
				};

				var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
				cognitoUser.forgotPassword({
					onSuccess: function onSuccess(data) {
						console.log('reset password');
						console.log(data);
						self.setState({ currentStage: "confirmPassword" });
					},
					onFailure: function onFailure(err) {
						console.log(err.message || JSON.stringify(err));
						self.setState({ resetPasswordEmailError: err.message });
					}
				});
			}
		}
	}, {
		key: 'handleVerificationCode',
		value: function handleVerificationCode(event) {
			this.setState({ verificationCode: event.target.value });
		}
	}, {
		key: 'resendCode',
		value: function resendCode() {
			var self = this;
			this.setState({ failureResendCodeMessage: "", successfulResendCodeMessage: false });
			var poolData = {
				UserPoolId: 'us-west-2_lKuq4wYJ9',
				ClientId: '4jkka6bjqjok6507qo8bbmktot'
			};

			var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
			var userData = {
				Username: this.state.signupEmail || this.state.loginEmail,
				Pool: userPool
			};

			var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
			cognitoUser.resendConfirmationCode(function (err, result) {
				if (result) {
					self.setState({ successfulResendCodeMessage: true });
				}
				if (err) {
					self.setState({ failureResendCodeMessage: err.message });
					console.log(err.message || JSON.stringify(err));
					return;
				}
			});
		}
	}, {
		key: 'afterSubmission',
		value: function afterSubmission(event) {
			event.preventDefault();
		}
	}, {
		key: 'verifyAccount',
		value: function verifyAccount() {
			this.setState({ verifyEmailErrorMessage: "" });
			if (this.state.verificationCode !== "") {
				var self = this;
				this.setState({ verifyingEmail: true });
				var poolData = {
					UserPoolId: 'us-west-2_lKuq4wYJ9',
					ClientId: '4jkka6bjqjok6507qo8bbmktot'
				};

				var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
				var userData = {
					Username: this.state.signupEmail || this.state.loginEmail,
					Pool: userPool
				};

				var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
				cognitoUser.confirmRegistration(this.state.verificationCode, true, function (err, result) {
					self.setState({ verifyingEmail: false });
					if (result) {
						self.setState({ currentStage: "confirmed", signupEmail: "", signupPassword: "", signupFirstName: "", signupFamilyName: "", loginEmail: "", loginPassword: "", verificationCode: "", verifyingEmail: false });
					}
					if (err) {
						self.setState({ verifyEmailErrorMessage: err.message, verifyingEmail: false });
						console.log(err.message || JSON.stringify(err));
						return;
					}
				});
			}
		}
	}, {
		key: 'handleNewPassword',
		value: function handleNewPassword(event) {
			this.setState({ newPassword: event.target.value });
		}
	}, {
		key: 'logout',
		value: function logout() {
			var poolData = {
				UserPoolId: 'us-west-2_lKuq4wYJ9',
				ClientId: '4jkka6bjqjok6507qo8bbmktot'
			};
			var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
			var cognitoUser = userPool.getCurrentUser();
			cognitoUser.signOut();
			this.setState({ currentStage: "login", details: null });
		}
	}, {
		key: 'setNewPassword',
		value: function setNewPassword() {
			this.setState({ newPasswordErrorMessage: "" });
			var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
			var passwordRegExp = new RegExp(passwordPattern);
			var passwordTestResult = passwordRegExp.test(this.state.newPassword);
			if (passwordTestResult) {
				this.setState({ newPasswordErrorMessage: "" });
			} else {
				this.setState({ newPasswordErrorMessage: "Weak Password. Please follow guideline to improve your password" });
			}
			if (this.state.verificationCode !== "" && passwordTestResult) {
				var self = this;
				this.setState({ verifyingEmail: true });
				var poolData = {
					UserPoolId: 'us-west-2_lKuq4wYJ9',
					ClientId: '4jkka6bjqjok6507qo8bbmktot'
				};

				var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
				var userData = {
					Username: this.state.forgotPasswordEmail,
					Pool: userPool
				};

				var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
				cognitoUser.confirmPassword(this.state.verificationCode, this.state.newPassword, {
					onSuccess: function onSuccess() {
						self.setState({ currentStage: "newPasswordSet", newPassword: "", verificationCode: "" });
					},
					onFailure: function onFailure(err) {
						self.setState({ newPasswordErrorMessage: err.message });
					}
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var poolData = {
				UserPoolId: 'us-west-2_lKuq4wYJ9',
				ClientId: '4jkka6bjqjok6507qo8bbmktot'
			};
			var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
			var cognitoUser = userPool.getCurrentUser();
			var self = this;
			if (cognitoUser != null) {
				cognitoUser.getSession(function (err, session) {
					if (err) {
						console.log(err.message || JSON.stringify(err));
						return;
					}

					if (session) {
						self.setState({ currentStage: "details", loadingDetails: true });
						cognitoUser.getUserAttributes(function (attributesError, result) {
							self.setState({ loadingDetails: false });
							if (attributesError) {
								console.log(attributesError);
							}
							if (result) {
								var details = {};
								console.log(result);
								result.forEach(function (item) {
									if (item.getName() === "given_name") {
										details.firstName = item.getValue();
									} else if (item.getName() === "family_name") {
										details.lastName = item.getValue();
									} else if (item.getName() === "email") {
										details.email = item.getValue();
									}
								});
								self.setState({ details: details });
							}
						});
					}
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this9 = this;

			return React.createElement(
				'div',
				{ className: 'profilePage' },
				(this.state.currentStage === "login" || this.state.currentStage === "confirmed" || this.state.currentStage === "newPasswordSet") && React.createElement(
					'form',
					{ onSubmit: this.afterSubmission, className: 'profileForm' },
					React.createElement(
						'div',
						{ className: 'stageTitle' },
						'Log In'
					),
					React.createElement(
						'div',
						null,
						React.createElement('input', { type: 'email', className: 'profileInput', placeholder: 'Email', onChange: this.handleLoginEmail, value: this.state.loginEmail, required: true })
					),
					React.createElement(
						'div',
						null,
						React.createElement('input', { type: 'password', className: 'profileInput', placeholder: 'Password', onChange: this.handleLoginPassword, value: this.state.loginPassword, required: true })
					),
					this.state.currentStage === "confirmed" && React.createElement(
						'div',
						{ className: 'profileVerifiedMessage' },
						'Successfully verify email!'
					),
					this.state.currentStage === "newPasswordSet" && React.createElement(
						'div',
						{ className: 'profileVerifiedMessage' },
						'Successfully change password!'
					),
					this.state.loginErrorMessage.length > 0 && React.createElement(
						'div',
						{ className: 'profileErrorMessage' },
						this.state.loginErrorMessage
					),
					React.createElement(
						'div',
						{ className: 'profileLinkHolder' },
						React.createElement(
							'div',
							{ className: 'profileLink', onClick: function onClick() {
									return _this9.changeStage("forgot");
								} },
							'Forgot password?'
						)
					),
					React.createElement(
						'button',
						{ onClick: this.login, type: 'submit', className: 'profileButton' },
						this.state.loggingIn ? React.createElement('i', { className: 'fas fa-spinner fa-spin' }) : "Log In"
					),
					React.createElement(
						'div',
						{ className: 'profileLinkHolder' },
						React.createElement(
							'div',
							null,
							'New user? ',
							React.createElement(
								'span',
								{ onClick: function onClick() {
										return _this9.changeStage("signup");
									}, className: 'profileLink' },
								'Sign Up'
							)
						)
					)
				),
				this.state.currentStage === "signup" && React.createElement(
					'form',
					{ onSubmit: this.afterSubmission, className: 'profileForm' },
					React.createElement(
						'div',
						{ className: 'stageTitle' },
						'Sign Up'
					),
					React.createElement(
						'div',
						null,
						React.createElement('input', { type: 'text', className: 'profileInput', placeholder: 'First Name', onChange: this.handleSignupGivenName, value: this.state.signupGivenName, required: true })
					),
					React.createElement(
						'div',
						null,
						React.createElement('input', { type: 'text', className: 'profileInput', placeholder: 'Last Name', onChange: this.handleSignupFamilyName, value: this.state.signupFamilyName, required: true })
					),
					React.createElement(
						'div',
						null,
						React.createElement('input', { type: 'email', className: 'profileInput', placeholder: 'Email', onChange: this.handleSignupEmail, value: this.state.signupEmail, required: true })
					),
					React.createElement(
						'div',
						null,
						React.createElement('input', { type: 'password', className: 'profileInput', placeholder: 'Password', onChange: this.handleSignupPassword, value: this.state.signupPassword, required: true })
					),
					this.state.signupErrorMessage.length > 0 && React.createElement(
						'div',
						{ className: 'profileErrorMessage' },
						this.state.signupErrorMessage
					),
					this.state.showSignupEmailError && React.createElement(
						'div',
						{ className: 'profileErrorMessage' },
						'Invalid Email'
					),
					this.state.showSignupPasswordError && React.createElement(
						'div',
						{ className: 'profileErrorMessage' },
						'Weak password. Please follow password guideline to improve password.'
					),
					React.createElement(
						'div',
						{ className: 'instruction' },
						React.createElement(
							'div',
							null,
							'Password must have'
						),
						React.createElement(
							'ul',
							null,
							React.createElement(
								'li',
								null,
								'At least 8 characters'
							),
							React.createElement(
								'li',
								null,
								'At least 1 lowercase alphabetical character'
							),
							React.createElement(
								'li',
								null,
								'At least 1 uppercase alphabetical character'
							),
							React.createElement(
								'li',
								null,
								'At least 1 numeric character'
							),
							React.createElement(
								'li',
								null,
								'At least 1 special character'
							)
						)
					),
					React.createElement(
						'button',
						{ onClick: this.signup, type: 'submit', className: 'profileButton' },
						this.state.signingUp ? React.createElement('i', { className: 'fas fa-spinner fa-spin' }) : "Sign Up"
					),
					React.createElement(
						'div',
						{ className: 'profileLinkHolder' },
						'Already have account?\xA0',
						React.createElement(
							'span',
							{ onClick: function onClick() {
									return _this9.changeStage("login");
								}, className: 'profileLink' },
							'Log in'
						)
					)
				),
				(this.state.currentStage === "confirmation" || this.state.currentStage === "unconfirmed") && React.createElement(
					'form',
					{ onSubmit: this.afterSubmission, className: 'profileForm' },
					React.createElement(
						'div',
						{ className: 'stageTitle' },
						'Email Verification'
					),
					React.createElement(
						'div',
						{ className: 'instruction' },
						this.state.currentStage === "unconfirmed" && React.createElement(
							'span',
							null,
							'Failed to log in because this email was not confirmed. '
						),
						'Please check your email and enter the verification code to verify account ',
						this.state.signupEmail || this.state.loginEmail,
						'.'
					),
					React.createElement(
						'div',
						null,
						React.createElement('input', { type: 'text', className: 'profileInput', placeholder: 'Verification Code', onChange: this.handleVerificationCode, value: this.state.verificationCode, required: true })
					),
					this.state.successfulResendCodeMessage && React.createElement(
						'div',
						{ className: 'profileVerifiedMessage' },
						'Successfully resend code!'
					),
					this.state.failureResendCodeMessage.length > 0 && React.createElement(
						'div',
						{ className: 'profileErrorMessage' },
						this.state.failureResendCodeMessage
					),
					this.state.verifyEmailErrorMessage.length > 0 && React.createElement(
						'div',
						{ className: 'profileErrorMessage' },
						this.state.verifyEmailErrorMessage
					),
					React.createElement(
						'button',
						{ onClick: this.verifyAccount, type: 'submit', className: 'profileButton' },
						this.state.verifyingEmail ? React.createElement('i', { className: 'fas fa-spinner fa-spin' }) : "Verify Email"
					),
					React.createElement(
						'div',
						{ className: 'profileLinkHolder' },
						'Did not get code?\xA0',
						React.createElement(
							'span',
							{ onClick: this.resendCode, className: 'profileLink' },
							'Resend code'
						),
						'.'
					)
				),
				this.state.currentStage === "forgot" && React.createElement(
					'form',
					{ className: 'profileForm', onSubmit: this.afterSubmission },
					React.createElement(
						'div',
						{ className: 'stageTitle' },
						'Forgot Password'
					),
					React.createElement(
						'div',
						{ className: 'instruction' },
						'Please enter your email address and I will send you an email about how to reset your password.'
					),
					React.createElement('input', { type: 'email', placeholder: 'Email', onChange: this.handleForgotPasswordEmail, value: this.state.forgotPasswordEmail, required: true, className: 'profileInput' }),
					this.state.resetPasswordEmailError.length > 0 && React.createElement(
						'div',
						{ className: 'profileErrorMessage' },
						this.state.resetPasswordEmailError
					),
					React.createElement(
						'button',
						{ onClick: this.resetPassword, type: 'submit', className: 'profileButton' },
						'Reset Password'
					),
					React.createElement(
						'div',
						{ className: 'profileLinkHolder' },
						'Back to\xA0',
						React.createElement(
							'span',
							{ onClick: function onClick() {
									return _this9.changeStage("login");
								}, className: 'profileLink' },
							'Login'
						)
					)
				),
				this.state.currentStage === "confirmPassword" && React.createElement(
					'form',
					{ className: 'profileForm', onSubmit: this.afterSubmission },
					React.createElement(
						'div',
						{ className: 'stageTitle' },
						'Set New Password'
					),
					React.createElement(
						'div',
						{ className: 'instruction' },
						'Please check your email for verification code.'
					),
					React.createElement(
						'div',
						null,
						React.createElement('input', { type: 'text', className: 'profileInput', placeholder: 'Verification Code', onChange: this.handleVerificationCode, value: this.state.verificationCode, required: true })
					),
					React.createElement(
						'div',
						null,
						React.createElement('input', { type: 'password', className: 'profileInput', placeholder: 'New Password', onChange: this.handleNewPassword, value: this.state.newPassword, required: true })
					),
					React.createElement(
						'div',
						{ className: 'instruction' },
						React.createElement(
							'div',
							null,
							'Password must have'
						),
						React.createElement(
							'ul',
							null,
							React.createElement(
								'li',
								null,
								'At least 8 characters'
							),
							React.createElement(
								'li',
								null,
								'At least 1 lowercase alphabetical character'
							),
							React.createElement(
								'li',
								null,
								'At least 1 uppercase alphabetical character'
							),
							React.createElement(
								'li',
								null,
								'At least 1 numeric character'
							),
							React.createElement(
								'li',
								null,
								'At least 1 special character'
							)
						)
					),
					this.state.newPasswordErrorMessage.length > 0 && React.createElement(
						'div',
						{ className: 'profileErrorMessage' },
						this.state.newPasswordErrorMessage
					),
					React.createElement(
						'button',
						{ onClick: this.setNewPassword, type: 'submit', className: 'profileButton' },
						'Set New Password'
					),
					React.createElement(
						'div',
						{ className: 'profileLinkHolder' },
						'Back to\xA0',
						React.createElement(
							'span',
							{ onClick: function onClick() {
									return _this9.changeStage("login");
								}, className: 'profileLink' },
							'Login'
						)
					)
				),
				this.state.currentStage === "details" && this.state.loadingDetails === false && React.createElement(
					'div',
					{ className: 'detailsForm' },
					React.createElement(
						'div',
						{ className: 'stageTitle' },
						'Profile'
					),
					React.createElement(
						'div',
						{ className: 'detailsHolder' },
						React.createElement(
							'span',
							{ className: 'detailsLabel' },
							'Email:'
						),
						' ',
						this.state.details.email
					),
					React.createElement(
						'div',
						{ className: 'detailsHolder' },
						React.createElement(
							'span',
							{ className: 'detailsLabel' },
							'First Name:'
						),
						' ',
						this.state.details.firstName
					),
					React.createElement(
						'div',
						{ className: 'detailsHolder' },
						React.createElement(
							'span',
							{ className: 'detailsLabel' },
							'Last Name:'
						),
						' ',
						this.state.details.lastName
					),
					React.createElement(
						'button',
						{ onClick: this.logout, className: 'profileButton' },
						'Log Out'
					)
				),
				this.state.currentStage === "details" && this.state.loadingDetails === true && React.createElement(
					'div',
					{ className: 'spinnerHolder' },
					React.createElement('i', { className: 'fas fa-spinner fa-spin' })
				)
			);
		}
	}]);

	return ProfilePage;
}(React.Component);

var App = function (_React$Component5) {
	_inherits(App, _React$Component5);

	function App(props) {
		_classCallCheck(this, App);

		var _this10 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this10.state = { currentPage: "home", restaurantAutoCompleteItems: [], restaurantSearchField: "", locationAutoCompleteItems: [], locationSearchField: "", currentLocation: {}, searching: false, searchResult: [], searchSetting: { term: "", location: "", reservation: false, delivery: false, takeout: false, rating: 1, price: 0, sort: "best_match" }, loadingDetails: false, restaurantDetails: {}, restaurantReviews: [], bayAreaHotRestaurants: [], bayAreaBestRestaurants: [], currentCityBestRestaurants: [], currentCityHotRestaurants: [] };
		_this10.handleRestaurantAutoComplete = _this10.handleRestaurantAutoComplete.bind(_this10);
		_this10.handleLocationAutoComplete = _this10.handleLocationAutoComplete.bind(_this10);
		_this10.setSearchField = _this10.setSearchField.bind(_this10);
		_this10.searchRestaurants = _this10.searchRestaurants.bind(_this10);
		_this10.handleAutoCompleteBlur = _this10.handleAutoCompleteBlur.bind(_this10);
		_this10.handleSorting = _this10.handleSorting.bind(_this10);
		_this10.toggleFilterFeature = _this10.toggleFilterFeature.bind(_this10);
		_this10.handlePriceRatingChange = _this10.handlePriceRatingChange.bind(_this10);
		_this10.changePage = _this10.changePage.bind(_this10);
		_this10.getRestaurantDetails = _this10.getRestaurantDetails.bind(_this10);
		_this10.getStars = _this10.getStars.bind(_this10);
		_this10.getDay = _this10.getDay.bind(_this10);
		_this10.searchHomePage = _this10.searchHomePage.bind(_this10);
		return _this10;
	}

	_createClass(App, [{
		key: 'handleRestaurantAutoComplete',
		value: function handleRestaurantAutoComplete(event) {
			var _this11 = this;

			this.setState({ restaurantSearchField: event.target.value });
			var tempParam = void 0;
			if (this.state.currentLocation.latitude) {
				tempParam = { text: event.target.value, latitude: this.state.currentLocation.latitude, longitude: this.state.currentLocation.longitude };
			} else {
				tempParam = { text: event.target.value };
			}
			axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/autocomplete', { headers: { Authorization: 'Bearer 41SGxTBx5354alav7mdzMsbwoX0HYuA-llpye8Xx3vD94L5YcSYkv0WGEEfngtcgBsRZsE_yRGdvO0EWR0_-rfhR7UuUbzVjNb0pWM132lmvdMcFzaZa-K_Nz7X3WXYx' }, params: tempParam }).then(function (res) {
				var restaurantItems = [];
				res.data.businesses.forEach(function (business) {
					restaurantItems.push(business.name);
				});
				res.data.terms.forEach(function (term) {
					restaurantItems.push(term.text);
				});
				_this11.setState({ restaurantAutoCompleteItems: restaurantItems });
				_this11.setState({ restaurantAutoCompleteShow: true });
			}).catch(function (err) {
				console.log(err);
				_this11.setState({ restaurantAutoCompleteItems: [] });
				_this11.setState({ restaurantAutoCompleteShow: false });
			});
		}
	}, {
		key: 'handleLocationAutoComplete',
		value: function handleLocationAutoComplete(event) {
			var _this12 = this;

			this.setState({ locationSearchField: event.target.value });
			axios.get('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + event.target.value + '&types=(cities)&components=country:us&key=AIzaSyD80XiICNx0KtiVyK-n431A1EenEU3gdCw').then(function (res) {
				var locationItems = [];
				res.data.predictions.forEach(function (prediction) {
					locationItems.push(prediction.terms[0].value + ', ' + prediction.terms[1].value);
				});
				_this12.setState({ locationAutoCompleteItems: locationItems });
				_this12.setState({ locationAutoCompleteShow: true });
			}).catch(function (err) {
				console.log(err);
				_this12.setState({ locationAutoCompleteItems: [] });
				_this12.setState({ locationAutoCompleteShow: false });
			});
		}
	}, {
		key: 'setSearchField',
		value: function setSearchField(searchFieldName, event) {
			if (searchFieldName === "restaurant") {
				this.setState({ restaurantSearchField: event.target.textContent });
				this.setState({ restaurantAutoCompleteItems: [] });
			} else if (searchFieldName === "location") {
				this.setState({ locationSearchField: event.target.textContent });
				this.setState({ locationAutoCompleteItems: [] });
			}
		}
	}, {
		key: 'searchRestaurants',
		value: function searchRestaurants(fromSearchField) {
			var _this13 = this;

			if (fromSearchField && this.state.locationSearchField !== "" && this.state.restaurantSearchField !== "" || !fromSearchField) {
				var bearer = void 0;
				var searchParams = { categories: 'food,restaurants', limit: "50" };
				if (fromSearchField) {
					bearer = "41SGxTBx5354alav7mdzMsbwoX0HYuA-llpye8Xx3vD94L5YcSYkv0WGEEfngtcgBsRZsE_yRGdvO0EWR0_-rfhR7UuUbzVjNb0pWM132lmvdMcFzaZa-K_Nz7X3WXYx";
				} else {
					bearer = "USzCLHTDQTXTmYOzJlPcpBt0J4H0RIQ_WlsxVsujyC3VHWxAlq6m9orefglZvYT8fGGhwJXXr1nNQ3oHFHsMtX5yqpD7GLahDWNbRLgk3hp4FpC_0MneEEcP135MXXYx";
				}
				this.setState({ restaurantAutoCompleteItems: [] });
				this.setState({ locationAutoCompleteItems: [] });
				if (this.state.currentPage !== "search") {
					this.setState({ currentPage: "search" });
				}
				this.setState({ searching: true });

				if (fromSearchField) {
					searchParams.location = this.state.locationSearchField;
					searchParams.term = this.state.restaurantSearchField;
					var tempSearchSetting = Object.assign({}, this.state.searchSetting);
					tempSearchSetting.location = this.state.locationSearchField;
					tempSearchSetting.term = this.state.restaurantSearchField;
					tempSearchSetting.reservation = false;
					tempSearchSetting.delivery = false;
					tempSearchSetting.takeout = false;
					tempSearchSetting.price = 0;
					tempSearchSetting.rating = 1;
					tempSearchSetting.sort = "best_match";
					this.setState({ searchSetting: tempSearchSetting });
				} else {
					searchParams.location = this.state.searchSetting.location;
					searchParams.term = this.state.searchSetting.term;
					if (this.state.searchSetting.price !== 0) {
						searchParams.price = this.state.searchSetting.price;
					}
					searchParams["sort_by"] = this.state.searchSetting.sort;
				}

				axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search', { headers: { Authorization: 'Bearer ' + bearer }, params: searchParams }).then(function (res) {
					_this13.setState({ searching: false });
					var result = res.data.businesses;
					result = result.filter(function (business) {
						return business.rating >= _this13.state.searchSetting.rating;
					});
					if (_this13.state.searchSetting.reservation) {
						result = result.filter(function (business) {
							return business.transactions.includes("restaurant_reservation");
						});
					}
					if (_this13.state.searchSetting.delivery) {
						result = result.filter(function (business) {
							return business.transactions.includes("delivery");
						});
					}
					if (_this13.state.searchSetting.takeout) {
						result = result.filter(function (business) {
							return business.transactions.includes("pickup");
						});
					}
					result.forEach(function (restaurant) {
						var categoryString = restaurant.categories[0].title;
						for (var i = 1; i < restaurant.categories.length; i++) {
							categoryString += ", " + restaurant.categories[i].title;
						}
						restaurant.categoryString = categoryString;
					});

					_this13.setState({ searchResult: result });
				}).catch(function (err) {
					console.log(err);
					_this13.setState({ searching: false });
				});
			}
		}
	}, {
		key: 'handleAutoCompleteBlur',
		value: function handleAutoCompleteBlur(name, event) {
			var _this14 = this;

			if (name === "restaurant") {
				setTimeout(function () {
					return _this14.setState({ restaurantAutoCompleteItems: [] });
				}, 500);
			} else if (name === "location") {
				setTimeout(function () {
					return _this14.setState({ locationAutoCompleteItems: [] });
				}, 500);
			}
		}
	}, {
		key: 'handleSorting',
		value: function handleSorting(event) {
			var _this15 = this;

			var tempSearchSetting = Object.assign({}, this.state.searchSetting);
			tempSearchSetting.sort = event.target.value;
			this.setState({ searchSetting: tempSearchSetting }, function () {
				return _this15.searchRestaurants(false);
			});
		}
	}, {
		key: 'toggleFilterFeature',
		value: function toggleFilterFeature(name) {
			if (this.state.searchSetting.hasOwnProperty(name)) {
				var tempSearchSetting = Object.assign({}, this.state.searchSetting);
				tempSearchSetting[name] = !tempSearchSetting[name];
				this.setState({ searchSetting: tempSearchSetting });
			}
		}
	}, {
		key: 'handlePriceRatingChange',
		value: function handlePriceRatingChange(type, value) {
			var tempSearchSetting = Object.assign({}, this.state.searchSetting);
			if (type === "rating") {
				tempSearchSetting.rating = value;
			} else if (type === "price") {
				tempSearchSetting.price = value;
			}
			this.setState({ searchSetting: tempSearchSetting });
		}
	}, {
		key: 'changePage',
		value: function changePage(page) {
			this.setState({ currentPage: page });
		}
	}, {
		key: 'getRestaurantDetails',
		value: function getRestaurantDetails(id) {
			var _this16 = this;

			this.setState({ loadingDetails: true });
			this.setState({ currentPage: "details" });

			axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/' + id, { headers: { Authorization: 'Bearer Qte-yvxrkHEkuvVm_iDtig3yyiSKbbwwPDPEVzhBetIkTyCNgKPuYZRKVQYjxB7xkkQIHpacEHHhvUcLRVievb2SwoOPFvsWi43ng7deVIGubYhFldDqaPQSkCdPXXYx' }, params: { location: this.state.locationSearchField, categories: 'food,restaurants', limit: 50, term: this.state.restaurantSearchField } }).then(function (res) {
				var result = res.data;
				result.categoryString = result.categories[0].title;
				for (var i = 1; i < result.categories.length; i++) {
					result.categoryString += ", " + result.categories[i].title;
				}
				result.hours[0].open.forEach(function (day, index) {
					var startHour = parseInt(day.start.substr(0, 2));
					day.startHour = startHour;
					var startMinute = parseInt(day.start.substr(2, 2));
					var endHour = parseInt(day.end.substr(0, 2));
					var endMinute = parseInt(day.end.substr(2, 2));
					var startStr = void 0,
					    endStr = void 0;
					if (startHour > 12 || startHour === 12 && startMinute > 0) {
						startStr = ("0" + (startHour - 12)).slice(-2) + ":" + ("0" + startMinute).slice(-2) + " pm";
					} else {
						startStr = ("0" + startHour).slice(-2) + ":" + ("0" + startMinute).slice(-2) + " am";
					}
					if (endHour > 12 || endHour === 12 && endMinute > 0) {
						endStr = ("0" + (endHour - 12)).slice(-2) + ":" + ("0" + endMinute).slice(-2) + " pm";
					} else {
						endStr = ("0" + endHour).slice(-2) + ":" + ("0" + endMinute).slice(-2) + " am";
					}
					day.timeStr = startStr + " - " + endStr;
					day.dayStr = _this16.getDay(day.day);
				});

				for (var _i = 1; _i < result.hours[0].open.length; _i++) {
					if (result.hours[0].open[_i].day === result.hours[0].open[_i - 1].day) {
						result.hours[0].open[_i].dayStr = "";
					}
				}

				_this16.setState({ restaurantDetails: result }, function () {
					return _this16.setState({ loadingDetails: false });
				});
			}).catch(function (err) {
				_this16.setState({ loadingDetails: false });
				console.log(err);
			});

			axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/' + id + '/reviews', { headers: { Authorization: 'Bearer _HGfbnU75QUjx3jCXVggC0QyRWZ_aQ7wyk0gBvYi7phUpXPYgZO_yZvftDOV-vNw0uRBQouDAo3CCnbdHbG0yC1IRwAvvBSV-omnr_UHfp-jmRQUwcaq2d_jTCRPXXYx' }, params: { location: this.state.locationSearchField, categories: 'food,restaurants', limit: 50, term: this.state.restaurantSearchField } }).then(function (res) {
				_this16.setState({ restaurantReviews: res.data.reviews });
			}).catch(function (err) {
				console.log(err);
			});
		}
	}, {
		key: 'getStars',
		value: function getStars(rating) {
			var stars = [];
			var emptyStar = Math.floor(5 - rating);
			var solidStar = Math.floor(rating);
			var halfStar = rating > Math.floor(rating) ? true : false;
			for (var i = 0; i < solidStar; i++) {
				stars.push(React.createElement('i', { className: 'fas fa-star', key: "solid" + i }));
			}
			if (halfStar) {
				stars.push(React.createElement('i', { className: 'fas fa-star-half-alt', key: "middleStar" }));
			}
			for (var _i2 = 0; _i2 < emptyStar; _i2++) {
				stars.push(React.createElement('i', { className: 'far fa-star', key: "empty" + _i2 }));
			}
			return stars;
		}
	}, {
		key: 'getDay',
		value: function getDay(dayNum) {
			var result = void 0;
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
	}, {
		key: 'searchHomePage',
		value: function searchHomePage(location, searchType) {
			var _this17 = this;

			var bearer = void 0;
			var searchParams = { categories: 'food,restaurants', limit: "5" };
			searchParams.location = location;
			if (searchType === "best") {
				searchParams["sort_by"] = "review_count";
				bearer = "41SGxTBx5354alav7mdzMsbwoX0HYuA-llpye8Xx3vD94L5YcSYkv0WGEEfngtcgBsRZsE_yRGdvO0EWR0_-rfhR7UuUbzVjNb0pWM132lmvdMcFzaZa-K_Nz7X3WXYx";
			} else if (searchType === "hot") {
				searchParams.attributes = "hot_and_new";
				bearer = "USzCLHTDQTXTmYOzJlPcpBt0J4H0RIQ_WlsxVsujyC3VHWxAlq6m9orefglZvYT8fGGhwJXXr1nNQ3oHFHsMtX5yqpD7GLahDWNbRLgk3hp4FpC_0MneEEcP135MXXYx";
			}

			axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search', { headers: { Authorization: 'Bearer ' + bearer }, params: searchParams }).then(function (res) {
				var result = res.data.businesses;
				result.forEach(function (restaurant) {
					var categoryString = restaurant.categories[0].title;
					for (var i = 1; i < restaurant.categories.length; i++) {
						categoryString += ", " + restaurant.categories[i].title;
					}
					restaurant.categoryString = categoryString;
				});
				if (location === "bay area" && searchType === "best") {
					_this17.setState({ bayAreaBestRestaurants: result });
				} else if (location === "bay area" && searchType === "hot") {
					_this17.setState({ bayAreaHotRestaurants: result });
				} else if (location !== "bay area" && searchType === "best") {
					_this17.setState({ currentCityBestRestaurants: result });
				} else if (location !== "bay area" && searchType === "hot") {
					_this17.setState({ currentCityHotRestaurants: result });
				}
			}).catch(function (err) {
				console.log(err);
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this18 = this;

			this.searchHomePage("bay area", "best");
			this.searchHomePage("bay area", "hot");
			if (navigator.geolocation) {
				console.log("geolocation");
				navigator.geolocation.getCurrentPosition(function (position) {
					axios.get('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + '%2C' + position.coords.longitude + '&key=AIzaSyD80XiICNx0KtiVyK-n431A1EenEU3gdCw').then(function (res) {
						console.log(res);
						var city = void 0,
						    zip = void 0,
						    state = void 0,
						    stateShort = void 0;
						res.data.results[4]["address_components"].forEach(function (component) {
							component.types.forEach(function (type) {
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
						_this18.setState({ currentLocation: { city: city, zip: zip, state: state, stateShort: stateShort, latitude: position.coords.latitude, longitude: position.coords.longitude } });
						_this18.setState({ locationSearchField: city + "," + stateShort });
						_this18.searchHomePage(city + "," + stateShort, "hot");
						_this18.searchHomePage(city + "," + stateShort, "best");
					}).catch(function (err) {
						console.log(err);
					});
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this19 = this;

			var content = void 0;
			if (this.state.currentPage === "home") {
				content = React.createElement(HomePage, { getStars: this.getStars, bayAreaBestRestaurants: this.state.bayAreaBestRestaurants, bayAreaHotRestaurants: this.state.bayAreaHotRestaurants, currentCityBestRestaurants: this.state.currentCityBestRestaurants, currentCityHotRestaurants: this.state.currentCityHotRestaurants, currentLocation: this.state.currentLocation, getRestaurantDetails: this.getRestaurantDetails });
			} else if (this.state.currentPage === "search") {
				content = React.createElement(SearchResultPage, { searchSetting: this.state.searchSetting, handleSorting: this.handleSorting, toggleFilterFeature: this.toggleFilterFeature, handlePriceRatingChange: this.handlePriceRatingChange, searchRestaurants: this.searchRestaurants, searchResult: this.state.searchResult, searching: this.state.searching, getRestaurantDetails: this.getRestaurantDetails, getStars: this.getStars });
			} else if (this.state.currentPage === "details") {
				content = React.createElement(RestaurantDetailsPage, { getStars: this.getStars, restaurantDetails: this.state.restaurantDetails, restaurantReviews: this.state.restaurantReviews, loadingDetails: this.state.loadingDetails });
			} else if (this.state.currentPage === "profile") {
				content = React.createElement(ProfilePage, { isUserAuthenticated: this.state.isUserAuthenticated });
			}
			return React.createElement(
				'div',
				{ className: 'main' },
				React.createElement(
					'div',
					{ className: 'upperSection' },
					React.createElement(
						'ul',
						{ className: 'searchBar' },
						React.createElement(
							'li',
							{ onBlur: function onBlur(event) {
									return _this19.handleAutoCompleteBlur("restaurant", event);
								} },
							React.createElement(
								'div',
								{ className: 'holder' },
								React.createElement('i', { className: 'fas fa-search fieldIcon' }),
								React.createElement('input', { type: 'text', placeholder: 'Find restaurant, pizza, Korean', onChange: this.handleRestaurantAutoComplete, value: this.state.restaurantSearchField })
							),
							this.state.restaurantAutoCompleteItems.length > 0 && React.createElement(
								'div',
								{ className: 'autoCompleteItems' },
								this.state.restaurantAutoCompleteItems.map(function (v, i) {
									return React.createElement(
										'div',
										{ key: "restaurantSuggestion" + i, className: 'item', onClick: function onClick(event) {
												return _this19.setSearchField("restaurant", event);
											} },
										v
									);
								})
							)
						),
						React.createElement(
							'li',
							{ onBlur: function onBlur(event) {
									return _this19.handleAutoCompleteBlur("location", event);
								} },
							React.createElement(
								'div',
								{ className: 'holder' },
								React.createElement('i', { className: 'fas fa-map-marker-alt fieldIcon' }),
								React.createElement('input', { type: 'text', placeholder: 'Near city, county', onChange: this.handleLocationAutoComplete, value: this.state.locationSearchField })
							),
							this.state.locationAutoCompleteItems.length > 0 && React.createElement(
								'div',
								{ className: 'autoCompleteItems' },
								this.state.locationAutoCompleteItems.map(function (v, i) {
									return React.createElement(
										'div',
										{ key: "locationSuggestion" + i, className: 'item', onClick: function onClick(event) {
												return _this19.setSearchField("location", event);
											} },
										v
									);
								})
							)
						),
						React.createElement(
							'li',
							{ onClick: function onClick() {
									return _this19.searchRestaurants(true);
								}, className: 'searchButton' },
							this.state.searching ? React.createElement('i', { className: 'fas fa-spinner fa-spin' }) : React.createElement('i', { className: 'fas fa-chevron-right' })
						)
					),
					React.createElement(
						'ul',
						{ className: 'navBar' },
						React.createElement(
							'li',
							{ onClick: function onClick() {
									return _this19.changePage("home");
								} },
							'Home'
						),
						React.createElement(
							'li',
							null,
							'|'
						),
						React.createElement(
							'li',
							{ onClick: function onClick() {
									return _this19.changePage("profile");
								} },
							'Profile'
						),
						this.state.currentLocation.city && React.createElement(
							'li',
							null,
							'|'
						),
						this.state.currentLocation.city && React.createElement(
							'li',
							null,
							React.createElement('i', { className: 'fas fa-map-marker-alt' }),
							'\xA0\xA0',
							this.state.currentLocation.city,
							', ',
							this.state.currentLocation.stateShort
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'contentSection' },
					content,
					React.createElement(
						'div',
						{ className: 'credit' },
						'Designed and developed by ',
						React.createElement(
							'a',
							{ className: 'about', href: 'https://www.linkedin.com/in/au-nguyen-29040528', target: '_blank' },
							'Au Nguyen'
						)
					)
				)
			);
		}
	}]);

	return App;
}(React.Component);

export default App;