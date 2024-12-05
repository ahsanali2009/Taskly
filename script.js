    let todoTaskText = document.getElementById("addTaskText")
    let addTaskBtn = document.getElementById("addTaskBtn")
    let card = document.getElementById("card")

    let tasks = []

    addTaskBtn.onclick = function(event){ // add task function
    event.preventDefault() ;

    let tasksList = document.createElement('h4') ;
    tasksList.setAttribute('id','tasksList') ;

    let taskCreated = tasksList.innerText = todoTaskText.value
    tasks.push(taskCreated)
    
    tasksList.style.maxWidth = "100%"

    let deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('class','deleteBtn')

    let editBtn = document.createElement('button') // Edit button...
    editBtn.setAttribute('class','editBtn')


            tasks.forEach(element => { // for-each loop for displaying the tasks created
            todoTaskText.value ? card.appendChild(tasksList) : null 
            tasksList.appendChild(deleteBtn)
            tasksList.appendChild(editBtn)  
        })

        deleteBtn.onclick = () => {
            let removed = tasksList.remove();

    }

        editBtn.onclick = () =>{
            todoTaskText.value = (tasksList).textContent;
            // work on changing the task when edited...
            
    }

todoTaskText.value = ""

}

console.log(tasks)