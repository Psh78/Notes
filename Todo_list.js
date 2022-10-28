
const Todo = [];

let choice = prompt("What do you like to do?");

while(choice != "quit")
{
    if(choice == "new")
    {
        let newTask = prompt("Enter new Todo");
        Todo.push(newTask);
        console.log("Todo Added");
    }
    else if(choice == "list")
    {
        if(Todo.length == 0)
        {
            console.log("Todo is Empty");
        }
        else
        {
            console.log("********");
            for(let x in Todo)
            {
                console.log(`${x}: ${Todo[x]}`);
            }
        }
    }
    else if(choice == "delete")
    {
        if(Todo.length == 0)
        {
            console.log("********")
            console.log("Todo is Empty");
        }
        else
        {
            let index = prompt("Enter index of task to delete");
            if(index > Todo.length || index < 0 || Number.isNaN(index))
            {
                console.log("Invalid Index");
            }
            else
            {   
                Todo.splice(index, 1);
                console.log("*********")
                console.log("Todo removed");
            }
        }
    }
    else
    {
        console.log("Invalid Choice");
    }
    
    choice = prompt("What do you like to do?");
}

console.log("OK Quitting the app!")