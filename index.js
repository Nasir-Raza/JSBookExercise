// Alerts
document.write("<h1>Alerts</h1>");

alert("Thanks for your input!");
window.alert("Thanks for your input!");

// Variables for Strings
document.write("<h1>Variables for Strings</h1>");

var studentName = "Ali Khan";
var studentAge = "17 years old";
var institutionName = "SSUET";
var courseName = "Web / Mobile Application & Cloud Computing - Module A";

alert("My name is " + studentName + ", I am " + studentAge + ", " + "I study in " + institutionName + ", I take " + courseName + " classes.");

// Variables for Numbers
document.write("<h1>Variables for Numbers</h1>");

var numberOfVists = 21;
document.write("<h2>You have visited this site " + numberOfVists + " times</h2>");

var birthYear = 1990;
document.write("<br/>");
document.write("<h2>Below text written through Javascript</h2>");
document.write("<h2>My birth year is " + birthYear + "</h2>");
document.write("<h2>Data type of my declared variable is " + typeof(birthYear) + "</h2>" );


// Variable Names Legal and Illegal
document.write("<h1>Variable Names Legal and Illegal</h1>");

var age = 17, fullName = "Ali Raza", institute = "SMIT";
document.write("<p>Age: " + age + ", Full Name: " + fullName + ", Institute: " +  institute + "</p>");


// Legal variable names

var age, fullName, _class, $currency, numberOfStudents;
document.write("<h2>Legal variable name examples</h2>");
document.write("<h2>1. age, 2. fullName, 3. _class, 4. $currency, 5. numberOfStudents</h2>");

// Illegal variable names
document.write("<h2>Illegal variable name examples</h2>");
document.write("<h2>1. *fullName, 2. 1age, 3. &class, 4. @currency, 5. number!Of!Students</h2>");

document.write("<h2>Hello to the world of JavaScript</h2>");
document.write("<h2>Legal / Illegal variable name examples</h2>");
document.write("<h2>Rules for naming JS variables</h2>");
document.write("<h3>a. Variable names can only contain <i>alphabets, numbers, dollar '$' signs </i> and <i>underscores '_'</i>. For example $my_1stVariable</h3>");
document.write("<h3>b. Variables must begin with a <i>dollar '$' sign, underscore '_'</i> or <i>alphabet</i>. For example $name, _name or name</h3>");

document.write("<h3>c. Variable names are case <u>sensitive</u></h3>");

document.write("<h3>d. Variable names should not be JS <u>keywords</u></h3>");


// Math expressions: Familiar operators
document.write("<h1>Math expressions: Familiar operators</h1>");

var num = 10;
var popularNumber = num + 200;

alert(popularNumber);

var num1 = 10;
var anotherNum = 1;
var popularNumber1 = num1 + anotherNum;

alert(popularNumber1);

// Math expressions: Unfamiliar operators
document.write("<h1>Math expressions: Unfamiliar operators</h1>");

var num = 1;
alert("Post increment i.e. num++ " + num++);
alert("Pre increment i.e. ++num " + ++num);

var newNum = 2;

alert("Post decrement i.e. newNum-- " + newNum--);
alert("Pre decrement i.e. --newNum " + --newNum);


// Math expressions: Eliminating ambiguity
document.write("<h1>Math expressions: Eliminating ambiguity</h1>");

var resultOfComputation = ((2 * 4) * 4) + 2;

document.write("<h2>Result of math expression ((2 * 4) * 4) + 2 is: " + resultOfComputation + "</h2>");

resultOfComputation = (2 * 4) * (4 + 2);

document.write("<h2>Result of math expression (2 * 4) * (4 + 2) is: " + resultOfComputation + "</h2>");

// Concatenating text strings
document.write("<h1>Concatenating text strings</h1>");

var tableNum = parseInt(prompt("Enter Table number 'must be greter than 0'"));

