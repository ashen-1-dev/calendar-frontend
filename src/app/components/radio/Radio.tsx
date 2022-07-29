import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface RadioProps {
  type?: 'holiday' | 'event' | 'other';
  children?: ReactNode;
}

const Wrapper = styled('div')<RadioProps>`
  display: flex;
  width: 150px;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Radio: React.FC<RadioProps> = ({ type, children }) => {
  return (
    <Wrapper>
      <input type={'radio'} />
      <div>{children}</div>
    </Wrapper>
  );
};

export default Radio;
