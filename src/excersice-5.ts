abstract class Person {
  protected name: string;
  protected lastName: string;
  protected address: string;
  protected phone: string;
  protected age: number;

  constructor(
    name: string,
    lastName: string,
    address: string,
    phone: string,
    age: number
  ) {
    this.name = name;
    this.lastName = lastName;
    this.address = address;
    this.phone = phone;
    this.age = age;
  }

  isAdult(): void {
    if (this.age >= 18) {
      console.log(`${this.name} ${this.lastName} is an adult.`);
    } else {
      console.log(`${this.name} ${this.lastName} is not an adult.`);
    }
  }

  abstract showDetails(): void;
}

class Employee extends Person {
  private salary: number;

  constructor(
    name: string,
    lastName: string,
    address: string,
    phone: string,
    age: number,
    salary: number
  ) {
    super(name, lastName, address, phone, age);
    this.salary = salary;
  }

  loadSalary(newSalary: number): void {
    this.salary = newSalary;
    console.log(`The new salary of ${this.name} is $${this.salary}`);
  }

  printSalary(): void {
    console.log(`The salary of ${this.name} is $${this.salary}`);
  }

  showDetails(): void {
    console.log(`Name: ${this.name} ${this.lastName}`);
    console.log(`Address: ${this.address}`);
    console.log(`Phone: ${this.phone}`);
    console.log(`Age: ${this.age}`);
  }
}

const employee = new Employee(
  "Carlos",
  "Benitez",
  "Chalatenango",
  "67326743",
  24,
  100
);

employee.showDetails();
employee.isAdult();
employee.printSalary();
employee.loadSalary(1000);
