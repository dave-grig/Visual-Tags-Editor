import React from 'react'
import DotIcon from '@material-ui/icons/Adjust';
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
import {DropArea} from './DropArea'
import './InputContainer.css'

export const DropAreas = ({handleOpenModal, draggedInputType, handler, currentDroppedAreaIndices, handleInputDrop, dropAreas, isInputDropped, handleInputDragEnter, handleInputDragOver, draggedInputElement, droppedAreaIndex}) => {
    return (
        <div className='drop-areas'>
            {dropAreas.map((dropAreaRow, dropAreaRowIndex) => {
                return (
                    <div className='drop-area__wrapper'>
                        {dropAreaRow.map((dropAreaCol, dropAreaColIndex) => {
                            if (dropAreaCol.state === 'dropped') {
                                return <DropArea handler={handler} draggedInputType={draggedInputType}>
                                        {dropAreaCol.type ? <input type={dropAreaCol.type}/>: null}
                                        <Button onClick={handleOpenModal}>
                                            <AddIcon/>
                                        </Button> 
                                   </DropArea>  
                            } else if (dropAreaCol.state === 'pending') {
                                return  <DropArea handler={handler} currentColor={{color: '#fff', theme: 'light'}} handleInputDrop={handleInputDrop} handleInputDragEnter={handleInputDragEnter} handleInputDragOver={handleInputDragOver} filledDropAreaRowIndex={dropAreaRowIndex} filledDropAreaColIndex={dropAreaColIndex} >
                                            <DotIcon className='drop-area-modal-icon'/>
                                        </DropArea>
                            }
                        })}  
                    </div>
                )   
            })}
        </div>
    )
}