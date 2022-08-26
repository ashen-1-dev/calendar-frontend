import React, { useRef } from 'react';
import { RadioBox, RadioCircle, Wrapper } from './styled';
import { RadioType } from './radio-type.interface';

export interface RadioOption {
  name: string;
  value: RadioType;
}

export interface RadioProps {
  option: RadioOption;
  onChange?: (radioId: string) => void;
  selected: boolean;
}

const Radio: React.FC<RadioProps> = ({ option, onChange, selected }) => {
  const { value, name } = option;
  const inputRef = useRef<HTMLInputElement>(null);
  const handleOnClick = () => {
    const inputId = inputRef.current?.value;
    if (!inputId || !onChange) {
      return null;
    }
    onChange(inputId);
  };
  return (
    <Wrapper selected={selected} onClick={handleOnClick} option={option}>
      <input
        value={value}
        onChange={onChange && (event => onChange(event.target.id))}
        checked={selected}
        type={'radio'}
        ref={inputRef}
      />
      <RadioBox selected={selected}>{selected && <RadioCircle />}</RadioBox>
      <div>{name}</div>
    </Wrapper>
  );
};

export default Radio;
