'use strict';

const Person=function(firstName,birthYear) {
  if (!this) return 4
  this.firstName=firstName;
  this.birthYear=birthYear;
  // NO
  // this.calcAge=function() {
  //   console.log(2037-this.birthYear);
  // }

}
const paolo=new Person("Paolo",2002);

// Person.prototype.constructor=function(test) {
//   console.log("ciao");
//   this.test=test;
// }

const gianni=new Person("Gianni",2001);

Person.prototype.calcAge=function() {
  console.log(2037-this.birthYear);
}
gianni.calcAge();
console.log(gianni instanceof Person);
gianni.__proto__.test=function(test) {
  console.log(test)
}
console.log(gianni.__proto__=== Person.prototype);
console.log(gianni.__proto__);
console.log(Person.prototype);
console.log(Person.prototype.isPrototypeOf(gianni));
console.log(Person.prototype.isPrototypeOf(Person));
// Person.vero=true
Person.prototype.species="homo sapiens";
gianni.__proto__.nationality="italian"
console.log(gianni,paolo);
console.log(gianni.hasOwnProperty("firstName"));
console.log(gianni.hasOwnProperty("species"));

const test={
  a:2,
  b:3
}

test.__proto__.ciao="ciao"
Object.prototype.saluto=function(name) {
  console.log(this.ciao+" "+name);
}
console.log(test.ciao);
test.saluto("Daniele")

gianni.saluto("Gianni")

console.log(Object.prototype);

console.log(gianni.__proto__.__proto__);

const arr=[1,2,3];
arr.__proto__.test=function() {
  this.numero=10000
}
arr.__proto__.test();
console.log(arr.__proto__);
console.log(arr.numero);

const h1=document.querySelector("h1");
console.dir(h1.__proto__.__proto__.__proto__.__proto__.__proto__);

const Car=function(make,speed) {
  this.make=make;
  this.speed=speed;
}
Car.prototype.getSpeed=function() {
  console.log(this.make+"'s going at "+this.speed+" km/h");
  return this.speed;
}
Car.prototype.accelerate=function() {
  this.speed+=10;
  this.getSpeed();
}
Car.prototype.brake=function() {
  this.speed-=5;
  this.getSpeed();
}
const bmw=new Car("BMW",100);

bmw.getSpeed();
bmw.accelerate();
bmw.accelerate();
bmw.brake();

// const PersonCl=class  {
//
// }

class PersonCl {
  constructor(fullName,birthYear) {
    this._fullName=fullName;
    this._birthYear=birthYear;
  }

  calcAge(){
    console.log(2037-this.birthYear);
  }

  get age(){
    console.log(2037-this.birthYear);
    return 2037-this.birthYear;
  }

  get birthYear(){
    return this._birthYear;
  }

  set birthYear(year){
    this._birthYear= year && typeof year ==="number" && !Number.isNaN(year) ? year : this.birthYear
  }

  get fullName(){
    return this._fullName;
  }

  set fullName(name){
    this._fullName=name.split(" ").length ===2 ? name : this.fullName;
  }

  get firstName(){
    return this.fullName.split(" ").at(0);
  }

  set firstName(name){
    const firstName=this.fullName.split(" ");
    firstName[0]=name;
    this.fullName=firstName.join(" ");
  }

  get lastName(){
    return this.fullName.split(" ").at(1);
  }

  set firstName(name){
    const firstName=this.fullName.split(" ");
    firstName[1]=name;
    this.fullName=firstName.join(" ");
  }

  static hey(){
    console.log("hey");
  }
}
PersonCl.helloWorld=function() {
  console.log("hello world");
  console.log(this);

}
PersonCl.prototype.greet=function() {
  console.log("Hey "+this.firstName);
}

PersonCl.helloWorld();
PersonCl.hey()
const jessica=new PersonCl("Jessica Johnson",1999);
jessica.calcAge();
jessica.greet();

console.log(jessica.fullName);
console.log(jessica);


const account={
  owner:"Jonas",
  movements:[200,400,123,23],
  test:1,
  get latest(){
    return this.movements.slice(-1).pop();
  },
  set latest(mov){
    this.movements.push(mov);
  }
}
console.log(account.movements);
console.log(account.latest);
account.latest=50;
console.log(account.movements);

const PersonProto={
  test:"test",
  calcAge(){
    console.log(2037-this.birthYear);
  },
  init(firstName,birthYear){
    this.firstName=firstName;
    this.birthYear=birthYear;
  }
}

const steven=Object.create(PersonProto);


// steven.__proto__.test="test"
steven.calcAge();
steven.init("Steven",2000);
steven.test="no test"
console.log(steven);
console.log(PersonProto);

class CarCl{
  constructor(make,speed) {
    this._make=make;
    this._speed=speed;
  }

  get make(){
    return this._make;
  }

