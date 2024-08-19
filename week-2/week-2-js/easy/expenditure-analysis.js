/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  
  //step1 - Empty object to store totals by category
  const totals = {};

  //step2- loop through each transaction
  transactions.forEach(transactions => {
    const category = transactions.category;
    const price = transactions.price;

    if(!totals[category]) totals[category] = price;
    else totals[category] += price;

  });
  const result = [];
  for(let category in totals){
    result.push({ category: category, totalSpent: totals[category]})
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
