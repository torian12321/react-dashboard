import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid grey;
  box-sizing: border-box;
  width: 100%;
  padding: 8px 0;
  margin-bottom: 10px;
  transition: background .8s;

  &:focus-within {
    background: #fdf8e5;
  }
`;

export const Label = styled.label`
  color: #555;
  font-size: .8rem;
  margin: 0 0 8px;
`;

export const Field = styled.input`
  border-top-right-radius: var(--border-radius);
  border-top-left-radius: var(--border-radius);
  background: var(--color-sec);
  color: #222;
  border: none;
  background: transparent;

  &:focus-visible {
    outline: none;
  }
`;
