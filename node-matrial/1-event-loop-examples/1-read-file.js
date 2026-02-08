// npm -global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>
// global dependency - use it in any project
// npm install -g <packageName>
// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// const _= require('lodash');

// const items=[1,[2,[3,[4]]]]
// const newItems=_.flattenDeep(items);
// console.log(newItems);
// console.log("Hello World");

import { readFile } from "node:fs";

console.log("start");

readFile('./content/first.txt','utf-8',(err,result)=>{  
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    console.log("completed first task");
}
)

console.log("starting next task");

