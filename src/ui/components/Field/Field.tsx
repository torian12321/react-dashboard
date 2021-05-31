import React from 'react';
import { Props } from './Field.interfaces';
import { Wrapper, Label, Field as FieldBox  } from './Field.styles';

const Panel : React.FunctionComponent<Props> = ({
  className,
  children,
  label,
  placeholder,
  type = 'text',
  required = false,
  onChange = () => {},
}: Props) => {
  const handleOnChange = (e: any) => {
    onChange(e.target.value);
  };

  return (
    <Wrapper className={className}>
      <Label>{label}</Label>
      <FieldBox
        placeholder={placeholder}
        type={type}
        required={required}
        onChange={handleOnChange}
        onKeyUp={handleOnChange}
      >
        {children}
      </FieldBox>
    </Wrapper>
  );
};

export default Panel;
