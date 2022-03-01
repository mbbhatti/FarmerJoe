
## Implement groupBy (1/3)
Implement groupBy, a function that groups an array of objects by a property existing in each of the objects. The first argument should be the array of objects, and the second should be the property to group by.

Example usage:
```
const groupedByDate = groupBy([
   { amount: 100, date: "5/5/2016" },
   { amount: 200, date: "6/5/2016" },
   { amount: 300, date: "5/5/2016" }
], "date");

groupedByDate
> {
   "5/5/2016": [
     { amount: 100, date: "5/5/2016" },
     { amount: 300, date: "5/5/2016" }
   ],
   "6/5/2016": [
     { amount: 200, date: "6/5/2016" }
   ]
 }
```

## Implement a loop using recursion (2/3)
Your goal is to recursively create an array of five elements, containing the numbers 0-4.
Example usage:

```
const arr = loopFiveTimes();

arr
> [0, 1, 2, 3, 4]
```

## Write a function fromGarden that behaves as follows (3/3)

```
const gardens = {
  'My Garden': {
    apples: [
      { size: 'large', color: 'red' }, { size: 'small', color: 'yellow' }
    ]
  }
};

const fromMyGarden = fromGarden(gardens, 'My Garden');
const getApples = fromMyGarden('apples');
const myApples = getApples(2);

myApples
> [ { size: 'large', color: 'red' }, { size: 'small', color: 'yellow' } ]
```