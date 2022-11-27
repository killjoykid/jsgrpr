// Script that returns a welcome message based on the time of day

if (new Date().getHours() <= 12) {
   document.getElementById("welcome").innerHTML = "Good Morning!";

} else if (new Date().getHours() <= 17) {
   document.getElementById("welcome").innerHTML = "Good Afternoon!";

} else {
   document.getElementById("welcome").innerHTML = "Good Evening!";

}


// Shopping Cart functionality
let cartContents = [];
const cartItemsElement = document.querySelector("#cartItems");
const cartSum = document.querySelector("#cartSum");
const menuItem = document.querySelectorAll(".menuItem")


// Page 3 - Online Ordering

// Menu Food Items



function AddToCart(elem) {

   let orderList = [];

   const foodName = $(elem).closest('.foodItem').find('.itemName').text();
   const itemQty = $(elem).closest('form').find('.Qty').val();

   if (foodName == "Spinach Queso & Chips") {
      const chipsQueso = { id: 6, name: "Spinach Queso & Chips", img: "img/spinqueso.jpg", price: 1200, qty: itemQty }
      orderList.push(chipsQueso);
   }
   else if (foodName == "Pork Chops") {
      const porkChops = { id: 1, name: "Pork Chops", img: "img/porkchops.jpg", price: 2200, qty: itemQty }
      orderList.push(porkChops);
   }
   else if (foodName == "Grilled Shrimp") {
      const grillShrimp = { id: 2, name: "Grilled Shrimp", img: "img/grilledshrimp.jpg", price: 1900, qty: itemQty }
      orderList.push(grillShrimp);
   }
   else if (foodName == "Grilled Chicken Salad") {
      const grilledChkSalad = { id: 3, name: "Grilled Chicken Salad", img: "img/grilledchickensalad.jpg", price: 1300, qty: itemQty }
      orderList.push(grilledChkSalad);
   }
   else if (foodName == "Steakburger") {
      const stkBurger = { id: 4, name: "Steakburger", img: "img/steakburger.jpg", price: 1500, qty: itemQty }
      orderList.push(stkBurger);
   }
   else if (foodName == "Chicken Tenders") {
      const chkTenders = { id: 5, name: "Chicken Tenders", img: "img/chickentenders.jpg", price: 1600, qty: itemQty }
      orderList.push(chkTenders);
   }

   PopulateCart(orderList);

}


function PopulateCart(array) {
   const cart = $('#cartItemList')

   for (let i of array) {
      const itemExists = cart.find(`#${i.id}`)

      if (i.qty == 0) {
         itemExists.remove()
      }
      else {
         if (itemExists.length != 0) {
            const itemQtyPrice = (i.price * i.qty) / 100;
            const itemHTML =
               `<div class="cartItemInfo">
               <div class="cartImg"><img src="${i.img}"></div>
               <div class="cartName">${i.name} x${i.qty}</div>
            </div>

            <div class="cartPrice">$${itemQtyPrice.toFixed(2)}</div>`;

            itemExists.html(itemHTML);

         }
         else {
            const itemQtyPrice = (i.price * i.qty) / 100;

            const itemHTMl = `<div class="cartItem" id="${i.id}">
         <div class="cartItemInfo">
            <div class="cartImg"><img src="${i.img}"></div>
            <div class="cartName">${i.name} x${i.qty}</div>
         </div>

         <div class="cartPrice">$${itemQtyPrice.toFixed(2)}</div>
         </div>`;

            cart.append(itemHTMl)
         }
      }
      cartTotal();
   }
}


function cartTotal() {
   const cartPrices = $('#onlineCart').find('.cartPrice');
   let subTotal = [];
   console.log(cartPrices)

   for (let i of cartPrices) {
      const price = i.textContent;
      const cleanPrice = price.slice(1);
      subTotal.push(cleanPrice * 100)
   }

   let subSum = 0;
   for (let i of subTotal) {
      subSum += i;
   }

   const subTotText = subSum / 100;
   const taxTotText = (subSum / 100) * .10;
   const orderTot = subTotText + taxTotText;

   $('#subTot').text(`\$${subTotText.toFixed(2)}`);
   $('#taxTot').text(`\$${taxTotText.toFixed(2)}`);
   $('#orderTot').text(`\$${orderTot.toFixed(2)}`);
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