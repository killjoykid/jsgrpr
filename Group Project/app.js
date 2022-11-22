// Script that returns a welcome message based on the time of day

if (new Date().getHours() <= 12) {
   document.getElementById("welcome").innerHTML = "Good Morning!";

} else if (new Date().getHours() <= 17) {
   document.getElementById("welcome").innerHTML = "Good Afternoon!";

} else {
   document.getElementById("welcome").innerHTML = "Good Evening!";

}


// function that adds up checked items and prints a total to the user
function Reciept() {
   let input = document.getElementsByName("food");
   let total = 0;

   for (let i = 0; i < input.length; i++) {
      if (input[i].checked) {
         total += parseFloat(input[i].value);
      }

      let tax = (total * .0975) + total;
   }
   document.getElementById("total").value = "$" + tax.toFixed(2);
}

// Shopping Cart functionality
let cartContents = [];
const cartItemsElement = document.querySelector("#cartItems");
const cartSum = document.querySelector("#cartSum");
const menuItem = document.querySelectorAll(".menuItem")


// Page 3 - Online Ordering
function validQty(elem) {
   if ($(elem).val() < 0) $(elem).val(0);
   else if ($(elem).val() > 99) $(elem).val(99)
}

// Item quantity decrement
function QtyDecrement(elem) {
   let itemQty = $(elem).siblings('span').children('.Qty').val();
   if (itemQty <= 0) {
      $(elem).siblings('span').children('.Qty').val(0);
   }
   else {
      itemQty--;
      $(elem).siblings('span').children('.Qty').val(itemQty);
   }
}

// Item quantity increment
function QtyIncrement(elem) {
   let itemQty = $(elem).siblings('span').children('.Qty').val();
   if (itemQty >= 99) {
      $(elem).siblings('span').children('.Qty').val(99);
   }
   else {
      itemQty++
      $(elem).siblings('span').children('.Qty').val(itemQty);
   }
}

function AddToCart(elem) {
   const foodInfo = $(elem).closest('.foodInfo').find('.itemName').text();
   let foodName = $(elem).closest('.foodItem').find('.itemName');
   console.log(foodName)
   let foodImg
   let foodPrice
}


