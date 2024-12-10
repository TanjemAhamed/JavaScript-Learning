class People {
    constructor(firstName, lastName, cashInHand, cashInBank) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._cashInHand = cashInHand < 0 ? 0 : cashInHand;
        this._cashInBank = cashInBank < 0 ? 0 : cashInBank;
    }

    getDetails() {
        return `Name : ${this._firstName}, Balance : ${this._cashInHand + this._cashInBank}`;
    }

    expense(amount) {
        if (amount <= (this._cashInHand + this._cashInBank) && (this._cashInHand + this._cashInBank) > 0) {
            if(amount > this._cashInHand) {
                this._cashInBank -= (amount - this._cashInHand);
                this._cashInHand = 0;
            } else {
                this._cashInHand -= amount;
            }
            return 'Return Successful';
        } else {
            this._cashInHand = 0;
            return 'Return Unsuccessful';
        }
    }
}

function printDetails(peopleArray) {
    const amount = 4500;
    peopleArray.forEach(person => {
        console.log(person.expense(amount));
        console.log(person.getDetails());
    });
}

const people = [
    new People ('Alice', 'Mark', 2500, 6000),
    new People ('Bob', 'Steve', 3000, -100),
    new People ('Charlie', 'Andrson', -2000, -1000),
    new People ('Olivia', 'kevin', 3500, 5000)
]

printDetails(people);