if (tableNum > 0){
document.write("<h2>" + tableNum + " x 1 = " + tableNum * 1 + "</h2>");
document.write("<h2>\n" + tableNum + " x 2 = " + tableNum * 2 + "</h2>");
document.write("<h2>\n" + tableNum + " x 3 = " + tableNum * 3 + "</h2>");
document.write("<h2>\n" + tableNum + " x 4 = " + tableNum * 4 + "</h2>");
document.write("<h2>\n" + tableNum + " x 5 = " + tableNum * 5 + "</h2>");
document.write("<h2>\n" + tableNum + " x 6 = " + tableNum * 6 + "</h2>");
document.write("<h2>\n" + tableNum + " x 7 = " + tableNum * 7 + "</h2>");
document.write("<h2>\n" + tableNum + " x 8 = " + tableNum * 8 + "</h2>");
document.write("<h2>\n" + tableNum + " x 9 = " + tableNum * 9 + "</h2>");
document.write("<h2>\n" + tableNum + " x 10 = " + tableNum * 10 + "</h2>");
}
else
{
    let tableNum = 5;
    document.write("<h2>" + tableNum + " x 1 = " + tableNum * 1 + "</h2>");
    document.write("<h2>\n" + tableNum + " x 2 = " + tableNum * 2 + "</h2>");
    document.write("<h2>\n" + tableNum + " x 3 = " + tableNum * 3 + "</h2>");
    document.write("<h2>\n" + tableNum + " x 4 = " + tableNum * 4 + "</h2>");
    document.write("<h2>\n" + tableNum + " x 5 = " + tableNum * 5 + "</h2>");
    document.write("<h2>\n" + tableNum + " x 6 = " + tableNum * 6 + "</h2>");
    document.write("<h2>\n" + tableNum + " x 7 = " + tableNum * 7 + "</h2>");
    document.write("<h2>\n" + tableNum + " x 8 = " + tableNum * 8 + "</h2>");
    document.write("<h2>\n" + tableNum + " x 9 = " + tableNum * 9 + "</h2>");
    document.write("<h2>\n" + tableNum + " x 10 = " + tableNum * 10 + "</h2>");
    
}

// Prompts
document.write("<h1>Prompts</h1>");

var fullName = prompt("Enter your full name:");
document.write("<h2>Your full name is " + fullName + "</h2>");


// if statements
document.write("<h1>if statements</h1>");

var age = parseInt(prompt("Please enter age"));

if (age > 18){
    alert("Age : " + age + " Old enough");
}
else{
    alert("Age : " + age + " Too young");
}
// Exercise # 2

var stdName  = new Array();

// Exercise # 3

var studentName = ["Nasir", "Ali", "Raza", "Abbas"];


// Exercise # 4

var evenNumber = [2, 4, 6, 8, 10, 12, 14];

// Exercise # 5

var boolArray = [true, false, true, false];

// Exercise # 6

var mixArray = [1, "Mixed", 2, "Array", 3, true, 4, false];



// Exercise # 7

var mobNetworksPakistan = ["Ufone", "Telenor", "Jazz", "Zong"];

// Exercise # 8

var qualInPakistan = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h1>Qualifications:</h1>");

for (var i = 0; i < qualInPakistan.length; i++ ){
    document.write(i + 1 + ") " + qualInPakistan[i] + "<br />");
}



// Exercise # 9

var topMovies2015 = [];

topMovies2015.push("Avengers: Age Of Ultron");
topMovies2015.push("Spectre");
topMovies2015.push("Jurrasic World");
topMovies2015.push("Inside Out");

document.write("<h1>Top movies of 2015:</h1>");

for (var i = 0; i < topMovies2015.length; i++ ){
    document.write(i + 1 + ") " + topMovies2015[i] + "<br />");
}

document.write("<br /><h2>Length of the array: " + topMovies2015.length + "</h2>");

// Exercise # 10

var favCars = ["Audi", "Volvo", "Ford", "Lamborghini"];

document.write("<h1>Favorite Cars:</h1>");

for (var i = 0; i < favCars.length; i++ ){
    if ( i == 0 || i == favCars.length-1){
        let counter = i == 0 ? "First" : "Last";
        document.write(counter + " index of the array: " + i + "<br />");
        document.write("Car at " + counter.toLowerCase() + " index of the array: " + favCars[i] + "<br />");
    }
}

