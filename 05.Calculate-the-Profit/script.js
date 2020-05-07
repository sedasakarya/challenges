/* CALCULATE THE PROFIT
------------------------------ */
let profit = {
  costPrice: 32.67,
  sellPrice: 45.00,
  inventory: 1200
}; 

function totalProfit(profit){
  return (profit.sellPrice * profit.inventory)-(profit.costPrice * profit.inventory);
}
console.log(totalProfit(profit));

//Profit = Total Sales - Total Cost 


