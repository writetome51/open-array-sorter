import { OpenArraySorter } from './OpenArraySorter';


let sorter = new OpenArraySorter([1,2,3,4,5,6,7]);

sorter.shuffle();
console.log(sorter.data);

let copy = sorter.data;

sorter.alphabetize();

console.log(sorter.data);
console.log(copy);