import React from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

export const AttributesModal = (props) => {
    
    return (
        <div>
            {props.droppedInputAttributes.map((attribute, index) => {
                return (<div>
                    <label>{attribute}</label>
                    <input type='checkbox' onChange={(e) => props.handleModalCheckboxChange(e, index, attribute)}/>
                </div>)
            })}

            <Button onClick={props.handleAddingAttributesFromModal}>
                <AddIcon />
            </Button>
        </div>
    )
}
