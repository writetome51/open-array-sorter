import { PublicArrayContainer } from '@writetome51/public-array-container';
import { getShuffled } from '@writetome51/array-get-shuffled';
import { getInNumericOrder } from '@writetome51/get-in-numeric-order';
import { alphabetize } from '@writetome51/alphabetize';
import { setArray } from '@writetome51/set-array';


export class PublicArraySorter extends PublicArrayContainer {


	// All these functions change the order of the array items and return the class instance.


	alphabetize(): this {
		return this._returnThis_after(alphabetize(this.data));
	}


	numbersAscending(): this {
		let orderedNumbers = getInNumericOrder(this.data);
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
