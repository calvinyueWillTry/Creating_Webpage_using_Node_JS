// TODO: Import your Header, TaskList, and TaskListItem
const headerItem = require("./headerItem.js");
const {formatDate } = require("./date.js");
//const { addTask } = require("./cli.js");
const tasklisting = require("./tasklistitemizing.js");
const listofTasks = require("./tasklist.js");

function createDocument(title, tasks = []) { //function to return the HTML string below
  // TODO: Create a new Header
  const headDate = formatDate(new Date());
  const heading = new headerItem().render();
  // TODO: Create new TaskListItems from the provided tasks
  const tasklister = tasks.map((t) => {
    return new tasklisting ([t.text], t.priority)
  });
  const tasklist = new listofTasks(tasklister).render();
  //let tasklist = addTask(title, tasks);
  // class Itemizing (tasks) {
  //   constructor (tasks) {}}
      // const tasklist = (tasks) => {
      //   stringList = "";
      //   tasks.map(task=>{
      //     "<p>"+stringList+task+"<p>"/n;
      //     //return new taskToDo(task).render ()
      //   }) 
      //   return stringList;
      // } 
  console.log(title, tasks);// = text, priority from CLI
  console.log(tasklister);
  console.log(tasklist);
  // TODO: Add TaskListItems to a new TaskList
  // TODO: Modify the template below to include your title, Header, and TaskList
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>enter</title>
      <link rel="stylesheet" href="../dist/style.css" />
    </head>
    <body>
      <div class="card">
        <header>
        ${heading}
        </header>
        <main>
        ${tasklist(tasks)}
        ${tasklist}
        </main>
      </div>
    </body>
  </html>`;
}
module.exports = { createDocument };
