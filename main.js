import './style.css';
import './reset.css';
import { Todo, createTodo } from './todo.js';
import { Folder, createFolder } from './folder.js';

let todoDependencies = (function() {

  let defaultFolder = new Folder('Default');
  let folders = [defaultFolder];

  return {
    folders,
    defaultFolder,
  }
})()