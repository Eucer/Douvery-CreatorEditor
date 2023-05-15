import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


function DraggableElement({ tag }) {
  const handleDragStart = (event) => {
    event.dataTransfer.setData("text", tag);
  };

  return (
    <div draggable onDragStart={handleDragStart}>
      {tag.toUpperCase()}
    </div>
  );
}

function DropZone() {
  const [elements, setElements] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
    const tag = event.dataTransfer.getData("text");
    setElements((elements) => [...elements, tag]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div onDrop={handleDrop} onDragOver={handleDragOver}>
      {elements.map((tag, index) => React.createElement(tag, { key: index }))}
    </div>
  );
}

function App() {
  return (
    <div>
      <DraggableElement tag="h1" />
      <DraggableElement tag="p" />
      <DropZone />
    </div>
  );
}

export default App;
