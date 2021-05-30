import styled from 'styled-components';

export const Btn = styled.button`
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  padding: .8em 2em;
  font-weight: bold;
  background: var(--color-sec);
  color: #222;
  box-sizing: border-box;
  &:hover {
    background: var(--color-sec-darker);
  }
`;
