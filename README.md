# PublicArraySorter

An array-manipulating TypeScript/JavaScript class with methods that change   
the order of the array items.

## Constructor
```ts
constructor(data? = [])  // 'data' is assigned to this.data .
```

You can reset the array by accessing the class `.data` property:
```ts
this.data = [1,2,3,4];
```

## Properties
```ts
data : any[]  // the actual array

className : string (read-only)
```

## Methods
<details>
<summary>view methods</summary>

```ts
alphabetize(): this;
    // No item in this.data gets modified, but each is treated as a string 
    // during the sorting.

numbersAscending(): this;
    // If not all items in this.data are of type 'number', it triggers error.

numbersDescending(): this;
    // If not all items in this.data are of type 'number', it triggers error.

reverse(): this;

shuffle(): this;
    // randomizes the order of items.
```
The methods below are not important to know about in order to use this  
class.  They're inherited from [BaseClass](https://github.com/writetome51/typescript-base-class#baseclass) .
```ts
protected   _createGetterAndOrSetterForEach(
		propertyNames: string[],
		configuration: IGetterSetterConfiguration
	   ) : void
    /*********************
    Use this method when you have a bunch of properties that need getter and/or 
    setter functions that all do the same thing. You pass in an array of string 
    names of those properties, and the method attaches the same getter and/or 
    setter function to each property.
    IGetterSetterConfiguration is this object:
    {
        get_setterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
        ) => Function,
	    // get_setterFunction takes the property name as first argument and 
	    // returns the setter function.  The setter function must take one 
	    // parameter and return void.
	    
        get_getterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
        ) => Function
	    // get_getterFunction takes the property name as first argument and 
	    // returns the getter function.  The getter function must return something.
    }
    *********************/ 


protected   _returnThis_after(voidExpression: any) : this
    // voidExpression is executed, then function returns this.
    // Even if voidExpression returns something, the returned data isn't used.

protected   _errorIfPropertyHasNoValue(
                property: string, // can contain dot-notation, i.e., 'property.subproperty'
                propertyNameInError? = ''
            ) : void
    // If value of this[property] is undefined or null, it triggers fatal error:
    // `The property "${propertyNameInError}" has no value.`
```
</details>

## Usage Examples
<details>
<summary>view examples</summary>

```ts
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
</details>

## Inheritance Chain

PublicArraySorter<--[PublicArrayContainer](https://github.com/writetome51/public-array-container#publicarraycontainer)<--[BaseClass](https://github.com/writetome51/typescript-base-class#baseclass)

## Installation

```bash
npm install @writetome51/public-array-sorter
```

## Loading
```ts
// If using TypeScript:
import {PublicArraySorter} from '@writetome51/public-array-sorter';
// If using ES5 JavaScript:
var PublicArraySorter = require('@writetome51/public-array-sorter').PublicArraySorter;
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
