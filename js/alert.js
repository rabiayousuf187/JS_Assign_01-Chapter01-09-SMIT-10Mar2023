function ques1(){
     // Greet Script for visitors
     var greet = "Hello! \nWelcome to Web Designing and Development Web.";

     alert(greet);   
}

function ques2(){
     // Enter a valid password.
     var error = "Error! Please enter a valid password.";

     alert(error);
}

function ques3(){
        // Welcome to JS Land... Happy Coding!

        var js_coding = "Welcome to JS Land... \nHappy Coding!";
        
        alert(js_coding);


}
function ques4(){
        // messages in sequence:
        var sequence = "Welcome to JS Land..." , 
            prevent_dia = "Happy Coding!";              // dialog line cannot appear
            
        alert(sequence);
        alert(prevent_dia);

}
function ques5(){
        // messages in sequence:
        var browser = "Hello... I can run through my web browser's console";
        
        alert(browser);

}
function ques6(){
        console.log("window.href======", window.location.href);
        console.log("wwindow.location.href.indexOf('pages') ======", window.location.href.indexOf('pages'));
        
        let url = window.location.href.slice(0, window.location.href.indexOf('pages'));
        console.log("window.href split ======", url);
        
        url = url+ "task_6/index.html";
        console.log("complete URL ======", url);
        // let url = window.location.host + "/task_6/index.html";
        window.open(url,"_blank");
}
function ques7(){
        console.log("window.href======", window.location.href);
        console.log("wwindow.location.href.indexOf('pages') ======", window.location.href.indexOf('pages'));
        
        let url = window.location.href.slice(0, window.location.href.indexOf('pages'));
        console.log("window.href split ======", url);
        
        url = url + "/task_7/index.html";
        console.log("window.locatio host======", url);

        window.open(url,"_blank");
}