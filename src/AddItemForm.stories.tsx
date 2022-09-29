import {AddItemForm} from "./AddItemForm";
import React from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'AddItemForm',
    component: AddItemForm
}
const callback = action('add button is working')

export const AddItemFormBaseExample = ()=>{
    return<AddItemForm addItem={callback}/>
}