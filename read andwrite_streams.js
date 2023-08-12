const fs = require('fs');
const zlib = require('zlib');

// transforms
const gzip = zlib.createGzip();
const gunzip = zlip.createGzip();
// sources and locations
const readStream = fs.createReadStream('./example2.txt', 'utf-8')
const writestream = fs.createWriteStream('./example3.txt', 'utf-8')
const writestreamgz = fs.createWriteStream('./example3.gz')

// unzip the file and write it to another file
readStream.pipe(gunzip).pipe(writestream);

// chaining pipes
readStream.pipe(gzip).pipe(writestream);

//send data from file to file
readStream.on('data', (chunk) => {
    writestream.write('data', (chunk));
    console.log(chunk);
});

// piping and pipes
// another way to do it
readStream.pipe(writestream);