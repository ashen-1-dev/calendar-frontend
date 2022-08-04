import React, { useRef } from 'react';
import styled from 'styled-components';
import { Colors } from 'styles/colors';

export type RadioType = 'holiday' | 'event' | 'other';

export interface RadioOption {
  label: string;
  type: RadioType;
}
export interface RadioProps {
  option: RadioOption;
  onChange?: (radioId: string) => void;
  selected: boolean;
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
  > input {
    visibility: hidden;
    position: absolute;
  }
  color: ${({ selected }) => {
    if (selected) {
      return 'white';
    }
    return Colors.LightGrey2;
  }};
  background-color: ${({ selected, option }) => {
    if (selected) {
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
    }
    return Colors.LightGrey3;
  }};
`;

const RadioBox = styled.div<{ selected: boolean }>`
  display: flex;
  content: '';
  border: solid 1px
    ${props => {
      if (props.selected) return 'white';
      return Colors.LightGrey2;
    }};
  width: 0.875em;
  height: 0.875em;
  border-radius: 50px;
`;

const RadioCircle = styled.div`
  margin: auto;
  width: 0.375em;
  height: 0.375em;
  background-color: white;
  border-radius: 50px;
`;

const Radio: React.FC<RadioProps> = ({ option, onChange, selected }) => {
  const { type, label } = option;
  const inputRef = useRef<HTMLInputElement>(null);
  const handleOnClick = () => {
    const inputId = inputRef.current?.id;
    if (!inputId || !onChange) {
      return null;
    }
    onChange(inputId);
  };
  return (
    <Wrapper selected={selected} onClick={handleOnClick} option={option}>
      <input
        id={type}
        onChange={onChange && (event => onChange(event.target.id))}
        checked={selected}
        type={'radio'}
        ref={inputRef}
      />
      <RadioBox selected={selected}>{selected && <RadioCircle />}</RadioBox>
      <div>{label}</div>
    </Wrapper>
  );
};

export default Radio;
