var fs = require('fs');
var path = require('path');

// File "destination.txt" will be created or overwritten by default.
fs.copyFile(path.resolve(__dirname, 'index.html'), path.resolve(__dirname, 'public/index.html'), (err) => {
    if (err) 
        throw err;
    console.log('FIle copied);
});
