//Step 2: Node.js Module System

// two types of modules CommonJS and ES Modules

// 1. common js ---> Uses require() and module.exports
// 2. ES Modules ---> Uses import and export

// for Es module we need to write "type": "module" in package.json file
//if you use type:module then require() not work and if you not define then import not work.

const commonjs=require('./commonjs.js')  
import {helloworld,helloToPerson} from './esModule.js'

//using common js function by using module.exports and require
commonjs.greet("priyanshu")
const a=commonjs.add(1,2)
console.log(a)

//using esModule function by using import and exports 
helloworld();
helloToPerson("ramesh");

