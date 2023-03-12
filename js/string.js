function ques1(){
    // 1.	Declare a variable called username.
	var username;
    username = prompt("Enteryour username :", "Human");
     alert("Your username is: " + username);   
}

function ques2(){
    // 2.	Declare a variable called myName & assign to it a string 
	// that represents your Full Name.

	var myName;		//declare 
	myName = "Rabia Yousuf";
    alert("My self "+myName);
}

function ques3(){
        	// 3.	Write script to
            // a)	Declare a JS variable, titled message.
            // b)	Assign “Hello World” to variable message
            // c)	Display the message in alert box.

	var message;		//declare 
	message = "Hello World!";

	alert(message);


}
function ques4(){
        // 4.	Write a script to save student’s 
	// bio data in JS variables and 
	// show the data in alert boxes

	var student_name,
    father_name,
    age,
    certificate;


student_name = prompt("Enter Student Name: ","Ahmed");
father_name = prompt("Enter Father Name: ","Ali Raza");
father_name = prompt("Enter Student Age: ","19");
age = 19;
certificate = "Certified Mobile Application Development";

alert(student_name);
alert(father_name);
alert(age + " years old");
alert(certificate);

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
