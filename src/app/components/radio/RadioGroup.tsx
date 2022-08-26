import React from 'react';
import styled from 'styled-components';
import Radio, { RadioOption } from './Radio';

interface RadioGroupProps {
  options: RadioOption[];
  value: string;
  onChange: (selectedType: string) => void;
  name?: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  onChange,
  value,
}) => {
  return (
    <Wrapper>
      {options.map(option => {
        return (
          <Radio
            key={option.value}
            option={option}
            selected={value === option.value}
            onChange={onChange}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 0.625em;
`;

export default RadioGroup;
