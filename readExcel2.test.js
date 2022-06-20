// import readExcel from './readExcel2';
const readExcel = require('./readExcel2')

test('Should be under 1600', () => {
	const load1 = 800;
	const load2 = 800;
	expect(load1 + load2).toBeLessThanOrEqual(1600);
});

test('function exists', () => {
	
	expect(readExcel).toBeDefined();
});

