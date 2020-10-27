// 6. modify basic JS object, with "this" keyword
let person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 45,
  fullName: function() {return this.firstName  + " " + person.lastName}
}
document.getElementById("1A").innerHTML = person.fullName();

// Instructions
// modify person object, above, as follows
// add properties, streetAddress, city, state, zipCode
// add method, fullAddress(), which prints full address on a single line.
// Display output of fullAddress() in <div id="1B">

person.streetAddress = "7400 Bay Road";
person.city = "University Center";
person.state = "Michigan";
person.zipCode = 48710;
person.fullAddress = function() {return this.streetAddress + ", " 
  + this.city + ", " + this.state + " " + this.zipCode};

document.getElementById("1B").innerHTML = person.fullAddress();


// ==================

// 7. create basic DOM object
let div2a = document.getElementById("2A");
let table2a = createTable("table2a");
div2a.appendChild(table2a);
table2a.setAttribute("style", "border:1px solid black;")
table2a.setAttribute("width", "100%")
appendTableRow3(table2a,"1","2","3");
appendTableRow3(table2a,"4","5","6");
appendTableRow3(table2a,"7","8","9");

// Instructions
// add a new function, appendTableRow5(), which adds 5-column rows instead of 3-column rows
// create a 5-row by 5-column table showing the numbers, 1 through 25
// put borders around the cells, too, not just around the edge of the table
// Display output in <div id="2B">

let div2b = document.getElementById("2B");
let table2b = createTable("table2b");
div2b.appendChild(table2b);
table2b.setAttribute("border", "1")
table2b.setAttribute("width", "100%")
// appendTableRow5 function can be found at bottom of JS code, below appendTableHeader3 function
appendTableRow5(table2b,"1","2","3","4","5");  
appendTableRow5(table2b,"6","7","8","9","10");
appendTableRow5(table2b,"11","12","13","14","15");
appendTableRow5(table2b,"16","17","18","19","20");
appendTableRow5(table2b,"21","22","23","24","25");

// ==================

// 8. create "totals" row and column in a table

// Instructions
// don't change table3A. it's just a template.
// Use table03A to create table3B. Create new functions as in item 2, above. 
// in table3B, add a column, "Price * Qty", and use JS to compute the correct values to put in the column
// add to table03B a "totals" row which gives the "grand total" of all numbers in the "Price * Qty" column

let div3b = document.getElementById("3B");
let table3a = document.getElementById("table03A");
let table3b = createTable("table3b");
table3b.setAttribute("border", "1")
table3b.setAttribute("width", "100%")

// appendTableHeader3 function can be found at bottom of JS code, below appendTableRow3 function
appendTableHeader3(table3b, table3a.children[0].children[0].children[0].innerHTML, 
table3a.children[0].children[0].children[1].innerHTML, table3a.children[0].children[0].children[2].innerHTML);
appendTableRow3(table3b, table3a.children[0].children[1].children[0].innerHTML, 
table3a.children[0].children[1].children[1].innerHTML, table3a.children[0].children[1].children[2].innerHTML);
appendTableRow3(table3b, table3a.children[0].children[2].children[0].innerHTML, 
table3a.children[0].children[2].children[1].innerHTML, table3a.children[0].children[2].children[2].innerHTML);
appendTableRow3(table3b, table3a.children[0].children[3].children[0].innerHTML, 
table3a.children[0].children[3].children[1].innerHTML, table3a.children[0].children[3].children[2].innerHTML);

modifyTable3b(table3b);
div3b.appendChild(table3b);

