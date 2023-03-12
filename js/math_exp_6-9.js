function ques1(){
//     1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
var input_num = +prompt("Enter Number");
    document.write("<h3>Result:<br></h3>");

    document.write("<p>The value of a is: " + input_num + "</p>");
    document.write(".........................................<br>");
    
    document.write("<p>The value of ++a is: " + ++input_num + "</p>");
    document.write("<p>Now the value of a is: " + ++input_num + "</p><br>");

    document.write("<p>The value of a++ is: " + input_num++ + "</p>");
    document.write("<p>Now the value of a is: " + input_num++ + "</p><br>");

    document.write("<p>The value of --a is: " + --input_num + "</p>");
    document.write("<p>Now the value of a is: " + --input_num + "</p><br>");

    document.write("<p>The value of a-- is: "+ input_num-- + "</p>");
    document.write("<p>Now the value of a is: "+ input_num-- + "</p><br>");

}

function ques2(){
    var a = 2,b = 1, 
        result;
    // var result = --a - --b + ++b + b--;
    document.write("Output: result = --a - --b + ++b + b--<br></h3>");

    a = --a;

    document.write("<p>--a: " + a + "</p>");
    // document.write(".........................................<br>");
    
    result = a - --b;
    document.write("<p>--a - --b: " + result + "</p>");

    result = result + ++b;
    document.write("<p>--a - --b + ++b: " + result  + "</p>");

    result = result + b--;
    document.write("<p>--a - --b + ++b + b--: " + result + "</p>");

    document.write("<p>a is: " + a + "</p>");
    document.write("<p>b is: " + b + "</p>");
    document.write("<p>result is: " + result + "</p>");
}

function ques3(){
//     3. Write a program that takes input a name from user &
// greet the user
let name = prompt("Enter your Name:");
alert("Welcome "+ name+"!");
}

function ques4(){
//     5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

// Table of number
alert("Alert:\nIf You not Enter any number for table,\nDefault table of 5 will be Display.")
var table_of_no = prompt("Enter Number for Table:", "5"
// "5 *  1 =  5<br>" + 
// "5 *  2 = 10<br>" +
// "5 *  3 = 15<br>" +
// "5 *  4 = 20<br>" +
// "5 *  5 = 25<br>" +
// "5 *  6 = 30<br>" +
// "5 *  7 = 35<br>" +
// "5 *  8 = 40<br>" +
// "5 *  9 = 45<br>" +
// "5 * 10 = 50<br>" 
);
// document.write("<h3>Result:<br></h3>");

// result = table_of_no * a;


document.write("Without Using For Loop");
document.write("<p>Table of " + table_of_no + "</p><br>");
        
document.write(table_of_no + "*" + 1 + "=" + table_of_no * 1 + "<br>") ;
document.write(table_of_no + "*" + 2 + "=" + table_of_no * 2 + "<br>") ;
document.write(table_of_no + "*" + 3 + "=" + table_of_no * 3 + "<br>") ;
document.write(table_of_no + "*" + 4 + "=" + table_of_no * 4 + "<br>") ;
document.write(table_of_no + "*" + 5 + "=" + table_of_no * 5 + "<br>") ;
document.write(table_of_no + "*" + 6 + "=" + table_of_no * 6 + "<br>") ;
document.write(table_of_no + "*" + 7 + "=" + table_of_no * 7 + "<br>") ;
document.write(table_of_no + "*" + 8 + "=" + table_of_no * 8 + "<br>") ;
document.write(table_of_no + "*" + 9 + "=" + table_of_no * 9 + "<br>") ;
document.write(table_of_no + "*" + 10 + "=" + table_of_no * 10 + "<br>") ;

document.write("<br>Using For Loop");
document.write("<p>Table of " + table_of_no + "</p><br>");

for(var a=1 ; a<= 10; a++)
    {
        result = table_of_no * a;
        document.write("<br>" + table_of_no + "*" + a + "=" + result) ;
    }

}

function ques5(){
//     6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// ALERTS | JAVASCRIPT
// Page 3 of 3
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

 // Input Subject name 
 var first_subject_name, 
 second_subject_name, 
 third_subject_name;

// Input Obtained marks in eack Subject
var first_subject_marks, 
 second_subject_marks, 
 third_subject_marks;


// Percentage eack Subject
var first_subject_percentage,
 second_subject_percentage,
 third_subject_percentage;

var all_subs_obtained_marks,
 all_subs_total_marks,
 all_subs_percentages;

var total_marks_each_sub = 100;

all_subs_total_marks = total_marks_each_sub * 3;

//Subject Name  
// Enter first_subject Name
first_subject = prompt("Enter Your First Subject Name: ");

// Enter second_subject Name
second_subject = prompt("Enter Your Second Subject Name: ");

// Enter third_subject Name
third_subject = prompt("Enter Your Third Subject Name: ");




//Obtained Marks
// Enter first_subject Marks
first_subject_marks= +prompt("Enter Your First Subject Marks: ");

// Enter second_subject Marks
second_subject_marks = +prompt("Enter Your Second Subject Marks: ");

// Enter third_subject Marks
third_subject_marks = +prompt("Enter Your Third Subject Marks: ");


//Total of All Sub Obtained Marks
all_subs_obtained_marks = ( first_subject_marks +  second_subject_marks + third_subject_marks );


// Percentage
// Percentage first_subject
first_subject_percentage = ( ( first_subject_marks / total_marks_each_sub ) * 100);
console.log(first_subject_percentage);
// Percentage second_subject
second_subject_percentage = ( ( second_subject_marks / total_marks_each_sub ) * 100);
console.log(second_subject_percentage);
// Percentage third_subject
third_subject_percentage = ( ( third_subject_marks / total_marks_each_sub ) * 100);
console.log(first_subject_percentage);
//Total of All Sub Percentages
all_subs_percentages = ( ( first_subject_percentage +  second_subject_percentage + third_subject_percentage ) / 3);


alert("Your Marks Sheet has been compiled successfully.");


document.write("<table><thead><tr><th>Subjects</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th><tr></thead><tbody><tr><td>" 
 + first_subject + "</td><td>" 
 + total_marks_each_sub + "</td><td>" 
 + first_subject_marks + "</td><td>" 
 + first_subject_percentage + "%</td></tr><tr><td>" 
 + second_subject + "</td><td>" 
 + total_marks_each_sub + "</td><td>" 
 + second_subject_marks + "</td><td>" 
 + second_subject_percentage + "%</td></tr><tr><td>" 
 + third_subject + "</td><td>" 
 + total_marks_each_sub + "</td><td>" 
 + third_subject_marks + "</td><td>" 
 + third_subject_percentage + "%</td></tr><tr><td></td><td><b>" 
 + all_subs_total_marks + "</b></td><td><b>" 
 + all_subs_obtained_marks + "</b></td><td><b>" 
 + all_subs_percentages +
 "%</b></tr></tbody></table>");

}