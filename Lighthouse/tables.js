/*
  

   Author: Wilman Gonzales   
   Date: 5/16/2014    

   Filename: tables.js

   Function List:

   showTable()
      Shows a table of contributors to the Lighthouse

   showSummary()
      Shows a table summarizing the contributions made to the Lighthouse

*/

function showTable() {
	document.write("<table id='contributors'>");
document.write("<thead>");
document.write("<tr>");
document.write("<th>Dates</th><th>Amount</th>");
document.write("<th>First Names</th><th>Last Names</th>");
document.write("<th>Address</th>");
document.write("</tr>");
document.write("</thead>");
document.write("<tbody>");
var x = date.length; 

 for (i = 0; i < x; i++) {
document.write("<tr>");
document.write("<td>" + date[i] + "</td>");
document.write("<td class='amt'>" + amount[i] + "</td>");
document.write("<td>" + firstName[i] + "</td>");
document.write("<td>" + lastName[i] + "</td>");
document.write("<td>" + street[i] + "<br />");
document.write(city[i] + ", " + state[i] + " " + zip[i]);
document.write("</td>");
document.write("</tr>");
}
document.write("</tbody>");
document.write("</table>");
}
function showSummary() { 

var total = 0;
var x = date.length;
for (i = 0; i < x; i++) {
total = amount[i] + total;
}
document.write("<table id = 'sumTable'>");
document.write("<tr>");
document.write("<th id='sumTitle' colspan='2'>Summary</th>");
document.write("</tr>");
document.write("<tr>");
document.write("<th>Contributors</th>");
document.write("<td>" + x + "</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<th>Amount</th>");
document.write("<td>$" + total + "</td>");
document.write("</tr>");
document.write("</table>");
} 