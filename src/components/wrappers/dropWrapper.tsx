import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../constants/itemTypes';

const DropWrapper = ({ children }: any) => {
   const [, drop] = useDrop({
      accept: ItemTypes.CARD
   });

   return <div ref={drop}>{children}</div>;
};

export default DropWrapper;
