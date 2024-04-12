const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document.js');

class CLI {
  constructor() {
    this.title = '';//placeholder

    // Array of task objects e.g. [{ text: string, priority: bool }, ...]
    this.tasks = [];//placeholder
  }
  run() { //has a series of functions that asks questions
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Please enter your name',
        },
        //console.log(inquirer)
      ])
      .then(({ name }) => { //see 18 under prompt
        console.log(name)//success
        this.title = `${name}'s Tasks`;
        return this.addTask();
      })
      .then(() => {
        // sort by priority so that priority tasks come before non-priority tasks
        this.tasks.sort((a, b) => //lists according to what got Y for priority
          a.priority === b.priority ? 0 : a.priority && !b.priority ? -1 : 1
        );
        return writeFile(
          join(__dirname, '..', 'output', 'tasks.html'),//directory to where the file will be written, albeit with / between each
          //equivalent to "../output/tasks.html" but more chance of it working elsewhere
          createDocument(this.title, this.tasks) //passed onto function
        );
      })
      .then(() => console.log('Created tasks.html'))//success
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }

  addTask() { //other prompt added separately 
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Enter task',
        },
        {
          type: 'confirm', //this appears as a Y/N , entered accordingly
          name: 'priority',
          message: 'Is this a priority task?',
        },
        {
          type: 'confirm',
          name: 'confirmAddTask',
          message: 'Would you like to add another task?',
        },
        //console.log(inquirer)
      ])
      .then(({ text, priority, confirmAddTask }) => {
        this.tasks.push({ text, priority });
        if (confirmAddTask) { //adds another tasks if Y
          return this.addTask();
        }
      });
      
  }
}

module.exports = CLI;
