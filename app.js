'use strict';

var hoursOfOp = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]

// Object: Seattle Cookie Shop
var seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  avgCust: undefined,
  randomAvgCust: function randomAvgCust() {
    this.avgCust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust); 
  }, 
  avgCookiePerHr: undefined,
  cookiesPerHr: function cookiesPerHr() {
    this.avgCookiePerHr = Math.floor(this.avgCust * this.avgCookieSale);
  },
  hours: [],
  generateArray: function generateArray() {
    this.hours = [];
    var totalCookiesSum = 0;
    for (var i = 0; i < hoursOfOp.length; i++){
      this.randomAvgCust();
      this.cookiesPerHr();
      this.hours.push(`${hoursOfOp[i]}: ${this.avgCookiePerHr} Cookies`)
      totalCookiesSum += this.avgCookiePerHr;
    }
    this.hours.push(`Total: ${totalCookiesSum} Cookies`);
  },
};
seattle.generateArray();

// Object: Tokyo Cookie Shop
var tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  avgCust: undefined,
  randomAvgCust: function randomAvgCust() {
    var randomAvg = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    this.avgCust = randomAvg; 
  },
  avgCookiePerHr: undefined,
  cookiesPerHr: function cookiesPerHr() {
    var randomHrCookies = Math.floor(this.avgCust * this.avgCookieSale);
    this.avgCookiePerHr = randomHrCookies;
  },
  hours: [],
  generateArray: function generateArray() {
    this.hours = [];
    var totalCookiesSum = 0;
    for (var i = 0; i < hoursOfOp.length; i++){
      this.randomAvgCust();
      this.cookiesPerHr();
      this.hours.push(`${hoursOfOp[i]}: ${this.avgCookiePerHr} Cookies`)
      totalCookiesSum += this.avgCookiePerHr;
    }
    this.hours.push(`Total: ${totalCookiesSum} Cookies`);
  },
}
tokyo.generateArray();

// Object: Dubai Cookie Shop
var dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  avgCust: undefined,
  randomAvgCust: function randomAvgCust() {
    var randomAvg = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    this.avgCust = randomAvg; 
  },
  avgCookiePerHr: undefined,
  cookiesPerHr: function cookiesPerHr() {
    var randomHrCookies = Math.floor(this.avgCust * this.avgCookieSale);
    this.avgCookiePerHr = randomHrCookies;
  },
  hours: [],
  generateArray: function generateArray() {
    this.hours = [];
    var totalCookiesSum = 0;
    for (var i = 0; i < hoursOfOp.length; i++){
      this.randomAvgCust();
      this.cookiesPerHr();
      this.hours.push(`${hoursOfOp[i]}: ${this.avgCookiePerHr} Cookies`)
      totalCookiesSum += this.avgCookiePerHr;
    }
    this.hours.push(`Total: ${totalCookiesSum} Cookies`);
  },
}
dubai.generateArray();

// Object: Paris Cookie Shop
var paris = {
  name: 'Paris',
  minCust:20,
  maxCust:38,
  avgCookieSale:2.3,
  avgCust: undefined,
  randomAvgCust: function randomAvgCust() {
    var randomAvg = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    this.avgCust = randomAvg; 
  },
  avgCookiePerHr: undefined,
  cookiesPerHr: function cookiesPerHr() {
    var randomHrCookies = Math.floor(this.avgCust * this.avgCookieSale);
    this.avgCookiePerHr = randomHrCookies;
  },
  hours: [],
  generateArray: function generateArray() {
    this.hours = [];
    var totalCookiesSum = 0;
    for (var i = 0; i < hoursOfOp.length; i++){
      this.randomAvgCust();
      this.cookiesPerHr();
      this.hours.push(`${hoursOfOp[i]}: ${this.avgCookiePerHr} Cookies`)
      totalCookiesSum += this.avgCookiePerHr;
    }
    this.hours.push(`Total: ${totalCookiesSum} Cookies`);
  },
}
paris.generateArray();

// Object: Lima Cookie Shop
var lima = {
  name: 'Lima', 
  minCust:2,
  maxCust:16,
  avgCookieSale:4.6,
  avgCust: undefined,
  randomAvgCust: function randomAvgCust() {
    var randomAvg = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    this.avgCust = randomAvg; 
  },
  avgCookiePerHr: undefined,
  cookiesPerHr: function cookiesPerHr() {
    var randomHrCookies = Math.floor(this.avgCust * this.avgCookieSale);
    this.avgCookiePerHr = randomHrCookies;
  },
  hours: [],
  generateArray: function generateArray() {
    this.hours = [];
    var totalCookiesSum = 0;
    for (var i = 0; i < hoursOfOp.length; i++){
      this.randomAvgCust();
      this.cookiesPerHr();
      this.hours.push(`${hoursOfOp[i]}: ${this.avgCookiePerHr} Cookies`)
      totalCookiesSum += this.avgCookiePerHr;
    }
    this.hours.push(`Total: ${totalCookiesSum} Cookies`);
  },
}
lima.generateArray();

// DOM mutations
function populateCookieShops(cookieShop) {
  var sectionElement = document.getElementById('shops');
  var divOne = document.createElement('div');
  var h2One = document.createElement('h2');
  var ulOne = document.createElement('ul');
  h2One.textContent = cookieShop.name;
  for (var i = 0; i < hoursOfOp.length; i++) {
    var liOne = document.createElement('li');
    liOne.textContent = cookieShop.hours[i];
    ulOne.appendChild(liOne);
  }
  var liOne = document.createElement('li');
  liOne.textContent = cookieShop.hours[cookieShop.hours.length - 1];
  ulOne.appendChild(liOne);
  divOne.appendChild(h2One);
  divOne.appendChild(ulOne);
  sectionElement.appendChild(divOne);
}
populateCookieShops(seattle);
populateCookieShops(tokyo);
populateCookieShops(dubai);
populateCookieShops(paris);
populateCookieShops(lima);
