const fs = require('fs');

function readTodos(pathName) {
    const todos = fs.readFileSync(pathName, 'utf8');
    return JSON.parse(todos)

}

function writeTodos(data) {
    const jsonData = JSON.stringify(data);
    fs.writeFileSync('todo.json', jsonData)

}

function add(options) {
    let data = options;
    let todo = readTodos('./todo.json');
    data.id = getLastId(todo);
    data.checked = false;
    todo.push(data);
    writeTodos(todo);

}

function edit(data) {
    let todo = readTodos('./todo.json');
    let result;
    todo.forEach((ele, index) => {
        if (ele.id == data.id) {
            editObject(todo, data, index);
            result = `obj with id ${data.id} updated Succesfully`;
            writeTodos(todo);

        } else {
            result = `obj with id ${data.id} not Exist`;
        }
    });
    console.log(result);

}

getLastId = (data) => {
    if (!data.length) {
        return 1;
    } else {
        let lastId = data[data.length - 1].id;
        return lastId + 1;
    }
}

editObject = (existData, newData, index) => {
    existData[index].title = newData.title;
    existData[index].body = newData.body;
    existData[index].checked = true;
    console.log(existData);
    writeTodos(existData);
}

function remove(data) {
    let fileData = readTodos('./todo.json');
    let result = '';
    fileData.forEach((ele, index) => {
        if (ele.id == data.id) {
            result = `obj with id ${data.id} removed Succesfully`;
            fileData.splice(index, 1);
        } else {
            result = `obj with id ${data.id} not Exist`;
        }
    });
    console.log(result);
    writeTodos(fileData);
}
function list()
{
   listData=readTodos('./todo.json')
  console.log(listData);
  
}
function checkedTodo(){
 const items=readTodos('./todo.json')
  const todo=items.filter((item)=>item.checked===true);
     console.log(todo);

}
function uncheckedTodo(){
    const items=readTodos('./todo.json')
     const todo=items.filter((item)=>item.checked===false);
        console.log(todo);
   
   }
module.exports = {
    add,
    edit,
    remove,
    list,
    checkedTodo,
    uncheckedTodo,



};