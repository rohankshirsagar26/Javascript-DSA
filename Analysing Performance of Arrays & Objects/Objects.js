let instructor = {
  firstName: "John",
  lastName: "Doe",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

// Big O of Object Methods

console.log(Object.keys(instructor)); // O(N)
console.log(Object.values(instructor)); // O(N)
console.log(Object.entries(instructor)); // O(N)
console.log(instructor.hasOwnProperty("lastName")); // O(1)
