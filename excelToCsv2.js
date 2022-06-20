function excelToCsv() {
    var xlsx = require('node-xlsx');
    var fs = require('fs');
    var obj = xlsx.parse(__dirname + '/test.xlsx'); // Parses a file
    var rows = [];
    var writeStr = "";
    
    // Looping through all sheets
    for(var i = 0; i < obj.length; i++)
    {
        var sheet = obj[i];
        // Loop through all rows in the sheet
        for(var j = 0; j < sheet['data'].length; j++)
        {
                // Add the row to the rows array
                rows.push(sheet['data'][j]);
        }
    }
    
    // Creates the csv string to write it to a file
    for(var i = 0; i < rows.length; i++)
    {
        writeStr += rows[i].join(",") + "\n";
    }
    
    // Writes to a file
    fs.writeFile(__dirname + "/test.csv", writeStr, function(err) {
        if(err) {
            return console.log(err);
        }
    }); 
}

excelToCsv()

module.exports = excelToCsv;