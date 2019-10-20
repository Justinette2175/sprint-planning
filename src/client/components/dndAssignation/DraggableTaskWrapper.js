import React from 'react';
import { useDrag } from 'react-dnd';

import Task from '../tasks/Task';

import DRAG_TYPES from './DragTypes';


function DraggableTaskWrapper({ taskId, children }) {

  const [{ opacity }, drag] = useDrag({
    item: { name: taskId, type: DRAG_TYPES.task },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.2 : 1,
    }),
  });

  return (
    <div ref={drag} style={{ opacity }}>
      {children}
    </div>
  );
}

export default DraggableTaskWrapper;
