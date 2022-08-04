import React, { useState } from 'react';
import styled from 'styled-components';
import Radio, { RadioOption } from './Radio';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 0.625em;
`;

interface RadioGroupProps {
  options: RadioOption[];
}

const RadioGroup: React.FC<RadioGroupProps> = ({ options }) => {
  const [selectedId, setSelectedId] = useState('');
  return (
    <Wrapper>
      {options.map(option => {
        return (
          <Radio
            key={option.type}
            option={option}
            selected={option.type == selectedId}
            onChange={() => setSelectedId(option.type)}
          />
        );
      })}
    </Wrapper>
  );
};

export default RadioGroup;
