import React from 'react';
import { useDrop } from 'react-dnd';

import DRAG_TYPES from './DragTypes.json';


function DragReceivingTaskList({ onDrop, children }) {

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: DRAG_TYPES.task,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = isOver && canDrop;
  let backgroundColor = '#222'
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }

  return (
    <div ref={drop} style={{ backgroundColor, minHeight: '400px' }}>
      {children}
    </div>
  )
}

export default DragReceivingTaskList;
