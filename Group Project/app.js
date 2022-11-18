// Script that returns a welcome message based on the time of day

if (new Date().getHours() <= 12) {
	document.getElementById("welcome").innerHTML = "Good Morning!";

} else if (new Date().getHours()<= 17) {
	document.getElementById("welcome").innerHTML = "Good Afternoon!";
	
} else{
	document.getElementById("welcome").innerHTML = "Good Evening!";

}


// function that adds up checked items and prints a total to the user
function Reciept()
{
   var input = document.getElementsByName("food");
   var total = 0;
   
   for (var i = 0; i < input.length; i++)
   {
      if (input[i].checked)
      {
         total += parseFloat(input[i].value);			 
      }
	 
	 var tax = (total * .0975) + total;
   }
   document.getElementById("total").value = "$" + tax.toFixed(2); 
}

// Shopping Cart functionality
let cartContents = [];
const cartItemsElement = document.querySelector("#cartItems");
const cartSum = document.querySelector("#cartSum");
const menuItem = document.querySelectorAll(".menuItem")