import React, { useState } from 'react';
import { ReactComponent as DownArrowSvg } from './assets/arrow-down.svg';
import { ReactComponent as UpArrowSvg } from './assets/arrow-up.svg';
import styled from 'styled-components';

const Wrapper = styled('div')`
  display: inline-block;
  flex-direction: column;
  text-align: left;
  border-radius: 5px;
  font-size: 0.875rem;
  color: var(--default-dark);
  user-select: none;
`;
const SelectHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid transparent;
  width: 21.9em;
  height: 3.125em;
  z-index: 100;
  cursor: pointer;
  > input {
    border: none;
    width: inherit;
    height: inherit;
    cursor: pointer;
  }
  font-weight: bold;
  padding-left: 20px;
  padding-right: 5px;
  :focus {
    outline: none;
    border: 1px solid var(--blue);
  }
`;
const DropdownList = styled('ul')`
  display: flex;
  margin-top: 0.313rem !important;
  gap: 0.625em;
  flex-direction: column;
  border-radius: 5px;
  border: solid 1px var(--ligth-grey3);
`;
const ListItem = styled('li')`
  :first-child {
    padding-top: 0.938rem;
  }
  :last-child {
    padding-bottom: 1rem;
  }
  background-color: inherit;
  padding-left: 1.25em;
`;

export interface SelectOption {
  name: string;
  value: string;
}

interface SelectProps {
  options: SelectOption[];
  onChange: (selectedOption: SelectOption) => void;
  selectedOption: SelectOption;
}

const Select = (props: SelectProps) => {
  const { onChange, options, selectedOption } = props;
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
