import React from 'react';
import { Props } from './Panel.interfaces';
import { Wrapper, Header, Body  } from './Panel.styles';

const Panel: React.FunctionComponent<Props> = ({
  className,
  children,
  title,
}: Props) => (
  <Wrapper className={className}>
    <Header>{title}</Header>
    <Body>{children}</Body>
  </Wrapper>
);

export default Panel;
