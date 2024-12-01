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

            tasks.forEach(element => { // for-each loop for displaying the tasks created
            todoTaskText.value ? card.appendChild(tasksList) : null 
            tasksList.appendChild(deleteBtn)

    deleteBtn.onclick = function(){ // delete the task
        let removed = tasksList.remove();
        // console.log(tasks.indexOf(tasksList.innerHTML))
        
    }
})

todoTaskText.value = ""

}
console.log(tasks)

// work getting index of the task that have been delted