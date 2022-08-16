import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { ReactComponent as CloseSvg } from '../tag/assets/close.svg';

const Wrapper = styled.div`
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
const Content = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #fff;
`;

const Header = styled.div`
  display: flex;
  padding-left: 1.875rem;
  padding-top: 1.688rem;
  padding-right: 1.875rem;
  font-size: 1.25rem;
  justify-content: space-between;
`;

export interface ModalProps {
  active: boolean;
  label: string;
  setActive: (...args) => any;
  children?: ReactNode;
}

const Modal: React.FC<ModalProps> = props => {
  const { label, children, active, setActive } = props;
  if (!active) {
    return null;
  }
  return (
    <Wrapper onClick={() => setActive(false)}>
      <Content onClick={event => event.stopPropagation()}>
        <Header>
          <div style={{ fontWeight: 'bold' }}>{label}</div>
          <div onClick={() => setActive(false)} style={{ cursor: 'pointer' }}>
            <CloseSvg />
          </div>
        </Header>
        <div>{children}</div>
      </Content>
    </Wrapper>
  );
};

export default Modal;
