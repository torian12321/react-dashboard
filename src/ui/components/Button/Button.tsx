import React from 'react';
import { Props } from './Button.interfaces';
import { Btn } from './Button.styles';

const Button: React.FunctionComponent<Props> = ({
  className,
  children,
  label,
  disabled = false,
  outline = false,
  onClick,
}: Props) => {
  const content = children || label;
  const handleClick = () => {
    if(!disabled && onClick) {
      onClick();
    };
  };

  return !!content ? (
    <Btn
      className={className}
      disabled={disabled}
      onClick={handleClick}
      outline={outline}
    >
      {content}
    </Btn>
  ) : null;
};

export default Button;
