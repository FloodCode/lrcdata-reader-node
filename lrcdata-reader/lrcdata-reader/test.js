var fs = require('fs');
var lrcdataReader = require('./lrcdata-reader.js');

fs.open('lrcdata.bin', 'r', function (status, fd) {
    if (status) {
        console.log(status.message);
        return;
    }
    
    var stats = fs.statSync('lrcdata.bin');
    var buffer = new Buffer(stats['size']);
    fs.read(fd, buffer, 0, stats['size'], 0);
    var lrcdata = lrcdataReader.read(buffer);
    console.log(lrcdata);    
});