
import React from "react";
import {action} from "@storybook/addon-actions";

import {EditableSpan} from "./EditableSpan";

export default {
    title: 'EditabelSpan Component',
    component: EditableSpan
}

const onChangeCallback = action('value changed')

export const EditableSpanBaseExample = ()=>{
    return<>
       <EditableSpan value={'start value'} onChange={onChangeCallback}/>
    </>
}