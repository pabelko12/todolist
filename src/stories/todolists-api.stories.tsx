import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistApi} from "../api/todolist-api";

export default {
    title: 'API'
}


export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        todolistApi.getTodolists()
            .then((res) => {
                setState(res.data)
            })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.createTodolist('dlksfmls')
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const id = '61e6ec88-2f2a-4779-8d92-09f89db52cfb'
        todolistApi.deleteTodolist(id)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const id = '61e6ec88-2f2a-4779-8d92-09f89db52cfb'
        todolistApi.updateTodolistTitle('kdjfnksjd', id)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>('')
    const GetTasks=() => {
        todolistApi.getTasks(todolistId)
            .then((res) => {
                setState(res.data)
            })

    }
    return <div>{JSON.stringify(state)}
        <div>
            <input placeholder={'todolistId'} value={todolistId} onChange={(e)=>setTodolistId(e.currentTarget.value)}/>
            <button onClick={GetTasks}>get tasks</button>
        </div>
    </div>

}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const [taskId, setTaskId] = useState<string>('')
    const [todolistId, setTodolistId] = useState<string>('')

    const deleteTask = () => {

        todolistApi.deleteTask(todolistId, taskId)
            .then((res) => {
                setState(res.data)
            })
    }
    return <div>{JSON.stringify(state)}
        <div>
            <input placeholder={'taskId'} value={taskId} onChange={(e)=>setTaskId(e.currentTarget.value)}/>
            <input placeholder={'todolistId'} value={todolistId} onChange={(e)=>setTodolistId(e.currentTarget.value)}/>
            <button onClick={deleteTask}>delete</button>
        </div>
    </div>

}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    const [taskTitle,setTaskTitle]=useState<string>('')
    const [todolistId, setTodolistId] = useState<string>('')
    const createTask =() => {

        todolistApi.createTask(todolistId,taskTitle)
            .then((res) => {
                setState(res.data)
            })
    }

    return <div>{JSON.stringify(state)}
        <div>
            <input placeholder={'task title'} value={taskTitle} onChange={(e)=>setTaskTitle(e.currentTarget.value)}/>
            <input placeholder={'todolistId'} value={todolistId} onChange={(e)=>setTodolistId(e.currentTarget.value)}/>
            <button onClick={createTask}>create task</button>
        </div>
    </div>

}

export const UpdateTaskTitle = () => {
    const [state, setState] = useState<any>(null)
    const [taskTitle,setTaskTitle]=useState<string>('')
    const [todolistId, setTodolistId] = useState<string>('')
    const [description, setDescription] = useState<string>('description 1')
    const [priority, setPriority] = useState<number>(0)
    const [taskId, setTaskId] = useState<string>('')
    const [status, setStatus] = useState<number>(0)
    const UpdateTaskTitle =() => {

        todolistApi.UpdateTaskTitle(todolistId,taskId,{
            title:taskTitle,
            description:description,
            priority:priority,
            status:status,
            deadline:'',
            startDate:''

        })
            .then((res) => {
                setState(res.data)
            })
    }

    return <div>{JSON.stringify(state)}
        <div>
            <input placeholder={'task title'} value={taskTitle} onChange={(e)=>setTaskTitle(e.currentTarget.value)}/>
            <input placeholder={'todolistId'} value={todolistId} onChange={(e)=>setTodolistId(e.currentTarget.value)}/>
            <input placeholder={'task Id'} value={taskId} onChange={(e)=>setTaskId(e.currentTarget.value)}/>
            <input placeholder={'description'} value={description} onChange={(e)=>setDescription(e.currentTarget.value)}/>
            <input placeholder={'priority'} value={priority} onChange={(e)=>setPriority(+e.currentTarget.value)}/>
            <input placeholder={'status'} value={status} type='number' onChange={(e)=>setStatus(+e.currentTarget.value)}/>
            <button onClick={UpdateTaskTitle}>create task</button>
        </div>
    </div>

}