function modifyTable3b (table3b) {
  // create a new column
  let th = document.createElement("th");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  // populate the new column
  th.innerHTML = "Price * Qty";
  td1.innerHTML = table3b.children[0].children[1].children[1].innerHTML *
    table3b.children[0].children[1].children[2].innerHTML;
  td2.innerHTML = table3b.children[0].children[2].children[1].innerHTML *
    table3b.children[0].children[2].children[2].innerHTML;
  td3.innerHTML = table3b.children[0].children[3].children[1].innerHTML *
    table3b.children[0].children[3].children[2].innerHTML;
  // append the new column to table
  table3b.children[0].children[0].appendChild(th);
  table3b.children[0].children[1].appendChild(td1);
  table3b.children[0].children[2].appendChild(td2);
  table3b.children[0].children[3].appendChild(td3);
  // create a totals row
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");
  let td6 = document.createElement("td");
  let td7 = document.createElement("td");
  td6.innerHTML = "Grand Total:";
  td7.innerHTML = parseInt(table3b.children[0].children[1].children[3].innerHTML) +
    parseInt(table3b.children[0].children[2].children[3].innerHTML) + 
    parseInt(table3b.children[0].children[3].children[3].innerHTML);
  let tr = document.createElement("tr");
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td6);
  tr.appendChild(td7);
  table3b.children[0].appendChild(tr);
}


// 9. Revise a non-object-oriented HTML form. Make it so the field in focus displays *only* its own error (not the errors of all the other fields), however, if the user clicks the "validate" button, then display all errors.
// code below is from: https://www.guru99.com/practical-code-examples-using-javascript.html 

    // initialize error div id array
    let divs = new Array();
    divs[0] = "errFirst";
    divs[1] = "errLast";
    divs[2] = "errEmail";
    divs[3] = "errUid";
    divs[4] = "errPassword";
    divs[5] = "errConfirm";

    // function: validate() ---------------------------------------------
    function validate(n) {
        // initialize input array
        let inputs = new Array();
        inputs[0] = document.getElementById('first').value;
        inputs[1] = document.getElementById('last').value;
        inputs[2] = document.getElementById('email').value;
        inputs[3] = document.getElementById('uid').value;
        inputs[4] = document.getElementById('password').value;
        inputs[5] = document.getElementById('confirm').value;
        // initialize error array
        var errors = new Array();
        errors[0] = "<span style='color:red'>Please enter your first name!</span>";
        errors[1] = "<span style='color:red'>Please enter your last name!</span>";
        errors[2] = "<span style='color:red'>Please enter your email!</span>";
        errors[3] = "<span style='color:red'>Please enter your user id!</span>";
        errors[4] = "<span style='color:red'>Please enter your password!</span>";
        errors[5] = "<span style='color:red'>Please confirm your password!</span>";
        // update error array with error message for an individual field
        // the field is determined by the value passed into the funtion, n
        if (inputs[n] == "")
            document.getElementById(divs[n]).innerHTML =  errors[n];
        else if (n == 2) {
            let atpos = inputs[n].indexOf("@");
            let dotpos = inputs[n].lastIndexOf(".");
            // alert user if email address is invalid
            if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= inputs[n].length)
                document.getElementById('errEmail').innerHTML 
                  = "<span style='color: red'>Enter a valid email address!</span>";
            else
                document.getElementById(divs[n]).innerHTML = "OK!";
        } 
        else if (n == 5) {
            let first = document.getElementById('password').value;
            let second = document.getElementById('confirm').value;
            // alert user if password entry and confirmation do not match
            if (second != first)
                document.getElementById('errConfirm').innerHTML 
                  = "<span style='color: red'>Your passwords don't match!</span>";
            else
                document.getElementById(divs[n]).innerHTML = "OK!";
        } 
        else
            document.getElementById(divs[n]).innerHTML = "OK!";
        
    }

    // function: finalValidate() ------------------------------------
    function finalValidate() {
        let count = 0;
        // check if all inputs are valid
        for (i = 0; i < 6; i++) {
            if (document.getElementById(divs[i]).innerHTML == "OK!")
                count += 1;
        }
        // if all inputs are valid, notify the user
        if (count == 6)
            document.getElementById("errFinal").innerHTML 
              = "All the data you entered is correct!!!";
        // if not all inputs are valid, display any errors
        else {
            for (i = 0; i < 6; i++) {
              if (document.getElementById(divs[i]).innerHTML != "OK!")
                  validate(i);
            }
        } 
    }


