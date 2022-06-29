// //testas turi patikrinti ar 1 + 2 = 3

const { exportAllDeclaration } = require('@babel/types');

// const sum = require('./app'); //testuojama fnkcija pasirequarinom

// test( 'testuoju ar 1 + 2 yra lygu 3',()=>{
//     expect(sum(1,2)).toBe(3); // kintamieji du ir toBe ko tikimes
// })


//testavimas antros aplikacijos, ivedimo reiksme laukeli, grazinimas sarase

test('Tikrinu ar veikia uzduoties sukurimas',()=>{
    document.body.innerHTML = `
    <input id="newTodo" />
    <button id="addTodo">Add</button>
    <ol id="todoList"></ol>
    `
    require('./app');
    const newTodoInput = document.getElementById('newTodo')
    const addTodoBtn = document.getElementById('addTodo')
    const todoList = document. getElementById('todoList')

    newTodoInput.value = "Nauja uzduotis";
    addTodoBtn.click();

    expect(todoList.innerHTML).toBe('<li>Nauja uzduotis</li>');
})