import React from 'react'
import './Sidebar.css'



export const Sidebar = (props) => {
    const style = props.inputCoords;
    return (
        <div className='sidebar'>
            {React.Children.forEach(props.children, child => {
            })}
            {props.children}
        </div>
    )
}
