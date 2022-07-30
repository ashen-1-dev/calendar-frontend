import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Colors } from 'styles/colors';

interface RadioProps {
  type: 'holiday' | 'event' | 'other';
  children?: ReactNode;
}

const Wrapper = styled('div')<RadioProps>`
  display: flex;
  width: 9.375rem;
  height: 3.125rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 5px;
  background-color: ${({ type }) => {
    switch (type) {
      case 'holiday': {
        return Colors.Pink;
      }
      case 'event': {
        return Colors.Green;
      }
      case 'other': {
        return Colors.Yellow;
      }
    }
  }};
`;

const Radio: React.FC<RadioProps> = ({ type, children }) => {
  return (
    <Wrapper type={type}>
      <input type={'radio'} />
      <div>{children}</div>
    </Wrapper>
  );
};
export default Radio;
