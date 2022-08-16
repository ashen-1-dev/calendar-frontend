import React from 'react';
import styled from 'styled-components';
import Radio, { RadioOption } from './Radio';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 0.625em;
`;

interface RadioGroupProps {
  options: RadioOption[];
  selectedValue: string;
  onChange: (selectedType: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  onChange,
  selectedValue,
}) => {
  return (
    <Wrapper>
      {options.map(option => {
        return (
          <Radio
            key={option.value}
            option={option}
            selected={selectedValue === option.value}
            onChange={onChange}
          />
        );
      })}
    </Wrapper>
  );
};

export default RadioGroup;
