import React from 'react';
import { Props } from './Card.interfaces';
import { Wrapper  } from './Card.styles';

const Panel: React.FunctionComponent<Props> = ({
  className,
  children,
}: Props) => (
  <Wrapper className={className}>
    {children}
  </Wrapper>
);

export default Panel;
