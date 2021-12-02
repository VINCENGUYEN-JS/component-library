import React from 'react';
import { FieldContext } from './FieldContext';
import { useUniqueID } from '../utils/useUniqueID';

import { Label } from './Label';
import { Input } from './Input';

interface FieldComposition {
  Label: typeof Label;
  Input: typeof Input;
}

export const Field: React.FC & FieldComposition = ({ children }) => {
  const id = useUniqueID();
  return <FieldContext.Provider value={id}>{children}</FieldContext.Provider>;
};

Field.Label = Label;
Field.Input = Input;
