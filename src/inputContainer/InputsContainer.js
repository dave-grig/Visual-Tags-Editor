import React from 'react'
import {DropAreas} from './DropAreas'
import './InputContainer.css'

export const InputsContainer = (props) => {
    console.log(props.handleOpenModal,'xxxxxxxx')
    return (
        <div className='input-container'>
            <DropAreas handleOpenModal={props.handleOpenModal} draggedInputType={props.draggedInputType} handler={props.handler} currentDroppedAreaIndices={props.currentDroppedAreaIndices} handleInputDrop={props.handleInputDrop} theme={props.theme} currentColor={props.currentColor} dropAreas={props.dropAreas} isInputDropped={props.isInputDropped} draggedInputElement={props.draggedInputElement} dotsRows={5} dotsCols={8} mouseCoords={props.mouseCoords} handleInputDragEnter={props.handleInputDragEnter} handleInputDragOver={props.handleInputDragOver}/>
        </div>
    )
}
