console.log("Gess a number between 1 to 8");

let mynumber = Math.floor(Math.random()*7)

import inquirer from "inquirer";
while(true){
let input = await inquirer.prompt(
    { name: "Guess",type: "number", message: "select a number between 1 to 8"}
)
}
let ans :number = mynumber,Gess
if (mynumber==ans){
    console.log("congratulation you gess the right number")
}else{console.log("Sorry you gess the wrong number please try it again")}