import React, { useState } from 'react';
import './Select.css';
import { ReactComponent as DownArrowSvg } from './assets/arrow-down.svg';
import { ReactComponent as UpArrowSvg } from './assets/arrow-up.svg';
import styled from 'styled-components';

const SelectContainer = styled('div')`
  display: inline-block;
  flex-direction: column;
  text-align: left;
  border-radius: 5px;
  font-size: 14px;
  color: var(--default-dark);
  user-select: none;
`;
const SelectHeader = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 351px;
  height: 50px;
  font-weight: bold;
  padding-left: 20px;
  padding-right: 5px;
  :focus {
    border: 1px solid var(--blue);
  }
`;
const DropdownList = styled('ul')`
  display: flex;
  gap: 10px;
  flex-direction: column;
  background-color: inherit;
  border-radius: inherit;
  border: solid 1px var(--ligth-grey3);
`;
const ListItem = styled('li')`
  background-color: inherit;
  padding-left: 20px;
`;

const Select = () => {
  const options = ['Сортровка по времени начала', 'option 2', 'option 3'];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(options[0]);

  const handleSelectItem = option => {
    setSelectedItem(option);
    toggle();
  };

  const toggle = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <SelectContainer>
      <SelectHeader tabIndex={0} onClick={toggle}>
        {selectedItem}
        {isOpen ? <UpArrowSvg /> : <DownArrowSvg />}
      </SelectHeader>
      <DropdownList>
        {isOpen &&
          options.map(option => {
            return (
              <ListItem
                key={Math.random()}
                onClick={() => handleSelectItem(option)}
              >
                {option}
              </ListItem>
            );
          })}
      </DropdownList>
    </SelectContainer>
  );
};

export default Select;
