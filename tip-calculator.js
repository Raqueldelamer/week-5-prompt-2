function calculateTotal() {
  let price;
  let tipPercent;


  price = prompt("What was your total bill?");
  tipPercent = prompt("Percent would you like to tip (enter in decimals. For example 15% would be 0.15");
 
  
  // NOTE: The prompt returns values of the type String. We need to change the Strings into Numbers before we use them for math.
  let priceNumber = Number(price);
  let tipPercentNumber = Number(tipPercent);
  let tipNumber = (priceNumber * tipPercentNumber);
  let totalNumber = (priceNumber + tipNumber);

 
  
  priceParagraph.innerHTML = `Your total bill is ${priceNumber}`;
  tipParagraph.innerHTML = `Your tip should be ${tipNumber}`;
  totalParagraph.innerHTML = `Your total should be $ ${totalNumber}`;
}

calculateButton.onclick = calculateTotal;