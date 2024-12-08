    let todoTaskText = document.getElementById("addTaskText")
    let addTaskBtn = document.getElementById("addTaskBtn")
    let card = document.getElementById("card")

    let tasks = []

    addTaskBtn.onclick = function addTaskFunction(event){
    event.preventDefault() ;

    let tasksList = document.createElement('h4') ;
    tasksList.setAttribute('id','tasksList') ;

    let taskCreated = tasksList.innerText = todoTaskText.value
    tasks.push(taskCreated)
    
    tasksList.style.maxWidth = "100%"

    let deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('class','deleteBtn')

    let editBtn = document.createElement('button')
    editBtn.setAttribute('class','editBtn')


            tasks.forEach(element => {
            todoTaskText.value ? card.appendChild(tasksList) : null 
            tasksList.appendChild(deleteBtn)
            tasksList.appendChild(editBtn)  
        })

        deleteBtn.onclick = () => {
            let removed = tasksList.remove();

    }

        editBtn.onclick = () =>{

            todoTaskText.value = tasksList.textContent;
            
            addTaskBtn.textContent = "Edit"
            
            addTaskBtn.onclick = (event) =>{
                event.preventDefault()

                tasksList.innerText = todoTaskText.value

                tasksList.appendChild(deleteBtn)
                tasksList.appendChild(editBtn) 

                todoTaskText.value = ""
                addTaskBtn.textContent = "Add"
            
                addTaskBtn.onclick = addTaskFunction;
            }
            
    }

todoTaskText.value = ""

}