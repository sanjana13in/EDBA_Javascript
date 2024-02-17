const person = {
    firstName: "Sanjana",
    lastName : "Tiwari",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  person.firstName="Priya"
  console.log(person.fullName());

  person=[firstName="Sam",lastName="Doe"];
  console.log(person.firstName());