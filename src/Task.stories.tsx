
import React from "react";
import {action} from "@storybook/addon-actions";
import {Task} from "./Task";

export default {
    title: 'Task Component',
    component: Task
}

const changeTaskStatusCallback = action('status changed')
const changeTaskTitleCallback = action('title changed')
const removeTaskCallback = action('task remove')


export const TaskBaseExample = ()=>{
    return<>
        <Task removeTask={removeTaskCallback}
              changeTaskStatus={changeTaskStatusCallback}
              changeTaskTitle={changeTaskTitleCallback}
              t={{id:'1', isDone:true, title:'CSS'}}
              todolistId={'dotolistId1'}
        />
        <Task removeTask={removeTaskCallback}
              changeTaskStatus={changeTaskStatusCallback}
              changeTaskTitle={changeTaskTitleCallback}
              t={{id:'2', isDone:false, title:'JS'}}
              todolistId={'dotolistId2'}
        />
    </>
}