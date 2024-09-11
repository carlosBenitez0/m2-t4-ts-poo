class Account {
  private name: string;
  private balance: number;
  private accountType: string;
  private accountNumber: string;

  constructor(
    name: string,
    balance: number,
    accountType: string,
    accountNumber: string
  ) {
    this.name = name;
    this.balance = balance;
    this.accountType = accountType;
    this.accountNumber = accountNumber;
  }

  public deposit(amount: number): void {
    if (amount < 5) {
      console.log("The deposit amount must be greater than $5.00");
    } else {
      this.balance += amount;
      console.log(`Successfully deposited $${amount}`);
    }
  }

  withdraw(amount: number): void {
    if (this.balance === 0) {
      console.log("There is nothing in the account.");
    } else if (amount < 5) {
      console.log("The withdrawal amount must be greater than $5.00");
    } else if (amount > this.balance) {
      console.log("Insufficient balance for this withdrawal.");
    } else {
      this.balance -= amount;
      console.log(
        `You withdrew $${amount}. Remaining balance: $${this.balance}`
      );
    }
  }

  showDetails(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Account Type: ${this.accountType}`);
    console.log(`Account Number: ${this.accountNumber}`);
  }
}

const myAccount = new Account("Carlos", 50, "Savings", "782634752");

myAccount.showDetails();
myAccount.deposit(50);
myAccount.withdraw(30);
myAccount.withdraw(100);
myAccount.deposit(50);
myAccount.withdraw(30);
