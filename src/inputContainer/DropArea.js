import React from 'react'
import {useState} from 'react'
import {SideBar} from '../sidebar/Sidebar'
import classNames from 'classnames'
import DotIcon from '@material-ui/icons/Adjust';
import { Button, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import './InputContainer.css'
import {useEffect} from 'react';


export const DropArea = (props) => {        
    const [currentColor, setCurrentColor] = useState('');
    
    useEffect(() => {
        setCurrentColor(generateRandomColor())
    },[])

    const generateRandomColor = () => {
        // first variant generate every random color
        const colorChars = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
        // let hexColor = '#';
        // for (let i = 0; i < 6; i++) {
        //     hexColor += colorChars[Math.floor(Math.random() * colorChars.length)];
        // }
        // console.log(hexColor,"eeee")
        // return hexColor;
        
        const colors = [{color:'#55d53c', theme: 'dark'}, {color: '#62a187', theme: 'dark'}, {color: '#eff9f2', theme: 'light'},{color: '#278040', theme: 'dark'}, {color: '#36a215', theme: 'dark'}]
                    return colors[Math.floor(Math.random() * colors.length)];
        }

    
    return (
            <div onDragOver={props.handleInputDragOver} className={classNames('drop-area')} onDragEnter={props.handleInputDragEnter } onDrop={(e) => props.handleInputDrop(e, props.filledDropAreaRowIndex, props.filledDropAreaColIndex)} style={{
                backgroundColor: props.currentColor 
           }} >
               {props.children}
           </div>
       )        
}