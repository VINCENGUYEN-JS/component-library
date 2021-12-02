import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FieldContext } from './FieldContext';
import { StyledTextArea } from './styles';

export interface TextareaProps
  extends React.ComponentPropsWithoutRef<'textarea'> {
  isResizable?: boolean;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ isResizable, ...props }, ref) => {
    const id = useContext(FieldContext);
    return (
      <StyledTextArea ref={ref} isResizable={isResizable} id={id} {...props} />
    );
  }
);

TextArea.displayName = 'TextArea';

TextArea.defaultProps = {
  isResizable: true,
};

TextArea.propTypes = {
  isResizable: PropTypes.bool,
};
