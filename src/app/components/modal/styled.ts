import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #fff;
`;

export const Header = styled.div`
  display: flex;
  padding-left: 1.875rem;
  padding-top: 1.688rem;
  padding-right: 1.875rem;
  font-size: 1.25rem;
  justify-content: space-between;
`;
