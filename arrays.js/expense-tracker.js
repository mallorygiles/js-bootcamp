const account = {
    name: 'Mallory Giles',
    expenses: [],
    income: [],
    addExpense: function(description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function(description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function() {
        let expenseTotal = 0
        this.expenses.forEach(function(expense){
            expenseTotal += expense.amount
        })
        let incomeTotal = 0
        this.income.forEach(function(income){
            incomeTotal += income.amount
        })
        const balance = incomeTotal - expenseTotal
        return `${this.name} has a balance of $${balance}. $${incomeTotal} in income. $${expenseTotal} in expenses.`
    }
}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Salary', 2000)
account.addIncome('Bonus', 250)
console.log(account.getAccountSummary())

