/*
class BankAccount {	
	constructor() {
		this.accountNo = 1001;
		this.balance = 0;  // balance should only be modified in the functions deposit and withdraw
	}
			
	       //Returns true if the money was successfully deposited.
	       //Throws Error('Bad parameter') if amount is something other than a number, that is greater than 0 and less than positive infinity.
	deposit(amount) {
		throw new Error('Not implemented yet');
	}
	
	       //Returns true if the money was successfully withdrawn.
	       //Returns false if the account didn't have enough money. No money should be withdrawn in this case.
	       //Throws Error('Bad parameter') if amount is something other than a number, that is greater than 0 and less than positive infinity.
	withdraw(amount) {
		throw new Error('Not implemented yet');
	}
	
	       //Returns true if the amount was successfully transferred from the source account (this object) to the destination account.
	       //Returns false if the source account didn't have enough money. Neither the source nor the destination should change balance.
	       //Throws Error('Bad parameter: account') if the destination account is not an object of the class BankAccount.
	       //Throw Error('Bad parameter: amount') if the amount is something other than a number, that is greater than 0 and less than positive infinity.
	transferFunds(amount, destinationAccount) {
		throw new Error('Not implemented yet');
	}
}
*/
/*
Utgå från bankAccount.js från uppgift 17. Föreställ dig hur en applikation som hanterar ett bankkonto skulle kunna se ut. Skriv ner vad applikationen kan ha för state. Skriv också ner Actions som man skulle kunna använda i en sådan applikation, minst tre stycken. Skriv dessutom en Reducer-funktion som skapar nya state baserat på dina Actions.
Lämna in uppgiften på samma sätt som tidigare uppgifter, genom att länka till ett repo på GitHub som innehåller en fil.
*/

let state = {
    accountNo: 1001,
    balance: 0,
};

function actionDeposit (balance) {
    type: 'DEPOSIT_AMOUNT',
    balance: balance
};

function actionWithdraw (balance) {
    type: 'WITHDRAW_AMOUNT',
    balance: balance
};

function actionTransfer (balance) {
    type: 'TRANSFER_FUNDS',
    balance: balance
};

function reducer(state, action){
    switch (action.type){
        case 'DEPOSIT_AMOUNT':
            return {
                balance: action.balance
            };
            
        case 'WITHDRAW_AMOUNT':
            return {
                balance: action.balance
            };
            
        case 'TRANSFER_FUNDS':
            return {
                balance: action.balance
            };
            
        default:
            return state;
                       }
}
