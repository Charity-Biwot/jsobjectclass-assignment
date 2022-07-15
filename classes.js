
// # Write a program to calculate purchases from a kiosk. For e.g. given the fruit name 
// # 'orange' the program should fetch its price (30.00) and multiply with the quantity 
// # requested (2) and return total cost in this printed format (2 Oranges for KES 
// # 60.00). 
// from copyreg import constructor
// # calculateFruitCost(fruitName, quantity)
// # For example, calculateFruitCost('orange', 2) should return "2 Oranges for KES 60.0// 
let Fruitkiosk=[
    {
        name:"guava",
        quantity:3,
        price: 30.00,
    }
]
 function calculateFruitCost(name,quantity){
    let p=Fruitkiosk.find(item=>item.name===name)
    console.log(`${quantity} ${name} for KES ${p.price*quantity}`);
}
calculateFruitCost("guava",5)




//Write a class KioskCalc that has the following fruitsPriceList object.
// this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 }; 
// and takes two parameters (fruit, quantity) when initialized i.e. 
// var kioskCalc = new KioskCalc(“orange”, 2);
// Thereafter, it allows one to calculate the total cost of the fruit by accessing the 
// getTotalCost( ) method. 

class fruitkiosk{
     constructor(fruit,quantity){
         this.quantity=quantity
         this.fruit=fruit
         this.fruitpriceList={"Apple":100,"Mellon":50,"Apple":40};
         this.getTotalPrice=function(){
             return `${quantity} ${fruit} for KES ${quantity*this.price}`
         }
     }
     }
     fruitkiosk.prototype.price=100;
      var kiosk=new fruitkiosk("Apple",4);
      console.log(kiosk.getTotalPrice());