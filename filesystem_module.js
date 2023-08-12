const fs = require('fs');


// create a file
// fs.writeFile('example.txt', "this is a test file", (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log('done');
//         fs.readFile('example.txt','utf8', (err, file) => {
//             if (err)
//                 console.log(err);
//             else
//                 console.log(file);
//         });
//     }
// });
// fs.rename('example.txt', 'example2.txt',(err, file) => {
//     if (err)
//         console.log(err);
//     else
//         console.log('you have renamed this file');
// });
// 
// fs.unlink('example2.txt', (error, file) => {
//     if (err)
//         ;
//     // you should know what you are doing
// });


///prt2 down here
// fs.mkdir('tot', (err, file) => {
//     if (err)
//         console.log(err);
//     else 
//         console.log('file created');
// });

// fs.mkdir('tot1', (err) => {
//     if (err)
//         console.log(err);
//     else 
//         fs.writeFile('./tot1/example.txt','123',(err, file) => {
//             if (err)
//                 console.log(err);
//             else
//                 console.log('done');
//         });
// });
    // to rea all the files in the directory
fs.readdir('example',(err, file) => {

});