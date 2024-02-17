function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    

  }
  const myFather = new Person("Rahul", "Tiwari", 40);
const myMother = new Person("Sunita", "Tiwari", 38 );
console.log("my Father is " +myFather.age+ "years old")
myMother.city="Mumbai";
const mySister=new Person("Riya","Tiwari",10);
console.log(myMother)
console.log(mySister)