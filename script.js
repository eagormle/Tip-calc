var containerEle = 
document.body.querySelector(".container");

var bill=Number(prompt("What is your bill?"));

var tax = (bill)*.07;

var tip = (bill+tax)*.05;

var total = (bill+tax+tip)

containerEle.innerHTML=total