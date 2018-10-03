import { OpenArrayContainer } from '@writetome51/open-array-container/OpenArrayContainer';
import { getShuffled } from '@writetome51/array-get-shuffled/getShuffled';
import { getInAscendingOrder } from '@writetome51/get-in-ascending-order/getInAscendingOrder';
import { alphabetizeAscending, alphabetizeDescending }
	from 'intuitive-string-handlers/alphabetizeAscending_alphabetizeDescending';
import {getCopy} from '@writetome51/array-non-modifying-getters-basic/getCopy';



export class OpenArraySorter extends OpenArrayContainer {


	constructor(data = []) {
		super(data);
	}


	// These functions modify the array and return the class instance.


	numbersAscending(): this {
		return this.returnThis_after(this.data = getInAscendingOrder(this.data));
	}


	numbersDescending(): this {
		return this.returnThis_after(this.numbersAscending().reverse());
	}


	alphabetizeAscending(): this {
		return this.returnThis_after(alphabetizeAscending(this.data));
	}


	alphabetizeDescending(): this {
		return this.returnThis_after(alphabetizeDescending(this.data));
	}


	reverse(): this {
		return this.returnThis_after(this.data.reverse());
	}


	shuffle(): this {
		let copy = getCopy(this.data);
		return this.returnThis_after(this.data = getShuffled(copy));
	}


}
