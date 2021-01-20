'use strict';
var hoursOfOp = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]

// Object constructor for cookie store inputs
function CookieShop(location, minCustomer, maxCustomer, averageCookieSales){
  this.name = location;
  this.minCust = minCustomer;
  this.maxCust = maxCustomer;
  this.avgCookieSale = averageCookieSales;
  this.avgCust = undefined;
  this.randomAvgCust =function randomAvgCust() {
    this.avgCust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust); 
  };
  this.avgCookiePerHr = undefined;
  this.cookiesPerHr = function cookiesPerHr() {
    this.avgCookiePerHr = Math.floor(this.avgCust * this.avgCookieSale);
  };
  this.hours = [];
  this.generateArray = function generateArray() {
    this.hours = [];
    var totalCookiesSum = 0;
    for (var i = 0; i < hoursOfOp.length; i++){
      this.randomAvgCust();
      this.cookiesPerHr();
      this.hours.push(this.avgCookiePerHr)
      totalCookiesSum += this.avgCookiePerHr;
    }
    this.hours.push(totalCookiesSum);
  };
  this.generateArray();
}

// creates random cookie average sales for each hour
CookieShop.prototype.display = function() {
  var cookieBody = document.querySelector('table tbody');
  var row = document.createElement('tr');
  var shopNames = document.createElement('td');
  shopNames.textContent = this.name;
  row.appendChild(shopNames);
  for (var i = 0; i < hoursOfOp.length + 1; i++) {
    var cell = document.createElement('td')
    cell.textContent = this.hours[i];
    row.appendChild(cell);
  }
  /* var cell = document.createElement('td')
  cell.textContent = this.hours[i];
  row.appendChild(cell); */
  cookieBody.appendChild(row); 
}

// store inputs for prototype and shop Object constructor
var seattle = new CookieShop('Seattle', 23, 65, 6.3);
var tokyo = new CookieShop('Tokyo', 3, 24, 1.2);
var dubai = new CookieShop('Dubai', 11, 38, 3.7);
var paris = new CookieShop('Paris', 20, 38, 2.3);
var lima = new CookieShop('Lima', 2, 16, 4.6);

// table creation
var sectionElement = document.getElementById('shops');
var cookieTable = document.createElement('table');
sectionElement.appendChild(cookieTable); 
var cookieBody = document.createElement('tbody');
cookieTable.appendChild(cookieBody);
var tableHead = document.createElement('thead');

// hours header creation
var blankSpace = document.createElement('td');
tableHead.appendChild(blankSpace);
for (var j = 0; j < hoursOfOp.length; j++) {
  var hoursHeader = document.createElement('th')
  hoursHeader.textContent = hoursOfOp[j];
  tableHead.appendChild(hoursHeader)
}
var dailyTotals = document.createElement('th');
dailyTotals.textContent = 'Daily Location Totals';
tableHead.appendChild(dailyTotals)

// footer totals creation
var cookieFoot = document.createElement('tfoot');
var footRow = document.createElement('tr');
cookieFoot.appendChild(footRow);
var footCell = document.createElement('td');
footRow.appendChild(footCell);
footCell.textContent = 'Totals';

// Cookie sums for all stores each hour
for (var k = 0; k < hoursOfOp.length + 1; k++) {
  var foot = document.createElement('td');
  footRow.appendChild(foot);
  foot.textContent = (seattle.hours[k] + tokyo.hours[k] + dubai.hours[k] + paris.hours[k] + lima.hours[k]);
}

// appends footer total sums to table
cookieTable.appendChild(tableHead);
cookieTable.appendChild(cookieFoot);

seattle.display()
tokyo.display()
dubai.display()
paris.display()
lima.display()