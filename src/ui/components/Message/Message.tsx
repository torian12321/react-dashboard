import React from 'react';
import classnames from 'classnames';
import { Props } from './Message.interfaces';
import styles from './Message.module.scss';

const Message: React.FunctionComponent<Props> = ({
  className,
  children,
  message,
}: Props) => {
  const content = children || message;

  return !!content ? (
    <div className={classnames(
      styles.wrapper,
      className
    )}>
      {content}
    </div>
  ) : null;
};

export default Message;
