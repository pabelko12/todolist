import axios from "axios";
import {CreateTodolist, DeleteTodolist, UpdateTaskTitle, UpdateTodolistTitle} from "../stories/todolists-api.stories";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        "API-KEY": '77682a06-cfb1-4845-acf0-55e4e7601108'
    }
})

export type TodolistType = {
    id: string,
    title: string,
    addedDate: string,
    order: number
}

export type ResponseType<D= {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}

export type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string

}

export type UpdateTaskType = {
    title:string
    description: string
    status: number
    priority:number
    startDate: string
    deadline: string
}

type GetTasksResponse = {
    error: string | null,
    totalCount: number
    items: TaskType[]
}
export const todolistApi = {
    getTodolists() {
        return instance.get<Array<TodolistType>>('todo-lists')

    },
    createTodolist(title: string) {
        return instance.post<ResponseType<{ item: TodolistType }>>('todo-lists', {title: title})
    },
    deleteTodolist(Id: string) {
        return instance.delete<ResponseType>(`todo-lists/${Id}`)

    },
    updateTodolistTitle(title: string, Id: string) {
        const todolistId = Id
        return instance.put<ResponseType>(`todo-lists/${todolistId}`, {title: title})
    },
    getTasks(todolistId: string) {
        return instance.get<GetTasksResponse>(`todo-lists/${todolistId}/tasks`)

    },
    deleteTask(todolistID: string, taskId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistID}/tasks/${taskId}`)
    },
    createTask: function (todolistId: string, title:string) {
        return instance.post<ResponseType<TaskType>>(`todo-lists/${todolistId}/tasks`, {title: title})
    },
    UpdateTaskTitle: function (todolistId: string, taskId:string, model:UpdateTaskType) {
        return instance.put<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`, model)
    }


}