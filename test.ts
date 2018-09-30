import { OpenArraySorter } from './OpenArraySorter';


let sorter = new OpenArraySorter([1,2,3,4,5,6,7]);

sorter.shuffle();
console.log(sorter.data);

sorter.numbersDescending();
console.log(sorter.data);

sorter.numbersAscending();
console.log(sorter.data);

sorter.alphabetizeDescending();
console.log(sorter.data);

console.log(sorter.reverse().data);