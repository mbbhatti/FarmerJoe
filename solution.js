/**
 * Solution #1
 * 
 * Implement groupBy, a function that groups an array of objects by a property existing in each of the objects. 
 * The first argument should be the array of objects, and the second should be the property to group by.
 */
function groupBy(arr, property) {
    if (Object.keys(arr).length === 0 || property === '') {
        return false;
    }

    const obj = arr.reduce(function(res, current) {
        if (!res[current[property]]) {
            res[current[property]] = [];
        }
        res[current[property]].push(current);

        return res;
    }, {});

    return obj;
}

const data = [
    { amount: 100, date: "5/5/2016" },
    { amount: 200, date: "6/5/2016" },
    { amount: 300, date: "5/5/2016" }
];

const groupedByDate = groupBy(data, "date"); 
console.log(groupedByDate);

/**
 * Solution #2
 * 
 * Implement a loop using recursion
 * Your goal is to recursively create an array of five elements, containing the numbers 0-4.
 */
let i = 0;
function loopFiveTimes() {
    return [].concat(i++, (i < 4) ? loopFiveTimes() : i);
}

const arr = loopFiveTimes();
console.log(arr);

/**
 * Solution #3
 * 
 * Write a function fromGarden
 */ 
function fromGarden(data, property) {
    if (Object.keys(data).length === 0 || property === '') {
        return function() {
            return function() {}
        };
    }

    return function(key) {
        if (data[property][key] === undefined) {
            return function() {}
        }

        return function(limit) {
            const len = data[property][key].length;
            return data[property][key].slice(0, (limit > len) ? len : limit);
        }
    }
}

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
console.log(myApples);