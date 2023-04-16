# Big O of Arrays

##### When to use Arrays:

    When you need fast access to elements.

# Big O of Arrays:

Arrays can also be fast in some insertion or removal methods. These types of methods have either an _O(1)_ or _O(n)_.

The difference comes from where in the array elements are inserted or removed. If elements are inserted or removed from the end of an array, these methods have an _O(1)_ because just the last indexed element is impacted.

However, if elements are inserted or removed from the beginning of an array, all elements are impacted. If we add an element to the beginning of the array, the added element takes over index 0, and the element that previously was in index 0 is now at index 1 and so forth. Since the number of operations grows with the number of elements in the array, these methods have an _O(n)_.

- **Insertion at End O(1)**

```
let names = ["Micheal", "Melissa", "Andrea", "John"];

names[4] = "Ryan";
console.log(names);
```

- **Insertion at Start O(n)**

```
names[0] = "Ryan";
```

- **Removal from End O(1)**

- **Removal from Start O(n)**

- **Access O(1)**

```
names[2]
```

Arrays have an _O(n)_ for searching methods. This is because the worst case scenario for a search method is checking every element in the array.

- **Searching O(n)**

```
for (i in names) {
  if (names[i] == "Andrea")
    console.log("Exists")
}
```

# Big O of Array Methods:

- **_Array.push()_ O(1)**
  Adds element at the end of an array.

```
names.push("Ryan")
=>[ 'Micheal', 'Melissa', 'Andrea', 'John', 'Ryan' ]
```

- **_Array.pop()_ O(1)**
  Removes element at the end of an array.

```
names.pop()
=>[ 'Micheal', 'Melissa', 'Andrea', 'John']
```

- **_Array.unshift()_ O(n)**
  Adds element at the start of an array.

```
names.unshift('Ryan')
=>['Ryan', 'Micheal', 'Melissa', 'Andrea', 'John']
```

- **_Array.shift()_ O(n)**
  Removes element from the start of an array.

```
names.shift()
=>['Melissa', 'Andrea', 'John']
```

- **_Array.concat()_ O(n)**

- **_Array.slice()_ O(n)**

- **_Array.splice()_ O(n)**

- **_Array.map()_ O(n)**

- **_Array.filter()_ O(n)**

- **_Array.sort()_ O(nlogn)**
