import { PublicArrayContainer } from '@writetome51/public-array-container';
import { getShuffled } from '@writetome51/array-get-shuffled';
import { getInAscendingOrder } from '@writetome51/get-in-ascending-order';
import { alphabetize } from '@writetome51/alphabetize';
import { setArray } from '@writetome51/set-array';


export class PublicArraySorter extends PublicArrayContainer {


	constructor(data = []) {
		super(data);
	}


	// All these functions change the order of the array items and return the class instance.


	alphabetize(): this {
		return this._returnThis_after(alphabetize(this.data));
	}


	numbersAscending(): this {
		let orderedNumbers = getInAscendingOrder(this.data);
		return this._returnThis_after(setArray(this.data, orderedNumbers));
	}


	numbersDescending(): this {
		return this.numbersAscending().reverse();
	}


	reverse(): this {
		return this._returnThis_after(this.data.reverse());
	}


	shuffle(): this {
		let shuffledData = getShuffled(this.data);
		return this._returnThis_after(setArray(this.data, shuffledData));
	}


}
