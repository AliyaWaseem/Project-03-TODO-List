#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

//Title Description
console.log(chalk.bold.magentaBright.italic("\n \t Welcome to Todo-List Application"));
console.log(chalk.bold.yellowBright("*".repeat(50)));

let todos : string[] = ["TypeScript test", "PYTHON test"];
let conditions = true;


// while (conditions) {
//     let addTask = await inquirer.prompt([
//         {
//           name: "task",
//           type: "input",
//           message: chalk.yellow("Enter your Task:")
//     }
// ]);
// todos.push(addTask.task);
// console.log(`${addTask.task} Task added in Todo-List successfully`);

// let addMoreTask = await inquirer.prompt([
//     {
//       name: "addMore",
//       type: "confirm",
//       message: chalk.cyanBright("Do you want to add more task?"),
//       default: "false"
// }
// ]);
// conditions = addMoreTask.addMore

// }
// console.log("Your Updated Todo-List:" , todos);

// Function to Add Task

let main = async () => {

    while (conditions){
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: chalk.bold.greenBright("Select What do you want to do:"),
                choices: ["Add Task", "View Todo-List", "Update Task", "Delete Task", "Exit"]
    
        }
    ]);
       if(option.choice === "Add Task"){
         await addTask()
       }
       else if(option.choice === "View Todo-List"){
        await viewTask()
       }
       else if(option.choice === "Update Task"){
        await updateTask()
       }
       else if(option.choice === "Delete Task"){
        await deleteTask()
       }
       else if(option.choice === "Exit"){
        conditions = false;
       }
    
    }
}
//function to add new task
let addTask = async () => {
    let newTask = await inquirer.prompt([{
        name: "task",
        type: "input",
        message: "Enter your new Task:"
    }
]);
 todos.push(newTask.task);
 console.log(chalk.bold.yellowBright(`\n ${newTask.task} is added successfully in Todo-List.`));
 
}
// function to view all tasks
let viewTask = () => {
    console.log(chalk.bold.yellowBright("\n<<<<<<<<<<<<Your Todo-List:>>>>>>>>>>>>\n"));
    todos.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
        console.log(chalk.bold.yellowBright("--------------------------------------\n"));
    });
    
}
// function to delete task
let deleteTask = async () => {
    await viewTask()
    let taskIndex = await inquirer.prompt([
        {
        name: "index",
        type: "number",
        message: "Enter the index of task you want to delete:"
    }
]);
let deleteTask = todos.splice(taskIndex.index, 1);
console.log(chalk.yellowBright(`\n ${deleteTask} has been deleted successfully from your Todo-List.`));

}

// function to update task
let updateTask = async () => {
    await viewTask()
    let updateTask_Index = await inquirer.prompt([{
        name: "index",
        type: "number",
        message: chalk.bold.magentaBright("Enter the index of task you want to update:")
    },
    {
        name: "update",
        type: "input",
        message: chalk.bold.yellowBright("Enter your new task name:")
    }
]);
todos[updateTask_Index.index] = updateTask_Index.update;
console.log(chalk.bold.yellowBright.underline(`\n Task at index no: ${updateTask_Index.index} has been updated successfully! [You can check it in "view Todo-List" option]\n`));

}

main();