import React from 'react';
import styled from 'styled-components';
import { Colors } from 'styles/colors';

export type RadioType = 'holiday' | 'event' | 'other';

export interface RadioOption {
  label: string;
  type: RadioType;
  selected?: boolean;
}
export interface RadioProps {
  option: RadioOption;
  onChange?: (radioId: string) => void;
  onClick?: (element) => void;
}

const Wrapper = styled('div')<RadioProps>`
  display: flex;
  width: 9.375rem;
  z-index: 100;
  color: white;
  height: 3.125rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 5px;
  > input {
    //visibility: hidden;
    //position: absolute;
  }
  background-color: ${({ option }) => {
    switch (option.type) {
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

const RadioBox = styled('div')`
  display: flex;
  content: '';
  border: 1px solid white;
  width: 0.875em;
  height: 0.875em;
  border-radius: 50px;
`;

const RadioCircle = styled('div')`
  margin: auto;
  width: 0.375em;
  height: 0.375em;
  background-color: white;
  border-radius: 50px;
`;

const Radio: React.FC<RadioProps> = ({ option, onChange }) => {
  const { type, selected, label } = option;
  return (
    <Wrapper option={option}>
      <input
        id={type}
        onChange={onChange && (event => onChange(event.target.id))}
        checked={selected}
        type={'radio'}
      />
      <RadioBox>{selected && <RadioCircle />}</RadioBox>
      <div>{label}</div>
    </Wrapper>
  );
};
export default Radio;
