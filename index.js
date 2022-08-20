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

var x = prompt("Where does the Pope live?");
var correctAnswer = "Vatican";

if (x === correctAnswer) {
alert("Correct!");
}

// Comparison operators
document.write("<h1>Comparison operators</h1>");

if ("Rose" !== "rose"){
    alert("Rose is not equal rose");
}


// if...else and else if statements
document.write("<h1>if...else and else if statements</h1>");

var correctAnswer = "Vatican";
if (x === correctAnswer) {
    alert("Correct!");
}
else if (x === "Rome") {
    alert("Incorrect but close");
}
else {
    alert("Incorrect");
}


// Testing sets of conditions
document.write("<h1>Testing sets of conditions</h1>");

if (SAT > avg || GPA > 2.5 || sport === "football") {
    alert("Welcome to Bubba State!");
 }
 else {
     alert("Have you looked into appliance repair?");
 }

// if statements nested
document.write("<h1> if statements nested</h1>");

if (c === d) {
    if (x === y) {
        g = h;
 }
 else if (a === b) {
    g = h;
 }
 else {
    e = f;
 }
}
else {
    e = f;
}
    

// Arrays
document.write("<h1>Arrays</h1>");

var stdName  = new Array();

var studentName = ["Nasir", "Ali", "Raza", "Abbas"];

var evenNumber = [2, 4, 6, 8, 10, 12, 14];

var boolArray = [true, false, true, false];

var mixArray = [1, "Mixed", 2, "Array", 3, true, 4, false];


// Arrays: Adding and removing elements
document.write("<h1>Arrays: Adding and removing elements</h1>");

var topMovies2015 = [];

topMovies2015.push("Avengers: Age Of Ultron");
topMovies2015.push("Spectre");
topMovies2015.push("Jurrasic World");
topMovies2015.push("Inside Out");
topMovies2015.pop();

// Arrays: Removing, inserting and extracting elements
document.write("<h1>Arrays: Removing, inserting and extracting elements</h1>");

var colours = ["Red", "Green", "Blue", "Yellow", "Black"];

document.write("<h2>Colors:</h2>");
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

var stdScores = [320, 230, 480, 120];

document.write("<br />Scores of Students: " + stdScores);
document.write("<br />Ordered Scores of Students: " + stdScores.sort());

var fruits = ["strawberry", "apple", "orange", "banana"];

document.write("<br /><br />Fruits list:<br />" + fruits);
document.write("<br />Ordered fruits list:<br />" + fruits.sort());

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2,5);

document.write("<br /><br />Cities list:<br />" + cities);
document.write("<br /><br />Selected cities list:<br />" + selectedCities);



// for loops
document.write("<h1>for loops</h1>");

var qualInPakistan = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h2>Qualifications:</h2>");

for (var i = 0; i < qualInPakistan.length; i++ ){
    document.write(i + 1 + ") " + qualInPakistan[i] + "<br />");
}

var mobNetworksPakistan = ["Ufone", "Telenor", "Jazz", "Zong"];

document.write("<br /><h2>Mobile Networks in Pakistan:</h2>");

for (var i = 0; i < mobNetworksPakistan.length; i++ ){
    document.write(i + 1 + ") " + mobNetworksPakistan[i] + "<br />");
}

var favCars = ["Audi", "Volvo", "Ford", "Lamborghini"];

document.write("<br /><h2>Favorite Cars:</h2>");

for (var i = 0; i < favCars.length; i++ ){
    if ( i == 0 || i == favCars.length-1){
        let counter = i == 0 ? "First" : "Last";
        document.write(counter + " index of the array: " + i + "<br />");
        document.write("Car at " + counter.toLowerCase() + " index of the array: " + favCars[i] + "<br />");
    }
}

// for loops: Flags, Booleans, array length and loopus interruptus
document.write("<h1>for loops: Flags, Booleans, array length and loopus interruptus</h1>");


var numElements = cleanestCities.length;
var matchFound = false;