// 10. Create a more object-oriented form

// Step 1. Create/append the DOM object 
let form00 = document.getElementById("form00");
let table00 = createTable("table00");
form00.appendChild(table00);

// Step 2. Create an JS object array containing form info 
let formArray = [
  {label: "First name:", inputType: "text", id: "first", 
    onkeyup: "validate(0);", errorId: "errFirst"}, 
  {label: "Last name:",  inputType: "text", id: "last",  
    onkeyup: "validate(1);", errorId: "errLast" }, 
  {label: "Email:",      inputType: "text", id: "email", 
    onkeyup: "validate(2);", errorId: "errEmail"}, 
  {label: "User Id:",    inputType: "text", id: "uid",   
    onkeyup: "validate(3);", errorId: "errUid"  }, 
  {label: "Password:",   inputType: "password", id: "password", 
    onkeyup: "validate(4);", errorId: "errPassword"}, 
  {label: "Confirm Password:", inputType: "password", id: "confirm", 
    onkeyup: "validate(5);", errorId: "errConfirm"}
];

// Step 3. loop through the JS object array to populate the form
let inputBox;
let div;
for (i in formArray) {
  // create form elements and set their attributes
  inputBox = document.createElement("input");
  inputBox.setAttribute("type", formArray[i].inputType);
  inputBox.setAttribute("id", formArray[i].id);
  inputBox.setAttribute("onkeyup", formArray[i].onkeyup);
  div = document.createElement("div");
  div.setAttribute("id", formArray[i].errorId);
  // call a function to append table row for the form
  appendTableRow3(table00, formArray[i].label, "", "");
  table00.children[0].children[i].children[1].appendChild(inputBox);
  table00.children[0].children[i].children[2].appendChild(div);
}


// General Functions -----------------

// append to tableobj a 3-column table row 
function appendTableRow3 (tableobj, col1, col2, col3) {
  // create column (table division) DOM objects
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  // insert content into columns
  td1.innerHTML = col1;
  td2.innerHTML = col2;
  td3.innerHTML = col3;
  // create table row DOM object
  let tr = document.createElement("tr");
  // append table divisions (columns) to table row
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  // append the row to the tbody element in the table
  tableobj.children[0].appendChild(tr);
}

// append to tableobj a 3-column table header 
function appendTableHeader3 (tableobj, col1, col2, col3) {
  // create column (table division) DOM objects
  let th1 = document.createElement("th");
  let th2 = document.createElement("th");
  let th3 = document.createElement("th");
  // insert content into columns
  th1.innerHTML = col1;
  th2.innerHTML = col2;
  th3.innerHTML = col3;
  // create table row DOM object
  let tr = document.createElement("tr");
  // append table divisions (columns) to table row
  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3);
  // append the row to the tbody element in the table
  tableobj.children[0].appendChild(tr);
}

// append to tableobj a 5-column table row 
function appendTableRow5 (tableobj, col1, col2, col3, col4, col5) {
  // create column (table division) DOM objects
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");
  // insert content into columns
  td1.innerHTML = col1;
  td2.innerHTML = col2;
  td3.innerHTML = col3;
  td4.innerHTML = col4;
  td5.innerHTML = col5;
  // create table row DOM object
  let tr = document.createElement("tr");
  // append table divisions (columns) to table row
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  // append the row to the tbody element in the table
  tableobj.children[0].appendChild(tr);
}

// return a DOM object containing an empty table (with tbody element)
function createTable(id) {
  let table = document.createElement("table");
  table.setAttribute("id", id);
  let tbody = document.createElement("tbody");
  table.appendChild(tbody);
  return table;
}
