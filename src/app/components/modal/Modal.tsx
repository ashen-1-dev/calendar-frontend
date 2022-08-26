import React, { ReactNode } from 'react';
import { ReactComponent as CloseSvg } from '../tag-dialog/assets/close.svg';
import { Content, Header, Wrapper } from './styled';

export interface ModalProps {
  active: boolean;
  label?: string;
  setActive: (...args) => any;
  children?: ReactNode;
  showCloseIcon?: boolean;
}

export const ModalContext = React.createContext({});

const Modal: React.FC<ModalProps> = props => {
  const { label, children, active, setActive, showCloseIcon = true } = props;
  if (!active) {
    return null;
  }
  return (
    <Wrapper onClick={() => setActive(false)}>
      <Content onClick={event => event.stopPropagation()}>
        <Header>
          {label && <div style={{ fontWeight: 'bold' }}>{label}</div>}

          {showCloseIcon && (
            <div onClick={() => setActive(false)} style={{ cursor: 'pointer' }}>
              <CloseSvg />
            </div>
          )}
        </Header>
        <div>
          <ModalContext.Provider value={{ active, setActive }}>
            {children}
          </ModalContext.Provider>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Modal;