for (var i = 0; i < numElements; i++){
    if (cityToCheck === cleanestCities[i]) {
        matchFound = true;
        alert("It's one of the cleanest cities");
        break;
    }
}

if (matchFound === false) {
    alert("It's not on the list");
}


// for loops nested
document.write("<h1>for loops nested</h1>");

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

for (var i = 0; i < 3; i++) {
    console.log("Outer loop iteration: " + i);
    for (var j = 0; j < 10; j++) {
      if (j >= 1) {
        break;
      }
    }
  }

// Changing case
document.write("<h1>Changing case</h1>");

var cityToCheck = prompt("Enter your city");

cityToCheck = cityToCheck.toLowerCase();

var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];

for (var i = 0; i <= 4; i++) {
    if (cityToCheck === cleanestCities[i]) {
        alert("It's one of the cleanest cities");
    }
}

// Strings: Measuring length and extracting parts
document.write("<h1>Strings: Measuring length and extracting parts</h1>");

 var str = prompt("Enter some text");
 var numChars = str.length;
    for (var i = 0; i < numChars; i++) {
        if (str.slice(i, i + 2) === " ") {
            alert("No double spaces!");
            break;
        }
}

// Strings: Finding segments
document.write("<h1>Strings: Finding segments</h1>");

var text = "It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy."

var firstChar = text.indexOf("World War II");

if (firstChar !== -1) {
    text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
}

// Strings: Finding a character at a location
document.write("<h1>Strings: Finding a character at a location</h1>");

var text = "Congratulations! you have won";

for (var i = 0; i < text.length; i++) {
    if (text.charAt(i) === "!") {
        alert("Exclamation point found!");
        break;
    }
}

// Strings: Replacing characters
document.write("<h1>Strings: Replacing characters</h1>");

var text = "It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy."

for (var i = 0; i < text.length; i++) {
    if (text.slice(i, i + 12) === "World War II") {
        text = text.slice(0, 1) + "the Second World War" + text.slice(i + 12);
    }
}

text = "It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy."    

var newText = text.replace("World War II", "the Second World War");

text = "It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy. It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy. It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy."

var newText = text.replace(/World War II/g, "the Second World War");

// Rounding numbers
document.write("<h1>Rounding numbers</h1>");

var scoreAvg = Math.round(.0678437);
document.write("<h2>Math.round(.0678437): " + scoreAvg + "</h2>");
var scoreAvg = Math.ceil(.000001);
document.write("<h2>Math.ceil(.000001): " + scoreAvg + "</h2>");
var scoreAvg = Math.floor(.999999);
document.write("<h2>Math.floor(.999999): " + scoreAvg + "</h2>");

// Generating random numbers
document.write("<h1>Generating random numbers</h1>");

var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 6) + 1;
var numberOfStars = Math.floor(improvedNum);

document.write("<h2>Random number of Stars: " + numberOfStars + "</h2>");

// Converting strings to integers and decimals
document.write("<h1>Converting strings to integers and decimals</h1>");


var myInteger = parseInt("1.9999");
var myFractional = parseFloat("1.9999");

document.write("<h2>String to integer parseInt('1.9999'): " + myInteger + "</h2>");
document.write("<h2>String to decimal parseFloat('1.9999'): " + myFractional + "</h2>");


// Converting strings to numbers, numbers to strings
document.write("<h1>Converting strings to numbers, numbers to strings</h1>");

var integerString = "24"
var num = Number(integerString);

var floatingNumString = "24.9876";
var num = Number(floatingNumString);

var numberAsNumber = 1234;
var numberAsString = numberAsNumber.toString();

// Controlling the length of decimals
document.write("<h1>Controlling the length of decimals</h1>");

var str = num.toString();
if (str.charAt(str.length - 1) === "5") {
    str = str.slice(0, str.length - 1) + "6";
}

num = Number(str);
prettyNum = num.toFixed(2);


// Getting the current date and time
document.write("<h1>Getting the current date and time</h1>");

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];

document.write("<h2>"  + nameOfToday + "</h2>");

