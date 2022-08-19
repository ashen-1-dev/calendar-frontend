import React, { useState } from 'react';
import { ReactComponent as DownArrowSvg } from './assets/arrow-down.svg';
import { ReactComponent as UpArrowSvg } from './assets/arrow-up.svg';
import { Wrapper, SelectHeader, ListItem, DropdownList } from './styled';

export interface SelectOption {
  name: string;
  value: string;
}

interface SelectProps {
  options: SelectOption[];
  onChange: (selectedOption: SelectOption) => void;
  selectedOption: SelectOption;
}

const Select = ({ onChange, options, selectedOption }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectItem = option => {
    onChange(option);
    toggle();
  };

  const toggle = () => {
    setIsOpen(prev => !prev);
  };

  const handleOnClick = () => {
    toggle();
  };

  return (
    <Wrapper>
      <SelectHeader tabIndex={0} onClick={handleOnClick}>
        <span>{selectedOption.name}</span>
        {isOpen ? <UpArrowSvg /> : <DownArrowSvg />}
      </SelectHeader>
      <DropdownList>
        {isOpen &&
          options.map(option => {
            return (
              <ListItem
                key={option.value}
                onClick={() => handleSelectItem(option)}
              >
                {option.name}
              </ListItem>
            );
          })}
      </DropdownList>
    </Wrapper>
  );
};

export default Select;
