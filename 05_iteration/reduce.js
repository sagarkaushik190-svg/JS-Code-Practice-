const arr = [2,3,4,5,6];

// const result = arr.reduce((acc,curval) => {
//     console.log(`acc is: ${acc} and curval is: ${curval}`);
//     return acc + curval;

// }, 0)
// console.log(result);

const shoppingCart = [
    {
        itemName: "AC",
        price: 40000
    },

    {
        itemName: "TV",
        price: 20000
    },

    {
        itemName: "Washing Machine",
        price: 20000
    }
]

const bill = shoppingCart.reduce((acc,item) => acc + item.price, 0)
console.log(bill);