  set make(name){
    this._make=name;
  }

  get speed(){
    return this._speed;
  }
  get speedUS(){
    console.log(this.make+" is going at "+this.speed+" km/h");
    return `${this._speed/1.6} mi/h`;
  }

  set speedUS(v){
    this._speed=v;
  }
}

CarCl.prototype.getSpeed=function() {
  console.log(this.make+" going at "+this.speed+" km/h");
  return this.speedUS;
}
CarCl.prototype.accelerate=function() {
  this.speedUS=this.speed+10;
  this.speedUS;
}
CarCl.prototype.brake=function() {
  this.speedUS=this.speed-5;
  this.speedUS;
}

const ford=new CarCl("Ford",120);
console.log(ford.speedUS);
ford.accelerate();
console.log(ford.speedUS);

const Student=function(firstName,birthYear,course) {
  Person.call(this,firstName,birthYear);
  this.course=course;

  function pony(){
    console.log("good");
  }
}
Student.prototype=Object.create(Person.prototype)
console.log(Student.prototype);
// Student.prototype.__proto__=Person.prototype
// console.log(Student.prototype);
Student.point=function() {
  console.log("test");
}
Student.prototype.introduce=function() {
  console.log(`I'm ${this.firstName} and I study ${this.course} course`);
}
const carlo=new Student("Carlo",1900,"javascript");

Student.point();

const ps=new Person("Ps",1800);
console.log(ps);
carlo.calcAge();
carlo.introduce()
console.log(carlo);
console.log(Student.prototype);
Student.prototype.constructor=Student
console.log(Student.prototype.constructor);

console.log(Person.prototype.constructor);
const abc=new Object("hello");
console.log(abc)

const st=new Student("st",1000,"t")

console.log(st);
console.log(st.__proto__.constructor=== Student);
console.log(Student.prototype.constructor);


const ElectricCar=function(make,speed,charge) {
  Car.call(this,make,speed);
  this.charge=charge;
}
ElectricCar.prototype=Object.create(Car.prototype);
ElectricCar.prototype.constructor=ElectricCar;

ElectricCar.prototype.chargeBattery=function(chargeTo) {
  this.charge=chargeTo;
}
ElectricCar.prototype.getCharge=function() {
  const charge=this.charge+"%"
  console.log(charge);
  return charge;
}
ElectricCar.prototype.accelerate=function() {
  this.speed+=20
  this.charge--;
  this.getSpeed();
  this.getCharge();
}

const tesla=new ElectricCar("Tesla",200,20);
tesla.accelerate();
tesla.brake();

bmw.accelerate();
bmw.accelerate();

class StudentCl extends PersonCl{
  constructor(fullName,birthYear,course) {
    super(fullName,birthYear);
    this._course=course;
  }

  get course(){
    return this.course
  }

  set course(name){
    this._course=name;
  }
}

const sara=new StudentCl("Sara Montenegro",2000,"Java");
console.log(sara.age);

const StudentProto=Object.create(PersonProto);
StudentProto.init=function(firstName,birthYear,course) {
    PersonProto.init.call(this,firstName,birthYear);
    this.course=course;
}
StudentProto.introduce=function() {
  console.log(`My name is ${this.firstName} and I study ${this.course} course`);
}
const nicola=Object.create(StudentProto);
nicola.init("Nicola",2000,"javascript")

console.log(nicola);
nicola.introduce();

class Account {
  #pin
  #owner
  #currency
  #movements
  #locale;

  constructor(owner,currency,pin) {
    this.#owner=owner;
    this.#currency=currency;
    this.#pin=pin;
    this.#movements=[];
    this.#locale=navigator.language;
  }
  static {
    // console.log("Hello "+this.#owner);
  }
  deposit(val){
    this.#movements.push(val);
    console.log(this.#movements.toString());
    return this;
  }

  withdraw(val){
    this.#movements.push(-val);
    console.log(this.#movements.toString());
    return this;
  }

  toString(){
    console.log(`owner: ${this.#owner}, currency: ${this.#currency}, pin: ${this.#pin}`);
  }
}

const acc1=new Account("Giancarlo","EU",1467);
acc1.deposit(2).withdraw(9).deposit(30);
acc1.withdraw(2)
acc1.toString()

const testObj={
  ["#x"]:4,
  test(){
    console.log(this['#x']);
  }
}
testObj.test()

class ECar extends CarCl{
  #charge;
  constructor(make,speed,charge) {
    super(make,speed);
    this.#charge=charge;
  }

  chargeBattery(chargeTo){
      this.#charge=chargeTo;
      return this;
  }

  accelerate(){
    super.__proto__.__proto__.accelerate.call(this);
    this.#charge--;
    console.log(this.#charge+"%");
    return this;
  }
}
const toyota=new ECar("Toyota",100,56);
toyota.accelerate().accelerate();