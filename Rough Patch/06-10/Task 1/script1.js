class Account{
    #balance;
    constructor(balance){
        this.#balance = Number(balance);
    }
    withdraw(amount){
        if(amount < this.#balance){
            this.#balance -= amount
        console.log(`money has been withdrawn remaining balance is ${this.#balance}`)
        }else{
            console.log("insufficient Balance")
        }
    }
    addMoney(amount){
        if(amount > 0){
        this.#balance += Number(amount);
        console.log(`Money Has Been Added the Updated balance is ${this.#balance}`)
        }else{
            console.log("amount should be Positive")
        }
    }
    getBalance(){
        console.log(`Your current balance is ${this.#balance}`)
    }

}
let person = new Account("10000");
person.getBalance()