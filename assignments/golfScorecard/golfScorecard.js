let element = [];

let totals = [];
// assign elements of final row to variables
totals[1]
= document.getElementById("parTotal");
totals[1].innerHTML
= "0";
totals[2]
= document.getElementById("scoreTotal");
totals[2].innerHTML
= "0";
totals[3]
= document.getElementById("overTotal");
totals[3].innerHTML
= "0";

let currentScore;
let parTotal;
let nextPar;
let scoreTotal;


for (let i=1; i<19; i++) {
  // assign the entire table row for hole i to a variable, elem
  element[i]
  = document.getElementById(i);
  
  // assign a function to the + button
  element[i].children[4].children[0].onclick 
  = function(){add1(element[i], totals[2]);};
  
  // assign a function to the - button
  element[i].children[4].children[1].onclick 
  = function(){subtract1(element[i], totals[2]);};
  
  // compute and display par total
  parTotal = totals[1].innerHTML;
  parTotal = Number.parseInt(parTotal);
  nextPar = element[i].children[1].innerHTML;
  nextPar = Number.parseInt(nextPar);
  totals[1].innerHTML = parTotal + nextPar
} 

// create an "add1" function
function add1 (elem, total) {
  if (elem.children[2].innerHTML == "-") {
    elem.children[2].innerHTML = "1";
  }
  else {
    currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
  
  // call a function to compute over/under par
  elem.children[3].innerHTML 
  = overUnder(elem);
  
  // increment the score total
  scoreTotal = total.innerHTML;
  scoreTotal = Number.parseInt(scoreTotal);
  total.innerHTML = scoreTotal + 1;
  
  // call a function to get the over/under total
  totals[3].innerHTML
  = overUnderTotal();
}

// create a "subtract1" function
function subtract1 (elem, total) {
  // decrements the score total
  if (total.innerHTML != "0" && elem.children[2].innerHTML != "-") {
    // decrement the score total
    scoreTotal = total.innerHTML;
    scoreTotal = Number.parseInt(scoreTotal);
    total.innerHTML = scoreTotal - 1;
  }
  
  if (elem.children[2].innerHTML == "-");
  else if (elem.children[2].innerHTML == "1") {
    elem.children[2].innerHTML = "-";
  }
  else {
    currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
  }
  
  // call a function to compute over/under par
  elem.children[3].innerHTML 
  = overUnder(elem);
  
  // call a function to get the over/under total
  if (total.innerHTML != "0") 
    totals[3].innerHTML = overUnderTotal();
  else totals[3].innerHTML = 0;
}

// create an "overUnder" function
function overUnder (elem) {
  let over;
  if (elem.children[2].innerHTML == "-") 
    over = "-";
  else 
    over = elem.children[2].innerHTML - elem.children[1].innerHTML;
  return over;
}

// create an "overUnderTotal" function
function overUnderTotal () {
  // compute and display the over/under total
  scoreTotal = totals[2].innerHTML;
  scoreTotal = Number.parseInt(scoreTotal);
  if (scoreTotal != 0) 
    return totals[3].innerHTML = scoreTotal - parTotal - 4;
}
