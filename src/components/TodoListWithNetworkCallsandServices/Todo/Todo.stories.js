import React from 'react';
import { action } from '@storybook/addon-actions'
import { withKnobs, color, text } from '@storybook/addon-knobs'

import '../../../styles/tailwind.css'

import CloseBtn from './CloseBtn'



export default{
    component: CloseBtn,
    title: 'Todo/CloseBtn'
}

export const closeBtnAction = () =>(
    <CloseBtn onRemoveTodo={action("clicked")}/>    
)

export const knobs = () => (
    <CloseBtn bg={color('bgColor','gray')} color={color('color','red')}/>
)

export const btnText = () => (
    <CloseBtn text={text('close')}/>
)

knobs.story = {
    decorators: [withKnobs]
 }