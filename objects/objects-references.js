let myAccount = {
    name: 'Mallory Giles',
    expenses: 0,
    income: 0
}
/* let otherAccount = myAccount
otherAccount.income = 1000 */
let addExpense = function(account, amount) {
    account.expenses += amount
    console.log(account)
}

let addIncome = function(account, amount) {
    account.income += amount
}

let resetAccount = function(account){
    account.income = 0
    account.expenses = 0
}

let getAccountSummary = function(account){
    console.log(`Account for ${account.name} has $${account.income - account.expenses}. $${account.income} in income. $${account.expenses} in expenses`)
}

addIncome(myAccount, 100)
addIncome(myAccount, 2500)
addExpense(myAccount, 250)
addExpense(myAccount, 700)
getAccountSummary(myAccount)
resetAccount(myAccount)
getAccountSummary(myAccount)


