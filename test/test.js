
const { sumaConsecutivos } = require('../src/ejercicio2.js')
const { dameElemPosX } = require('../src/ejercicio3.js')
const { eliminaDups } = require('../src/ejercicio4.js')
const { verificaSimbols } = require('../src/ejercicio5.js')


test("sumaConsecutivos(3, 6) = 18", () => {
	expect(sumaConsecutivos(3, 6)).toBe(18);
});

test("sumaConsecutivos(4, 0) = 10", () => {
	expect(sumaConsecutivos(4, 0)).toBe(10);
});




test("dameElemPosX([4,3,2], 1) = 3", () => {
	expect( dameElemPosX([4,3,2], 0) ).toBe(2);
});

test("dameElemPosX([4,3,2,5,9,1,1], 2) = 2", () => {
	expect( dameElemPosX([4,3,2,5,9,1], 3) ).toBe(2);
});

test("dameElemPosX([1,2,3,4], 2) = 2", () => {
	expect( dameElemPosX([1,2,3,4], 2) ).toBe(3);
});




test("eliminaDups([1,1,2,3,3,4]) = [1,2,3,4]", () => {
	expect( eliminaDups([1,1,2,3,3,4]) ).toEqual([undefined,1,2,3,4]);
});

test("eliminaDups([1,1,2,3,3,4]) = [1,2,3,4]", () => {
	expect( eliminaDups([1,1,1,1,1]) ).toEqual([undefined,1]);
});






test("verificaSimbols('([])([])') = true", () => {
	expect( verificaSimbols('([])([])') ).toEqual(true);
});

test("verificaSimbols(')(') = false", () => {
	expect( verificaSimbols(')(') ).toEqual(false);
});
