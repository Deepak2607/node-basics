const fs = require('fs');

//const fn=()=>{
//    console.log('function is called');
//}
const string="It's working";
const greetings=fs.readFileSync('greetings.txt');


module.exports={
    string,
    greetings
}