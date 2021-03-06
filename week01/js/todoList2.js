/**
 * Requirement
 * 
 * 1. 할 일 추가/삭제
 * 2. 새로고침 시 유지
 */

const todoForm = document.getElementById('todo-form');
const todoInput = document.querySelector('#todo-form input:first-child');
const todoSubmit = document.querySelector('#todo-form button');
const ul = document.querySelector('#todo-list');

const TODOS_KEY = 'todoList';

// JSONArray
let todoList = [];

function onAddBtnClicked(event) {
    event.preventDefault();
    
    const itemText = todoInput.value;
    if (itemText === "") { // html property not working 
        console.log('Please write what to do');
        return;
    }

    // 1. store data to array
    const item = addItem(itemText);
    // 2. draw data to screen
    drawItem(item);
    // 3. reflect data to localStorage
    saveItem();
    // 4. refresh input text
    todoInput.value = "";
    // 5. remove hidden property
    ul.classList.remove('hidden');
}

function addItem(itemText) {
    const newItem = {};
    newItem.text = itemText;
    // add unique property(id) for deleting item
    newItem.id = Date.now();
    console.log(newItem.id, typeof newItem.id);
    todoList.push(newItem);
    
    return newItem;
}

function drawItem(item) {
    const li = document.createElement('li');
    li.id = item.id;
    const span = document.createElement('span');
    li.appendChild(span);
    span.innerText = item.text;
    const button = document.createElement('button');
    button.addEventListener('click', onRemoveBtnClicked);
    li.appendChild(button);
    button.innerText = '❌'; // window + .
    ul.appendChild(li);
}

function saveItem() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todoList));
}

todoForm.addEventListener('click', onAddBtnClicked);

function onRemoveBtnClicked(event) {
    console.log(event.target.parentNode, event.target.parentElement);
    deleteItem(event.target.parentNode);
}

function deleteItem(item) {
    console.log(item, typeof item);

    // 1. clear item from screen
    const liToBeRemoved = item;
    liToBeRemoved.remove();
    
    // 2. remove item from json array
    todoList = todoList.filter(element => {
        return element.id !== item.id;
    });

    // 3. remove item from localStorage
    saveItem();
}

// when user refresh the screen
function initiate() {
    const savedTodoList = localStorage.getItem(TODOS_KEY);
    if (savedTodoList === null) {
        return;
    }

    // 1. save todoList array using localStorage data
    // this is why we declare todoList using 'let'
    todoList = JSON.parse(savedTodoList);
    
    // 2. draw items to screen
    todoList.forEach(element => {
        drawItem(element);
    });

    // 3. remove hidden property
    ul.classList.remove('hidden');
}

initiate();