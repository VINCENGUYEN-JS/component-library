import React from 'react';
import { FieldContext } from './FieldContext';
import { useUniqueID } from '../utils/useUniqueID';

import { Label } from './Label';
import { Input } from './Input';
import { TextArea } from './Textarea';

interface FieldComposition {
  Label: typeof Label;
  Input: typeof Input;
  TextArea: typeof TextArea;
}

export const Field: React.FC & FieldComposition = ({ children }) => {
  const id = useUniqueID();
  return <FieldContext.Provider value={id}>{children}</FieldContext.Provider>;
};

Field.Label = Label;
Field.Input = Input;
Field.TextArea = TextArea;
