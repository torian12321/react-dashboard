import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius);
  box-shadow: 0px 0px 11px -5px #000000;
  position: relative;
  overflow: hidden;
`;

export const Box = styled.div`
  box-sizing: border-box;
  padding: 20px;
`;

export const Header = styled(Box)`
  border-top-right-radius: var(--border-radius);
  border-top-left-radius: var(--border-radius);
  font-weight: bold;
  background: var(--color-sec);
  color: #222;
`;

export const Body = styled(Box)`
  flex-grow: 1;
  background: var(--color-white);
  color: #222;
  border-bottom-right-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
  position: relative;
  overflow: hidden;
`;
