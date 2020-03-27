import List from "../Models/List.js";
import _store from "../store.js"

//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change

  create(newListData){
  let newList = new List(newListData)
  _store.State.lists.push(newList)
  _store.saveState()
  }

  delete(listId) {
    _store.State.lists = _store.State.lists.filter(list => list.id != listId)
    _store.saveState()
  }

// remove by index not id
// don't make the tasks an object - keep as string
  addTask(newTaskData) {
    let newTask = new Task (newTaskData)
    let task = _store.State.lists.find(list => list.id == listId)
    list.taks.push(newTask)
    _store.saveState()
  }


}

const SERVICE = new ListService();
export default SERVICE;

