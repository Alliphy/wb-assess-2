// Unit 2 Assessment: js-dom.js
// This file is imported as a script by `js-dom.html`.
// Refer to `js-dom.html` to see the HTML elements you will be interacting with.

// Log in/log out button
//
// When a user clicks on the button that says "Log In", its text should
// update and say "Log out". If a user clicks on the button again, its text
// should switch from "Log Out" to "Log In".

/// TODO: replace this with your code
const logInBut = document.getElementById("auth");

let isLoggedIn = false; //track if we are logged in or not. default is false

logInBut.addEventListener("click", function() {
    if (isLoggedIn) {
        logInBut.textContent = "Log in"
        isLoggedIn = false;
    } else { 
        logInBut.textContent = "Log out"
        isLoggedIn = true;
    }
})



// Send an alert
//
// This form will send an alert to a user via the built-in alert function.
//
// A user should be able to enter what they want the alert to say in the
// text box. Then, they can submit the form to trigger the alert.

/// TODO: replace this with your code
let sendAlert = document.getElementById("send-alert");

const messageInput = document.getElementById("alert-message");

sendAlert.addEventListener("submit", function(event) {
    event.preventDefault() //prevent the default form submission

    const message = messageInput.value;

    if (message) {
        alert(message);
        messageInput.value = "" // reset value after you input
    } else {
        alert("Please Enter a Message :)")
    }
})

// Add an item
//
// This is a pretty silly feature -- when a user clicks on the
// button (the one that says "Double-ulick to add an item"), a new list
// item should appear.
//
// In other words, whenever a user clicks on the button, just
// add another <li>Item</li>. So, a user has clicked on the
// button once, the list should look like this:
//
//   <ol id="list">
//     <li>Item</li>  <!-- This list item was already here -->
//     <li>Item</li>  <!-- This was added after double-clicking -->
//   </ol>

/// TODO: replace this with your code

let addItem = document.getElementById("item-adder"); 
const listContainer = document.getElementById("list");

addItem.addEventListener("dblclick", function() {

const newItem = document.createElement("li");
newItem.textContent = "Item"
listContainer.appendChild(newItem);

})

// Change colors
//
// Users should be able to change the color of any element with the
// class, "changes-colors", by clicking on the "Turn Stuff Red" button
// or "Turn Stuff Blue" button.
//
// Clicking on "Turn Stuff Red" should make text red and clicking on "Turn
// Stuff Blue" should make text blue.

/// TODO: replace this with your code


// access our buttons
const blueBut = document.getElementById("blue");
const redBut = document.getElementById("red");


// write out our function to change color
const changeColor = (color) => {
    elements = document.querySelectorAll(".changes-colors"); //select all class elements

    for (const element of elements) {
        element.style.color = color; //update the color
    }
};

// click button to change color
blueBut.addEventListener("click", () => changeColor("blue"));
redBut.addEventListener("click", () => changeColor("red"))


// Calculate factorial
//
// The factorial of a number is the product of an integer and all the integers
// below it. For example, the factorial of 4 is equal to 4 * 3 * 2 * 1 = 24. The
// factorial of 6 is 6 * 5 * 4 * 3 * 2 * 1 = 720.
//
// Write the following code to calculate the factorial of a positive integer (you
// don't need to worry about negative numbers).
//
// Write a function that calculates the factorial of a positive number Add an
// event listener that catches when someone clicks on the "calculate" button and:
//   - gets whatever number is inside the input field
//   - calls your function that calculates a factorial
//   - puts the result of the function inside the "result" span

/// TODO: replace this with your code


function factorial(num) {
    let value = num
    for (let i = num - 1; i > 0; i--) {
        value = value * i;
    }
    return value;
}

const form = document.getElementById("factorial-calculator");
const result = document.getElementById("result");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const numberInput = parseInt(e.target[0].value)

    result.textContent = factorial(numberInput)
    console.log("This will work", e)
})

// Validate a form
//
// This form is used to collect word recommendations from users. However, it
// only accepts words that are at least four characters long. Add code that
// checks the length of the text entered into the <textarea> when the user
// submits the form.
//
//  If the text is three or more characters long, change
//  the feedback text to say "Thanks for your submission!" and change
//  the color of the text to green.
//
// If the text is less than three characters long, change
// the feedback text to say "The word must be at least 4 characters long." and
// change the color of the text to red..

/// TODO: replace this with your code

let validateForm = document.getElementById("recommend-word");
let feedbackEl = document.querySelector('.form-feedback')
    
validateForm.addEventListener("submit",function(e) {
    e.preventDefault();
    // const word = document.getElementById("word")
    console.log(e)
    const word = e.target[0].value
    //  const word = document.querySelector("#word");
     console.log(word);

    if (word.length < 4) {
        feedbackEl.textContent = "The word must be at least 4 characters long."
        feedbackEl.style.color = "red";
    }  else {
        feedbackEl.textContent = "Thanks for your submission!"
        feedbackEl.style.color = 'green';
    }
})
