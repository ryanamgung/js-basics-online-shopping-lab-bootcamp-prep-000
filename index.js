var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var items = new Object({itemName: `${item}`,
  itemPrice: Math.floor(Math.random()*100)+1
  });
  
  cart.push(items)
  
  return `${item} has been added to your cart.`
}

function viewCart() {
  if(cart.length === 0)
  {
    return 'Your shopping cart is empty.'
  }
  
  var print = []
  let i = 0
  let len = cart.length
  while(i < len)
  {
    var val1 = Object.keys(cart[i])[0]
    var val2 = Object.keys(cart[i])[1]
    var price = cart[i][val2]
    var item = cart[i][val1]
    
    if(i === len - 1 && i != 0)
    {
      print.push(`and ${item} at $${price}`)
    }else
    {
      print.push(item + " at $" + price);
    }
    i++
  }
  return(`In your cart, you have ${print.join(`, `)}.`)
}

function total() {
  // write your code here
    let i = 0;
    var totalPrice = 0;
    while(i < cart.length)
    {
      var val2 = Object.keys(cart[i])[1]
      var price = parseInt(cart[i][val2])
      totalPrice += price
      i++
    }
    return totalPrice
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++)
  {
    var val1 = Object.keys(cart[i])[0]
    var itemName = cart[i][val1]
    if(itemName === item)
    {
      cart.splice(itemName, 1)
    }
  }
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
}
