var person = {
    firstName : "John",
    lastName  : "Doe",
    age     : 50,

    getFullName:function(){
        return this.firstName +" " .lastName
    }
}

  console.log(person.getFullName());

  let obj1={
    firstName : "John",
    lastName  : "Doe",
    age     : 50,
    eyeColor  : "blue" ,
    skill:["Mern","Java"]
  }
  for (let x in obj1){
    console.log(x)
  }