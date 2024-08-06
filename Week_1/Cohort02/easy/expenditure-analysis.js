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
let arr=[{
  id: 1,
  timestamp: 1656076800000,
  price: 10,
  category: 'Food',
  itemName: 'Pizza',
},{
  id: 2,
  timestamp: 1656076800100,
  price: 20,
  category: 'Cloth',
  itemName: 'Shirt',
},{
  id: 3,
  timestamp: 2656076800200,
  price: 70,
  category: 'Cloth',
  itemName: 'Cargos',
}]
function calculateTotalSpentByCategory(transactions) {
    let arr=[];
    for(let item of transactions){
        const obj={};
        obj.category = item.category;
        obj.totalSpent = item.price;
        arr.push(obj);
    }
    return arr;
}

console.log(calculateTotalSpentByCategory(arr));
