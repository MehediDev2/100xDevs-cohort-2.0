/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todo = []
  }
  add = function(str){
    this.todo.push(str)
  }
  remove = function(index){
    this.todo.splice(index, 1)
  }
  update = function(index, new_todo){
    if(index >= this.todo.length){
      // continue
    }else{
      this.todo[index] = new_todo;
    }
  }
  getAll = function(){
    return this.todo
  }
  get = function(index){
    if(index >= this.todo.length){
      return null;
    }else{
      return this.todo[index]
    }
  }
  clear = function(){
    this.todo = []
  }
}

module.exports = Todo;
