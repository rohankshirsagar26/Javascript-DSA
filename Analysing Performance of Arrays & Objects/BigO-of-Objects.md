# Big O of Objects

##### When to use Objects:

    When you don’t need order.
    When you need fast(constant time) accessing/insertion or removal of data.

# Big O of Objects:

No matter how many attributes the object has, JavaScript is able to insert an attribute into an object and will always have roughly the same runtime.

There is no order so there is no beginning or end of the object so it doesn’t
matter where you _Insert_ because there is no repercussion and the same goes for _Removal_ and _Accessing_.

- **Insertion O(1)**

```
let instructor = {
  firstName: 'John',
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};
instructor.lasteName = 'Doe'
```

- **Removal O(1)**

```
delete instructor.favoriteNumbers
```

- **Access O(1)**

```
instructor.firstName
```

Searching for a _key_ can still be very fast and be _O(1)_ but if it’s searching for a _value_ then we need to go through every single item and check, so that’s why it is _O(n)_

- **Searching for Key O(1)**

```
'firstName' in instructor ('key' on object)
```

- **Searching for Value O(n)**

```
for (key in instructor) {
  if (instructor[key] == "Doe")
    console.log("Exists");
}
```

# Big O of Object Methods:

- **_Object.keys_ O(n)**
  As the number of items in the object grows we would need to visit every key once and add it to the array.

```
Object.keys(instructor)
=>(3) ["firstName", "isInstructor", "favoriteNumbers"]
```

- **_Object.values_ O(n)**
  Same as _Object.keys_. In this case it returns an Array of all the values.

```
Object.values(instructor)
=>(3) ["firstName", "isInstructor", "favoriteNumbers"]
```

- **_Object.entries_ O(n)**
  Technically it has to do a little more work than Object.key because it has to compile the key AND the value but it just simplifies to O(n).

```
Object.entries(instructor)
=> (3) [
0: ["firstName", "John"]
1: ["isInstructor", true]
2: ["favoriteNumbers", Array(4)]
]
```

- **_Object.hasOwnProperty_ O(1)**
  Finds a property in an object without iterating over all the properties.

```
instructor.hasOwnProperty("firstName")
=> true
```
