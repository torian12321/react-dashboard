export interface Props {
  children?: any,
  className?: string,
  label?: string,
  placeholder?: string,
  type?: 'text' | 'email' | 'password',
  required?: boolean,
  onChange?: Function,
};
