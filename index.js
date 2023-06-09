const fs = require('fs');
const http = require('http');

/////////////////////////////
// Files

// Blocking sychronous way
// const textIn = fs.readFileSync('./txt/input.txt','utf-8');
// console.log(textIn);
// const textOut = `This is what we know about the avocado :${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written!');

// // Non-blocking Asynchrnous way 
// fs.readFile('./txt/startrrrrr.txt','utf-8', (err, data1) => { 
//     if (err) return console.log('errrrrrrrr');
//     fs.readFile(`./txt/${data1}.txt`,'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile('./txt/append.txt', 'utf-8', (err,data3) => {
//             console.log(data3);

//             fs.writeFile('./txt/final.txt', `${data1}\n${data3}`, 'utf-8', err =>{
//                 console.log('Your file has been written');
//             })
//         })
//     })
// });
//console.log('will read file');

//SERVER
const server = http.createServer((req, res) => {
    res.end('Hello from the server!');   //sending response to the client
});


server.listen(8000, '127.0.0.1', () => {
    console.log('Listen to requests on port 8000');
})

// 127.0.0.1 is the local host and 8000 is the port

// it will listen to the server first and then response
