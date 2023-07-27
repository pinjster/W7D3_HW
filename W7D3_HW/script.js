const toDoList = [];

const submit = document.getElementById('todo-form');
const allItems = document.getElementById('all-items')




submit.addEventListener('submit', async (e) => {
    e.preventDefault();
    const listSetup = document.createElement('div')
    title = document.querySelector('#title-field').value;
    description = document.querySelector('#description-field').value;
    if( checkItems(title, description)){
        toDoList.push({'title' : title, 'description' : description})
        const listItem = document.createElement('li');
        if(description){
            listItem.innerText = `${title}: ${description}`;
        }
        else{
            listItem.innerText = `${title}`;
        }
        const trashCan = document.createElement('i');
        trashCan.innerHTML += '<i class="fa-solid fa-trash-can"></i>'
        
        listSetup.appendChild(listItem, trashCan);
        allItems.append(listSetup)
        
        

        listItem.addEventListener('click', async () => {
            if (listItem.style.textDecorationLine === 'line-through') {
                listItem.style.textDecorationLine = 'none';
            }
            else {
                listItem.style.textDecorationLine = 'line-through';
            }
        })
    }
})

function clearItems(){
    allItems.remove();
}

function checkItems(title, description) {
    for(let i of toDoList){
        if(i.title === title){
            if(i.description === description){
                return false;
            }
        }
    }
    return true;
}