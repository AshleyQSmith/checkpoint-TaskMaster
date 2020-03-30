import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.title = data.title;
    this.id = data.id || generateId();
    this.tasks = data.tasks || []
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you

  get Template(){
    return /*html*/`
    <div class="col-3 border border-dark bg-light rounded shadow mx-2">
    <button type="button" class="close text-danger" onclick="app.listController.delete('${this.id}')">
    <span>&times;</span>
    </button>
    <label class="bg-warning text-dark w-100"><h3>${this.title}</h3></label>
      <form onsubmit="app.listController.addTask(event, '${this.id}')">
        <div class="form-group">
          <input type="text" name="taskName" class="form-control" placeholder="Add task...">
        </div>
      </form>
       ${this.TaskTemplate()} 
    </div>
    `
  }

  TaskTemplate(){
    let template = ''
    this.tasks.forEach(newTask => {
      template += 
      `<div class="form-check">
    <button type="button" class="close text-danger" onclick="app.listController.deleteTask('${newTask}', '${this.id}')">
  <span>&times;</span>
  </button>
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
    <label class="form-check-label" for="defaultCheck1">
    ${newTask}
    </label>
    </div>`
    });
    return template 
    
  }

 
 }

