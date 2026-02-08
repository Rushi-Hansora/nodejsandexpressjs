import { createReadStream } from "fs";  
const stream=createReadStream('./content/big-file.txt',{highWaterMark:90000,encoding:'utf-8'})
stream.on('data',(result)=>{
    console.log(result);
})
stream.on('error',(err)=>{
    console.log(err);
})
stream.on('end',()=>{
    console.log('Finished reading file');
})

//  default highWaterMark is 64kb for createReadStream and 16kb for createWriteStream
// last buffer will be less than highWaterMark and it will be end of file remainder
// highWaterMark is the size of buffer that we want to read at a time
