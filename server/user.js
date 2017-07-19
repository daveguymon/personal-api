var user = {
  name: "Dave",
  location: "Provo",
  occupations: ["fighting mid-level crime", "harvesting baby vegetables", "writing code with plenty of errors", "asbestos removal"],
  hobbies: [
    {
      name: "running",
      type: "recreational"
    },
    {
      name: "coding",
      type: "intellectual"
    },
    {
      name: "hiking",
      type: "recreational"
    }
  ],
  family: [
    {
      name: "McKenzie",
      relation: "spouse",
      gender: "female"
    },
    {
      name: "Harper",
      relation: "child",
      gender: "female"
    },
    {
      name: "Zoey",
      relation: "child",
      gender: "female"
    },
    {
      name: "Dave",
      relation: "self",
      gender: "male"
    }
  ],
  restaurants: [
    {
      name: "Sweeto Burrito",
      type: "fast-food",
      rating: "5"
    },
    {
      name: "SLABPizza",
      type: "pizza",
      rating: "4"
    },
    {
      name: "Blue Lemon",
      type: "clean dining",
      rating: "3"
    },
    {
      name: "McDonalds",
      type: "fast-food",
      rating: "1"
    }
  ]
};

module.exports = user;
