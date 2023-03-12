function ques1(){
    // age declare
	var age;

	// age assign
	 age = 19;

	 alert("I am " + age + " years old");  
}

function ques2(){
    // visitors declare
	var visitor;

	// age assign
	visitor = 200;

	 alert("You have visited this site " + visitor + " times");

}

function ques3(){
        	// visitors declare
	var birthYear;

	// age assign
	birthYear = 2002;

	document.write("My birth year is " + birthYear + "<br>");
	document.write("Data type of my declared variable is " + typeof(birthYear));


}
function ques4(){
       //4. A visitor visits an online clothing store www.xyzClothing.com .
	// variables
	var clothing_store_name,
    visitor_name,
    product_title,
    quantity;

// asign
clothing_store_name = "XYZ Clothing Store";
visitor_name = "Barein";
product_title = "Scarf";
quantity = 30;

document.write("<b>" + visitor_name + "</b> ordered <b>" + quantity + product_title + "</b>(s) on " + clothing_store_name);

}
function ques5(){
    // Write a script to display the following alert using one JS
    // variable:
        let str = "PIZZA";
        for (let i = str.length; i > 0; i--) {
            pizza.slice(0,i);
            alert(pizza);
            
        }
        
        alert(browser);

}
function ques6(){
//     Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)
        let email;
        email = prompt("Enter Your email Address: \ne.g. example@example.com", "");
        console.log("email ======= ", email);
        if( email == "" ){
            alert("You did not enter email");
        }else
        {
            alert("My email address is "+email);
        }
}
function ques7(){
//     7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:
        
        let book = "A smarter way to learn JavaScript";
        
        alert("I am trying to learn from the Book"+book);
}

function ques8(){
    // 8. Write a script to display this in browser through JS

        let msg = "Yah! I can write HTML content through JavaScript";
        
        document.write(msg);
}

function ques9(){
    // 9. Store following string in a variable and show in alert and
    // browser through JS
    // “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”


        let str = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
        
        alert(str);
}