// Extracting parts of the date and time
document.write("<h1>Extracting parts of the date and time</h1>");

var d = new Date();
var currentMonth = d.getMonth();

var year =  d.getFullYear();


// Specifying a date and time
document.write("<h1>Specifying a date and time</h1>");

var today = new Date();

var doomsday = new Date("June 30, 2035");

var msToday = today.getTime();
var msDoomsday = doomsday.getTime();

var msDiff = msDoomsday - msToday;

var dDiff = msDiff / (1000 * 60 * 60 * 24);

// Changing elements of a date and time
document.write("<h1>Changing elements of a date and time</h1>");

var d = new Date();

d.setHours(13);
d.setMinutes(05);
d.setSeconds(55);


// Functions
document.write("<h1>Functions</h1>");

function tellTime() {
    var now = new Date();
    var theHr = now.getHours();
    var theMin = now.getMinutes();
    alert("Current time: "+ theHr + ":" + theMin);
}

tellTime();

// Functions: Passing them data
document.write("<h1>Functions: Passing them data</h1>");

greetUser("Hello, there.");

function greetUser(greeting) {
    alert(greeting);
}


// Functions: Passing data back from them
document.write("<h1>Functions: Passing data back from them</h1>");


var result = addNumber();

function addNumber(){
    return 5 + 7;
}


// switch statements: How to start them
document.write("<h1>switch statements: How to start them</h1>");

switch(dayOfWk) {
    case "Sat" :
        alert("Whoopee");
        break;
    case "Sun" :
        alert("Whoopee");
        break;
    case "Fri" :
        alert("TGIF!");
        break;
    default :
        alert("Shoot me now!");
}

// switch statements: How to complete them
document.write("<h1>switch statements: How to complete them</h1>");

switch(dayOfWk) {
    case "Sat" :
        alert("Whoopee");
        break;
    case "Sun" :
        alert("Whoopee");
        break;
    case "Fri" :
        alert("TGIF!");
        break;
    default :
        alert("Shoot me now!");
}


// while loops
document.write("<h1>while loops</h1>");

var i = 0;

while (i <= 3) {
    alert(i);
    i++;
}

// do...while loops
document.write("<h1>do...while loops</h1>");

var i = 0;
do {
    alert(i);
    i++;
} while (i <= 3);

// Events: button
document.write("<h1>Events: button</h1>");

<input type="button" value="Click" onClick="alert('Hello world!');"></input>


// Events: mouse
document.write("<h1>Events: mouse</h1>");

<h1 onMouseover="alert('Be sure to get your shopping done today.');">World Ends Tomorrow</h1>

// Events: fields
document.write("<h1>Events: fields</h1>");

"Email:<br/><input type="text" size="30" onFocus="this.style.backgroundColor='yellow';"">

// Reading field values
document.write("<h1>Reading field values</h1>");

function checkAddress(fieldId) {
var val = document.getElementById(fieldId).value;
    if (val === "") {
        alert("Email address required.");
    }
}

// Setting field values
document.write("<h1>Setting field values</h1>");

function fillCity() {
    var cityName;
    var zipEntered = document.getElementById("zip").value;
    switch (zipEntered) {
        case "60608" :
            cityName = "Chicago";
            break;
        case "68114" :
            cityName = "Omaha";
            break;
        case "53212" :
            cityName = "Milwaukee";
    }
    document.getElementById("city").value = cityName;
}


// Swapping images and setting classes
document.write("<h1>Swapping images and setting classes</h1>");


function enlargeForm() {
    var frm = document.getElementById("link1");
    frm.className = "jumbo";
}
    

// Setting styles
document.write("<h1>Setting styles</h1>");


document.getElementById("mainPic").style.margin = "0 10px 0 10px;";

// Target all elements by tag name
document.write("<h1>Target all elements by tag name</h1>");


var pics = document.getElementsByTagName("img");
var divs = document.getElementsByTagName("div");
var ulists = document.getElementsByTagName("ul");
