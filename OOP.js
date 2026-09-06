// console.log(typeof NaN);//type of NaN is number 
//  let a=new String("Salman"); //this is not string it is object
//  console.log(a);
// function fact(num){
//     if(num==1||num==0){
//         return 1;
//     }
//     return fact(num-1)*num;
// }
// console.log(fact(4));

//============== OOP ===========
class Myclass{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    static introduce(){
        console.log("My name is "+this.name + " and I am "+this.age+" years old");
    }
}

let s1=new Myclass("salman",17);
//s1.introduce();  this is not work because introduce fucntion is static
console.log(Myclass.introduce()); 
//instanceof means to check variable of class like s1 is an instance of Myclass.
console.log(s1 instanceof Myclass);
console.log(s1 instanceof Object);
//Static Methods
//Sometimes a method should belong to the class itself, rather than individual objects.


class BankAccount {
//private attributes
    #balance = 0; //same work as private in c++

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
    }
   withdraw(amount){
    if(amount>=this.#balance){
        console.log("Insufficient balance")
    }
    else{
        this.#balance -= amount;
    }
   }
   //getter
    getBalance() {
        return this.#balance;
    }
    //setter
    setBalance(newamount){
        this.#balance=newamount;
    }
}
let account = new BankAccount(1000);
account.deposit(500);
account.withdraw(300);
account.setBalance(1000);
console.log(account.getBalance());
//console.log(account.#balance);//cause error because balance is private

//======= Inheritance
//Inheritance means one class can acquire functionality from another class.
// Suppose:
// Animal
//   |
//   ├── Dog
//   |
//   └── Cat

// class Animal{
//     eat(){
//         console.log("Animal is eating");
//     }
// }
// class  dog extends Animal{
// dog(){
//     console.log("Dog is barking");
// }
// }
// let d=new dog();
// d.eat();
// d.dog();

//=============== super() 
// class Animal{
//     constructor(name){
//         this.name=name;
//     }
//     eat(){
//         console.log("Animal is eating");
//     }
// }
// class  dog extends Animal{
//     constructor(name, breed) {

//         super(name);

//         this.breed = breed;
//     }
// dog(){
//     console.log("Dog is barking");
// }
// }
// let d1=new dog("Tommy","German shepherd");

//======== Overriding
class Animal {

    sound() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {

    sound() {
        console.log("Dog barks");
    }
}
let a1=new Animal();//
let d2=new Dog();
//a1.sound();    output:Animal makes a sound
//d2.sound();    output:Dog barks

//============= Abstraction
//Abstraction means Hide unnecessary implementation details and expose only what the user needs.
class CoffeeMachine {

    makeCoffee() {
        this.#heatWater();
        this.#grindBeans();

        console.log("Coffee ready");
    }

    #heatWater() {
        console.log("Heating water");
    }

    #grindBeans() {
        console.log("Grinding beans");
    }
}
let c=new CoffeeMachine();
//c.heatWater(); error because is heatWater() is private