import formatCurrency from './formatCurrency'
import { expect } from '@jest/globals'

let myString: string = formatCurrency(1000.5);

test('converts number decimal to string with commas', () => {
	expect(myString.toBe('1,000.50'));
})
