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

// Menu Food Items
const porkChops = { name: "Pork Chops", img: "/img/porkchops.jpg", price: 2200 }
const grillShrimp = { name: "Grilled Shrimmp", img: "/img/grilledshrimp.jpg", price: 1900 }
const grilledChkSalad = { name: "Grilled Chicken Salad", img: "/img/grilledchickensalad.jpg", price: 1300 }
const stkBurger = { name: "Steakburger", img: "/img/steakburger.jpg", price: 1500 }
const chkTenders = { name: "Chicken Tenders", img: "/img/chickentenders.jpg", price: 1600 }
const chipsQueso = { name: "Spinach Queso & Chips", img: "/img/spinqueso.jpg", price: 1200 }


function AddToCart(elem) {
   const foodName = $(elem).closest('.foodItem').find('.itemName').text();
   let itemQty = $(elem).closest('form').find('.Qty').val();

   if (foodName == "Spinach Queso & Chips") {
      console.log(foodName)
      console.log(itemQty)
   }
   let foodImg
   let foodPrice
}

function PopulateCart(foodItem) {
   const cart = $('#cartItemList')
   
   


}

function validQty(elem) {
   if ($(elem).val() < 0) $(elem).val(0);
   else if ($(elem).val() > 99) $(elem).val(99);
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




