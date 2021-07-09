
import React from 'react';
import { useState, useEffect } from 'react';

import './App.css';


// material ui imports
import {Grid} from '@material-ui/core'
import { Sidebar } from './sidebar/Sidebar';
import { InputsContainer } from './inputContainer/InputsContainer';
import classNames from 'classnames';
import { SettingsInputCompositeSharp } from '@material-ui/icons';
import { AttributesModal } from './modal/AttributesModal';
import htmlElementAttributes from 'react-html-attributes';


function App() {
  const [draggedInputName, setDraggedInputName] = useState('');
  const [isInputDropped, setIsInputDropped] = useState(false);
  const [draggedinputType, setDraggedInputType] = useState('');
  const [dropAreas, setDropAreas] = useState([[{
    state: 'pending',
  }]]);
  const [addedAttributes, setAddedAttributes] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [currentDroppedAreaIndices, setCurrentDroppedAreaIndices] = useState({row: -1, col: -1});  
  const ref = React.createRef();
 
  const handleInputDrop = (e, rowIdx, colIdx) => {
    addAditionalDropAreas(dropAreas, rowIdx, colIdx);
    setCurrentDroppedAreaIndices({row: rowIdx, col: colIdx});
}

const handleInputDragStart = (e) => {
        e.dataTransfer.effectAllowed = "copy";
        e.dataTransfer.dropEffect = "copy";
        setDraggedInputType(e.target.type);
}

const handleModalCheckboxChange = (e, idx, attribute) => {
  if (e.target.checked) {
    addedAttributes[idx] = attribute;
  } else {
    delete addedAttributes[idx];
  }
}

const handleOpenModal = (e) => {
  setOpenModal(true);
}

const handleAddAttributesFromModal = () => {
  
}

const handleInputDragEnter = (e) => {  
  e.dataTransfer.dropEffect = 'copy'
}

const handleInputDragOver = (e) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'copy';
}

const getDraggedInputElement = (arr) => {
  return arr.filter(inputElement => {
    return inputElement.props.id === draggedInputName;
  });
}

const addAditionalDropAreas = (areas, rowIndx,colIndx) => {  
  const newAreas = [...areas.map((row,rowIndex) => {
      const tmpRow = row.map((col, colIndex) =>   {
        if (rowIndex === rowIndx && colIndex === colIndx) {
          col.state = 'dropped';
          col.attributes = htmlElementAttributes['input'];
          col.type = draggedinputType;
          return col;
        }

        return col
      })

      if (rowIndex === rowIndx - 1 || rowIndex === rowIndx + 1) {
        return[...tmpRow, {state: 'pending'}];
      }
    
      return tmpRow.some(col => col.state === 'dropped') ? [{state: 'pending'} ,...tmpRow, {state: 'pending'}] : tmpRow; 
  })]
  
  if (rowIndx === 0) {
      newAreas.unshift([{state: 'pending'}]);
  }

  if (rowIndx === areas.length - 1) {
      newAreas.push([{state: 'pending'}]);
  }

  setDropAreas(newAreas);
}

  return (
    <div className="App" >
      <Grid container>
        <Grid item md={2}>
          <Sidebar  draggedInputName={draggedInputName}>
            <input ref={ref} draggable={true} id='input-text' type="text" className={classNames('sidebar__input', 'sidebar__input--text')} onDragStart={handleInputDragStart} />,
            <button id='button' className={classNames('sidebar__input', 'sidebar__input--button')} >button</button>,
            <input id='radio' type="radio" className={classNames('sidebar__input', 'sidebar__input--radio')} />,
            <input id='checkbox' type="checkbox" className={classNames('sidebar__input', "sidebar__input--checkbox")}  />,
            <textarea id='textarea' name="" cols="15" rows="3" className={classNames('sidebar__input', 'sidebar__input--textarea')} >textarea</textarea>,                    
            <select id='select' name="" className={classNames('sidebar__input', 'sidebar__input--select')} >select</select>
          </Sidebar>    
        </Grid>
        <Grid item md={10}>
          <InputsContainer handleOpenModal={handleOpenModal} draggedinputType={draggedinputType} currentDroppedAreaIndices={currentDroppedAreaIndices} dropAreas={dropAreas} handleInputDrop={handleInputDrop} isInputDropped={isInputDropped}  handleInputDragEnter={handleInputDragEnter} handleInputDragOver={handleInputDragOver}/>
        </Grid>
      </Grid>
      {openModal ? < AttributesModal handleModalCheckboxChange={handleModalCheckboxChange} handleAddAttributesFromModal={handleAddAttributesFromModal} droppedInputAttributes={htmlElementAttributes['input']} draggedinputType={draggedinputType}/> : null}
    </div>
  );
}

export default App;