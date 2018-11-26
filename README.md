# PublicArraySorter

A TypeScript/JavaScript class for sorting array items.  
All its methods change the order of the items and return the class instance.

## Installation

You must have npm installed first.  Then, in the command line:

```bash
npm install @writetome51/public-array-sorter
```

## Loading
```
// If using TypeScript:
import {PublicArraySorter} from '@writetome51/public-array-sorter';
// If using ES5 JavaScript:
var PublicArraySorter = require('@writetome51/public-array-sorter').PublicArraySorter;
```


## Public API

### Constructor
```
new PublicArraySorter(array = [])
```

### Properties

```
data : any[] (read-writable) // This is the array to be operated on.
```

### Methods

```
alphabetize(): this;

numbersAscending(): this;

numbersDescending(): this;

reverse(): this;

shuffle(): this;
```



## Usage

```
// getting an instance:
let sort = new PublicArraySorter([4,1,6,0,2,9,7]);

// sorting numbers:
sort.numbersAscending(); // sort.data is now [0,1,2,4,6,7,9]

// changing the array content:
sort.data = ['h','e','l','l','o'];

// sorting alphabetically:
sort.alphabetize(); // sort.data is now ['e', 'h', 'l', 'l', 'o']

// reversing the order:
sort.reverse(); // sort.data is now ['o', 'l', 'l', 'h', 'e']

// randomizing the order:
sort.shuffle();

```


## License
[MIT](https://choosealicense.com/licenses/mit/)