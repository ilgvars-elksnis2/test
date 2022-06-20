const excelToCsv = require('./excelToCsv2')
const fs = require('fs');
test('function exists', () => {
	
	expect(excelToCsv).toBeDefined();
});

test('Error', () => {

    jest.spyOn(fs, 'writeFile').mockImplementation((f, d, callback) => {
        callback('some error');
    });

    expect(excelToCsv('Does not matter')).toBeUnDefined;
});