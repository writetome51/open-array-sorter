import { OpenArrayContainer } from '@writetome51/open-array-container/OpenArrayContainer';
import { getShuffled } from '@writetome51/array-get-shuffled/getShuffled';
import { getInAscendingOrder } from '@writetome51/get-in-ascending-order/getInAscendingOrder';
import { alphabetize } from '@writetome51/alphabetize/alphabetize';
import { append } from '@writetome51/array-append-prepend/append-prepend';


// All the methods in this class modify the array without breaking its reference,
// so it remains in-sync with other references to the same array.


export class OpenArraySorter extends OpenArrayContainer {


	constructor(data = []) {
		super(data);
	}


	// All these functions return the class instance.


	numbersAscending(): this {
		let orderedNumbers = getInAscendingOrder(this.data);
		this.data.length = 0;
		return this.returnThis_after(append(orderedNumbers, this.data));
	}


	numbersDescending(): this {
		return this.returnThis_after(this.numbersAscending().reverse());
	}


	alphabetize(): this {
		return this.returnThis_after(alphabetize(this.data));
	}


	reverse(): this {
		return this.returnThis_after(this.data.reverse());
	}


	shuffle(): this {
		let shuffledData = getShuffled(this.data);
		this.data.length = 0;
		return this.returnThis_after(append(shuffledData, this.data));
	}


}
