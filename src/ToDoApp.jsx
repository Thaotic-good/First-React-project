import React, {useEffect, useRef, useState} from "react";

function ToDoApp() {
    const [toDos, setToDos] = useState([])
    const [currentTask, setCurrentTask] = useState("")
    const [attemptedSubmit, setAttemptedSubmit] = useState(false)
    const inputRef = useRef(null)
    /*useRef returns an object {current: 0} = which can be change and hold the referenced DOM element
    and bypasses normal data flow and accesses directly the DOM node,
    null= at the time of initialization the DOM element doesn't exist yet*/

    const isInputInvalid = () => currentTask.trim() === ""
    console.log("You need to write something!")
    const addTask = (event) => {
        event.preventDefault()
        //     SPA = page does not need to refresh in order to show new content, it is done with JavaScript
        setAttemptedSubmit(true)
        if (!isInputInvalid()) {
            setToDos(prevToDOs => [...prevToDOs, currentTask])
            // ... = spread which does array destructuring (we do not want array inside an array)
            setCurrentTask("")
            setAttemptedSubmit(false)
        }
    };
    const handleTodoInputChange = (event) => {
        setCurrentTask(event.target.value)
    } /*event.target.value = for updating the state variable currentTask to what is currently in the targeted field*/

    useEffect(()=>inputRef.current.focus())


    /*condition is to check if the input is mounted and nut 'null' anymore*/
    /*now the input element is mounted, .focus method is applied on it*/
    /* .current = provides direct access to the element it is attached to
    * .focus= native DOM method for buttons, input fields, links*/
    return (
        <>
            <form>
                <label htmlFor="newTask" >Add your task here:</label>
                <div>
                    <input
                        ref={inputRef}
                        type="text"
                        id="newTask"
                        onChange={handleTodoInputChange}
                        placeholder={"wash my butt"}
                        value={currentTask}/>
                    {attemptedSubmit && isInputInvalid() && (
                        <p style={{color: 'red', fontSize: 'small'}}>You need to write
                            something</p>
                    )}
                    <button onClick={addTask}>Add task</button>
                </div>
            </form>
            <ol>
                {toDos.map((ToDos, index) => (<li key={index}>{ToDos}</li>)
                )}
            </ol>
            {/*.map = method that takes data from an array and mutates it*/}
        </>
    )
}
export default ToDoApp;