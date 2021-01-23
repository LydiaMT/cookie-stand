'use strict';
var hoursOfOp = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]
// pushes inputs into empty shops array
var shops = []

// table creation
var sectionElement = document.getElementById('shops');
var cookieTable = document.createElement('table');
sectionElement.appendChild(cookieTable); 
var cookieBody = document.createElement('tbody');
cookieTable.appendChild(cookieBody);
var tableHead = document.createElement('thead');

// hours header creation
var shopsHeaderCell = document.createElement('th');
shopsHeaderCell.textContent = 'Shops' // adds the word 'Shops' to the added th cell
tableHead.appendChild(shopsHeaderCell);
for (var j = 0; j < hoursOfOp.length; j++) {
  var hoursHeader = document.createElement('th')
  hoursHeader.textContent = hoursOfOp[j];
  tableHead.appendChild(hoursHeader)
}
var dailyTotals = document.createElement('th');
dailyTotals.textContent = 'Daily Location Totals';
tableHead.appendChild(dailyTotals)
cookieTable.appendChild(tableHead);

// footer totals creation
var cookieFoot = document.createElement('tfoot');
cookieTable.appendChild(cookieFoot);

// Cookie sums for all stores each hour & appends footer
function populateTable () {
  // selects table footer
  var cookieFooter = document.querySelector('table tfoot');
  // selects foot row id
  var cookieNewTotals = document.querySelector('#newTotals')
  // if cookie totals already exist, remove it
  if (cookieNewTotals){
    cookieFooter.removeChild(cookieNewTotals)
  } 
  // this adds a new footer
  var newFootRow = document.createElement('tr');
  newFootRow.id = 'newTotals'
  var footCell = document.createElement('td');
  newFootRow.appendChild(footCell);
  footCell.textContent = 'Totals';

  // this is a dooble loop that adds the totals for all shops (i.e. all 'hours' aka cookie sales by all shops)
  var grandTotal = 0
  for (var k = 0; k < hoursOfOp.length; k++) {
    var foot = document.createElement('td');
    var shopsTotal = 0;
    for (var l = 0; l < shops.length; l++){
      shopsTotal += shops[l].hours[k]
    }
    foot.textContent = shopsTotal;
    newFootRow.appendChild(foot);
    grandTotal += shopsTotal;
  } 
  var grandTotalSale = document.createElement('td');
  grandTotalSale.textContent = grandTotal;
  newFootRow.appendChild(grandTotalSale);
  cookieFoot.appendChild(newFootRow);

  // Displays shops
  for (var l = 0; l < shops.length; l++){
    shops[l].display()
  }
}

// adds input from user into shops array, which is then pushed into the CookieShop object constructor, and runs through various table creation functions
var formElement = document.getElementById('cookie-shop-form');
formElement.addEventListener('submit', function(event) {
  event.preventDefault();

  // prevents user from inputting store twice
  var valid = true
  for (var a = 0; a < shops.length; a++){
    if (event.target.location.value === shops[a].name){
      valid = false
      alert('These store metrics are already input');
    }
  } 

  var location = event.target.location.value
  var minCustomer = parseInt(event.target.minCustomer.value)
  var maxCustomer = parseInt(event.target.maxCustomer.value)
  var averageCookieSales = parseFloat(event.target.averageCookieSales.value)
  
  // this avoids the user trying to submit the form with blanke fields
  if (!valid || !location || !minCustomer || !maxCustomer || !averageCookieSales) {
    return;
  }
  
  var cookieTableConstructor = new CookieShop(location, minCustomer, maxCustomer, averageCookieSales);
  shops.push(cookieTableConstructor);
  populateTable();
  // clears out input boxes for the user after the click submit! :D
  formElement.reset();
});

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
  this.totalCookiesSum = 0;
  this.generateArray = function generateArray() { 
    this.hours = []; // this empties the array for every time the function runs
    this.totalCookiesSum = 0; // this sets totalCookiesSum to zero for every time the function runs
    for (var i = 0; i < hoursOfOp.length; i++){
      this.randomAvgCust(); // Added to function so cookiesPerHr is true random each time. Creates new random average customer for each other by invoking the previous function
      this.cookiesPerHr(); // creates new random cookies per hour by invoking our previously created function
      this.hours.push(this.avgCookiePerHr) // pushes newly defined avgCookiesPerHr into the hours array
      this.totalCookiesSum += this.avgCookiePerHr;
    }
    // this.hours.push(totalCookiesSum);
  };
  this.generateArray();
}

// creates random cookie average sales for each hour for table data cells
CookieShop.prototype.display = function() {
  var cookieBody = document.querySelector('table tbody');
// give each new row a unique id
  var cookieLocation = document.querySelector('#' + this.name)
  if (cookieLocation){
    cookieBody.removeChild(cookieLocation)
  } 
  var row = document.createElement('tr');
  row.id = this.name
  var shopNames = document.createElement('td');
  shopNames.textContent = this.name;
  row.appendChild(shopNames);
  for (var i = 0; i < hoursOfOp.length; i++) {
    var cell = document.createElement('td')
    cell.textContent = this.hours[i];
    row.appendChild(cell);
  }
  var totalColumn= document.createElement('td')
  totalColumn.textContent = this.totalCookiesSum
  row.appendChild(totalColumn)
  cookieBody.appendChild(row); 
}

// store inputs for prototype and shop Object constructor
var seattle = new CookieShop('Seattle', 23, 65, 6.3);
var tokyo = new CookieShop('Tokyo', 3, 24, 1.2);
var dubai = new CookieShop('Dubai', 11, 38, 3.7);
var paris = new CookieShop('Paris', 20, 38, 2.3);
var lima = new CookieShop('Lima', 2, 16, 4.6);
shops.push(seattle, tokyo, dubai, paris, lima);

populateTable()