// Exercise # 11

stdName = ["Michael", "Jhon", "Tony"];
obtMarks = [320, 230, 480]

document.write("<h1>Student Marks:</h1>");

for (var i = 0; i < stdName.length; i++ ){
        document.write("Score of " + stdName[i] + " is " + obtMarks[i] + ". Percentage: " + Math.round(((obtMarks[i] / 500)*100)) + "%<br />");
}

// Exercise # 12

var colours = ["Red", "Green", "Blue", "Yellow", "Black"];


document.write("<h1>Colors:</h1>");
document.write(colours + "<br />");

var begColor = prompt("Please enter the color you wants to add at the beginning of array");
colours.unshift(begColor);
document.write(colours + "<br />");

var endColor = prompt("Please enter the color you wants to add at the end of array");
colours.push(endColor);
document.write(colours + "<br />");

colours.unshift("Violet", "Brown");
document.write(colours + "<br />");

colours.shift();
document.write(colours + "<br />");

colours.pop();
document.write(colours + "<br />");

var arrayIndex = parseInt(prompt("Please enter the index number on which you want to add color to array"));
endColor = prompt("Please enter the color you wants to add to array");
colours.splice(arrayIndex, 0, endColor);
document.write(colours + "<br />");

arrayIndex = parseInt(prompt("Please enter the index number at which you want to delete color from array"));

var delNumOfColors = parseInt(prompt("Please enter the number that how many colors you want to delete from array"));

colours.splice(arrayIndex, delNumOfColors);
document.write(colours + "<br />");



// Exercise # 13

var stdScores = [320, 230, 480, 120];

document.write("<br />Scores of Students: " + stdScores);
document.write("<br />Ordered Scores of Students: " + stdScores.sort());

// Exercise # 14

var fruits = ["strawberry", "apple", "orange", "banana"];

document.write("<br /><br />Fruits list:<br />" + fruits);
document.write("<br />Ordered fruits list:<br />" + fruits.sort());

// Exercise # 15

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2,5);

document.write("<br /><br />Cities list:<br />" + cities);
document.write("<br /><br />Selected cities list:<br />" + selectedCities);

// Exercise # 16

var animals = ["This ", " is ", " my ", " cat"];

document.write("<br /><br />Array:<br />" + animals);
document.write("<br /><br />String:<br />" + animals.join(""));

// Exercise # 17

var computerDevices = [];

computerDevices.push("keyboard");
computerDevices.push("mouse");
computerDevices.push("printer");
computerDevices.push("monitor");

document.write("<h2>Devices:<br />" + computerDevices + "</h2>");

for (var i = 0; i < computerDevices.length; i++){
    document.write("<br/>Out:<br />" + computerDevices[i]);
}

// Exercise # 18

document.write("<h2>Devices:<br />" + computerDevices + "</h2>");

for (var i = computerDevices.length - 1; i >= 0; i--){
    document.write("<br/>Out:<br />" + computerDevices[i]);
}



// Exercise # 19

phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]

var str;

for (var i = 0; i < phoneManufacturers.length; i++){
    if (i == 0){
        str = "<select id='phman' name='phman'>" + "<option value='" + phoneManufacturers[i].toLowerCase() + "'>" + phoneManufacturers[i] + "</option>"
    }
    else{
        str = str + "<option value='" + phoneManufacturers[i].toLowerCase() + "'>" + phoneManufacturers[i] + "</option>"
    }
}
str = str + "</select>"

console.log(str);

document.write("<br /><br />" + str);
 

// Chapter # 20

var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];

for (var i = 0; i < firstNames.length; i++) {
    for (var j = 0; j < lastNames.length; j++) {
        fullNames.push(firstNames[i] + lastNames[j]);
    }
}
for (i = 0; i < fullNames.length; i++)
document.write(fullNames[i]+"<br/>");

//Exercise # 3

for (var i = 0; i < 3; i++) {
    console.log("Outer loop iteration: " + i);
    for (var j = 0; j < 10; j++) {
      if (j >= 1) {
        break;
      }
    }
  }


