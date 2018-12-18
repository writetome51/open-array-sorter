import { PublicArraySorter } from './index';
import { arraysMatch } from '@writetome51/arrays-match';
import { arrayHasAll } from '@writetome51/array-has';


let sort = new PublicArraySorter();


// Test 1 - make sure .alphabetize() works:
sort.data = ['book', 'copy', 'zaa', 'aac', '_10', 100, 'aaa', 'atco',
	'Zebra', 'bat', '__100', '!', 'aab', '@', 'Ã', '#', '$', '%', '^',
	'&', '*', '000', 'AE', '(', ')', '-', 'Atco', '+', '=', 'aardvark', 2,
	'1000', '30', 0, 'A', 'qqq', '~', 'x', 'Ô', 'Â', '<', '>', ',', '.', 'Í', 'Ǣ',
	'i', '/', '?', 'Zaa', '∏', '|', '\\'];
let otherArr = sort.data;
let obj = sort.alphabetize();

if (arraysMatch(sort.data, [
	'__100', '_10', '-', ',', '!', '?', '.', '(', ')', '@', '*', '/', '\\', '&', '#',
	'%', '^', '∏', '+', '<', '=', '>', '|', '~', '$', 0, '000', 100, '1000',
	2, '30', 'A', 'Â', 'Ã', 'aaa', 'aab', 'aac', 'aardvark', 'AE', 'Ǣ', 'Atco',
	'atco', 'bat', 'book', 'copy', 'i', 'Í', 'Ô', 'qqq', 'x', 'Zaa', 'zaa', 'Zebra'
])) console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 1A: make sure function returned the class instance:
if (obj.className && obj.className === 'PublicArraySorter' &&
	arraysMatch(sort.data, obj.data)) console.log('test 1A passed');
else console.log('test 1A FAILED');


//Test 1B: make sure memory reference wasn't broken:
if (arraysMatch(sort.data, otherArr)) console.log('test 1B passed');
else console.log('test 1B FAILED');


// Test 2: test .numbersAscending:
sort.data = [5, 0.004, -1, 202, 4, 2, 20, 4, 10, 100, 99.1, 98.9, 99];
otherArr = sort.data;
obj = sort.numbersAscending();
if (arraysMatch(sort.data, [-1, 0.004, 2, 4, 4, 5, 10, 20, 98.9, 99, 99.1, 100, 202]))
	console.log('test 2 passed');
else console.log('test 2 FAILED');

// Test 2A: make sure function returned the class instance:
if (obj.className && obj.className === 'PublicArraySorter' &&
	arraysMatch(sort.data, obj.data)) console.log('test 2A passed');
else console.log('test 2A FAILED');


//Test 2B: make sure memory reference wasn't broken:
if (arraysMatch(sort.data, otherArr)) console.log('test 2B passed');
else console.log('test 2B FAILED');


// Test 3: test .numbersDescending():
sort.data = [5, 0.004, -1, 202, 4, 2, 20, 4, 10, 100, 99.1, 98.9, 99];
otherArr = sort.data;
obj = sort.numbersDescending();
if (arraysMatch(sort.data, [202, 100, 99.1, 99, 98.9, 20, 10, 5, 4, 4, 2, 0.004, -1]))
	console.log('test 3 passed');
else console.log('test 3 FAILED');

// Test 3A: make sure function returned the class instance:
if (obj.className && obj.className === 'PublicArraySorter' &&
	arraysMatch(sort.data, obj.data)) console.log('test 3A passed');
else console.log('test 3A FAILED');


//Test 3B: make sure memory reference wasn't broken:
if (arraysMatch(sort.data, otherArr)) console.log('test 3B passed');
else console.log('test 3B FAILED');


// Test 4: test .reverse():
sort.data = [5, 0.004, -1, 202, 4, 2, 20, 4, 10, 100, 99.1, 98.9, 99];
otherArr = sort.data;
obj = sort.reverse();
if (arraysMatch(sort.data, [99, 98.9, 99.1, 100, 10, 4, 20, 2, 4, 202, -1, 0.004, 5]))
	console.log('test 4 passed');
else console.log('test 4 FAILED');

// Test 4A: make sure function returned the class instance:
if (obj.className && obj.className === 'PublicArraySorter' &&
	arraysMatch(sort.data, obj.data)) console.log('test 4A passed');
else console.log('test 4A FAILED');


//Test 4B: make sure memory reference wasn't broken:
if (arraysMatch(sort.data, otherArr)) console.log('test 4B passed');
else console.log('test 4B FAILED');


// Test 5: test .shuffle():
sort.data = [5, 0.004, -1, 202, 4, 2, 20, 4, 10, 100, 99.1, 98.9, 99];
otherArr = sort.data;
obj = sort.shuffle();
if (sort.data.length === 13 &&
	arrayHasAll([5, 0.004, -1, 202, 4, 2, 20, 4, 10, 100, 99.1, 98.9, 99], sort.data))
	console.log('test 5 passed');
else console.log('test 5 FAILED');

// Test 5A: make sure function returned the class instance:
if (obj.className && obj.className === 'PublicArraySorter' &&
	arraysMatch(sort.data, obj.data)) console.log('test 5A passed');
else console.log('test 5A FAILED');


//Test 5B: make sure memory reference wasn't broken:
if (arraysMatch(sort.data, otherArr)) console.log('test 5B passed');
else console.log('test 5B FAILED');
//
