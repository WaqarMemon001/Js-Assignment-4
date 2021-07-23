/* Chapters 38 to 42  */

// Task no 1

function power(a, b) {
    var result = 1;
    if (b == undefined)
        exponent = 2;
    for (var i = 1; i <= b; i++) {
        result = result * a;
    }
    return result;
}

document.write(power(prompt("Enter a number to get power applied onto:"), prompt("Enter the power to be applied:"))  +"<br/>");

// task no 2


function leapYear(year) {
    var year1 = parseInt(year);
    switch (year1 % 4 == 0) {
        case true:
            document.write( "<br/>" + "Year " + year + " is a leap year");
            break;
        case false:
            document.write("Year " + year + " is not a leap year");
            break;
        default:
            document.write("Invalid input detected");
            break;

    }
}
leapYear(prompt("Enter any year to check leap year:"))




// // task no 3

document.write("<h1>Calculate Area</h1>");
var a = prompt("Enter value of first side of triangle:");
var b = prompt("Enter value of second side of triangle:");
var c = prompt("Enter value of third side of triangle:");

function calcS(a, b, c) {
    var S = (parseInt(a) + parseInt(b) + parseInt(c)) / 2;
    return S
}
var S = calcS(a, b, c);

function calcArea(a, b, c, S) {
    var area = S * ((S - parseInt(a)) * (S - parseInt(b)) * (S - parseInt(c)));
    document.write(area);
}
calcArea(a, b, c, S);


// // task no 4



document.write("<h1>Calculate Average and Percentage</h1>");
var marks1 = prompt("Enter marks for subject 1:");
var marks2 = prompt("Enter marks for subject 2:");
var marks3 = prompt("Enter marks for subject 3:");

function avePerce(marks1, marks2, marks3) {
    var average = (parseInt(marks1) + parseInt(marks2) + parseInt(marks3)) / 3;
    var percentage = ((parseInt(marks1) + parseInt(marks2) + parseInt(marks3)) / 300) * 100;
    document.write("Average of entered marks is: " + average);
    document.write("<br/>Percentage of entered marks is: " + percentage);
}
avePerce(marks1, marks2, marks3);




// // task no 5


document.write("<h5>Custom IndexOf Function</h5>");

function customIndexOf(str, qStr) {
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < qStr.length; j++) {
            if (str[i + j] !== qStr[j]) {
                break;
            }
            if (j === qStr.length - 1) {
                return i;
            }
        }
    }
    return -1;
}
var exampleString = prompt("Enter the example string:");
var queryString = prompt("Enter the part of string to find index of:");
document.writeln("Index of " + queryString + " in " + exampleString + " is " + (customIndexOf(exampleString, queryString)));





// // task no 6


document.write("<h1>Vowel Remover</h1>");
var str = prompt("Enter any string to remove vowels:");

function removeVowels(str) {
    return str.replace(/[aeiou]/gi, '');
}
var answer = removeVowels(str);
document.write("Output String: " + answer);






// // task no 7





// // task no 8










// // task no 9


document.write("<h1>Overtime Calculator</h1>");

var workingHours = prompt("Enter the working hours of employee:");
document.write("Entered working hours: " + workingHours);

function overtime(wh) {
    var ot = parseFloat(wh) - 40;
    if (ot <= 0) {
        document.write("No overtime or invalid input");
    } else {
        var result = ot * 12;
        document.write("<br/>The employee must be given RS. " + result + " as overtime with salary");
    }
}

overtime(workingHours);







// // task no 10


document.write("<h1>Notes Denomination</h1>");

function denomination(amountt) {
    var hCount = 0,
        fCount = 0,
        tCount = 0;
    if ((amt / 100) > 0) {
        hCount = Math.floor(amount / 100);
        amount -= (hCount * 100);
    }
    if ((amount / 50) > 0) {
        fCount = Math.floor(amount / 50);
        amount -= (fCount * 50);
    }
    if ((amount / 10) > 0) {
        tCount = Math.floor(amount / 10);
        amount -= (tCount * 10);
    }
    document.writeln("You will have " + hCount + " hundred notes " + fCount + " fifty notes " + tCount + " ten notes.")
}
var amount = prompt("Enter amount to withdraw:");
amt = parseInt(amount);
denomination(amount);

