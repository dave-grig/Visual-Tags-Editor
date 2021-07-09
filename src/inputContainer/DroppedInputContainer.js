import React from 'react'

import AddIcon from '@material-ui/icons/Add'
import {Button} from '@material-ui/core'

export const DroppedInputContainer = () => {
    return (
        <div>
            <h6 className='dropped-input-title'></h6>
            <input type="text" className='dropped-input'/>
            <Button className='drop-area__button--open-modal'><AddIcon className='drop-area__icon--add'/></Button>
        </div>
    )
}
