function myCreateFunction() {
let table = document.getElementById("main");
let row = table.insertRow(5);
let id = row.insertCell(0);
let name = row.insertCell(1);
let mobile = row.insertCell(2);
let email = row.insertCell(3);
                                        

id.innerHTML = "5";
name.innerHTML = "pratap";
mobile.innerHTML = "883468436";
email.innerHTML = "example@gmail.com";

// array of object
let obj = [
{ id: 5, name: "pratap", mobile: 883468436,email:"example@gmail.com"  },
{ id: 5, name: "akshay", mobile: 883468436, email: "example@gmail.com" },

]
//json stringify
let myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON;



}
// function to delete row 
function myDeleteFunction() {
document.getElementById("main").deleteRow(5);
document.getElementById("demo").remove(Object);
}

