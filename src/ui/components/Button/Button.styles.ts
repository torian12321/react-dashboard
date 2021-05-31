import styled from 'styled-components';

export const Btn: any = styled.button`
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  padding: .8em 2em;
  font-weight: bold;
  background: var(--color-sec);
  color: white;
  box-sizing: border-box;
  border: 2px solid var(--color-sec);
  &:hover {
    background: var(--color-sec-darker);
  }

  ${(props: any) => props.outline && `
    color: var(--color-sec);
    background: white;
  `};

  ${(props: any) => props.disabled && `
    &,
    &:hover {
      color: #555;
      background: #ddd;
      border-color: #ddd;
    }
  `};
`;
