


function  formatString (input : string , toUppper? : boolean ) : string {

    if(toUppper || toUppper === undefined) {

        return input.toUpperCase()

    }else {
      return input.toLowerCase()
    }
} 



function filterByRating(items: { title: string ; rating: number }[]) : { title : string ; rating : number }[]    { 

 return items.filter(item => item.rating > 4);


}






function concatenateArrays <T> (...arrays: T[][]): T[] {

    const OutputArray  :  T[] =   [];

    for   (let i = 0; i < arrays.length; i++) {

        OutputArray.push(...arrays[i]);

    }

    return OutputArray;
    
  }










class Vehicle {
   private make : string;
   private year : number;


    constructor (make : string, year  : number ){
        this.make = make;
        this.year = year;

    }

    getInfo () : string {
        return `The vehicle is a  made by ${this.make} in ${this.year}`;
    }
}
class Car extends Vehicle  {
    private model : string ;
    constructor (make : string, year : number , model : string) {
     super (make, year);
     this.model = model;
    }

    getModel ( ) : string {
        return `The model of the car is ${this.model}`
    }
}









function processValue(value: string | number): number  {  

    if (typeof value === "string")   {
        return value.length;
    }else{
        return value * 2;
    }
}










interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null   {
    if (products.length === 0 ) {
        return null ;
    }


    let mostExpensiveProduct = products[0]


    for (let i = 1 ; i < products.length ; i++) {
        if (products[i].price > mostExpensiveProduct.price) {
            mostExpensiveProduct = products[i]
            
        }
    }

    return mostExpensiveProduct;

  }












  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
        return 'Weekend' ;
    
    } else {
        return 'Weekday';
    }
  }














  async function squareAsync(n: number): Promise<number> {

    return new Promise((resolve , reject ) => {

        if (n < 0 ) {
            throw new Error ( "Negative number not allowed")
        }

        setTimeout(() => {
            resolve (n * n) ;
        } ,1000)

    })
  }






  








