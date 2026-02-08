import { readFile , writeFile} from "node:fs";
import { promisify } from "node:util";
const readFilePromise=promisify(readFile);
const writeFilePromise=promisify(writeFile);


// const getText=(path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf-8',(err,result)=>{
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(result);
//             }

//         })
//     })
// }

// getText('./content/first.txt')
// .then(result=>console.log(result))
// .catch(err=>console.log(err))

const start=async()=>{
    try{
        const first=await readFilePromise('./content/first.txt','utf-8');
        console.log(first);
        const second=await readFilePromise('./content/second.txt','utf-8');
        console.log(second); 
        await writeFilePromise('./content/result-mind-grenade.txt',`This is the result : ${first}, ${second}`)
        console.log("done with this task");
    }
    catch(err){
        console.log(err);
    }
}

start()