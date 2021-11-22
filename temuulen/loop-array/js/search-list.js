const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.');
let message;
if(!search){
    message = `<p><b>In stock</b>: ${inStock.join(', ')}</p>`
}
else if( inStock.includes(search)){
    message = `<p>Yes, we have <b>${search}</b>. It's ${inStock.indexOf(search) +1 } product in our Stock.</p>`
} else{
    message = `<p>No, we don't have <b>${search}</b></p>`
}
document.querySelector("main").innerHTML = message