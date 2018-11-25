# PublicArraySorter

A TypeScript/JavaScript class for sorting array items.  
All its methods modify the array and return the class instance.

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

```



## Usage

```
// getting an instance:
let sort = new PublicArraySorter(['h','e','l','l','o']);

// changing the array content:
sort.data = [1,2,3,4,5,6,7];

```


## License
[MIT](https://choosealicense.com/licenses/mit/)