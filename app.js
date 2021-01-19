'use strict';
var hoursOfOp = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]

// Fuction for Cookie Shop statistics
function cookieShopInputs(location, minCustomer, maxCustomer, averageCookieSales){
  var cookieShop = {
    name: location,
    minCust: minCustomer,
    maxCust: maxCustomer,
    avgCookieSale: averageCookieSales,
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
  cookieShop.generateArray();
  return cookieShop;
}
var seattle = cookieShopInputs('Seattle', 23, 65, 6.3);
var tokyo = cookieShopInputs('Tokyo', 3, 24, 1.2);
var dubai = cookieShopInputs('Dubai', 11, 38, 3.7);
var paris = cookieShopInputs('Paris', 20, 38, 2.3);
var lima = cookieShopInputs('Lima', 2, 16, 4.6);

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
