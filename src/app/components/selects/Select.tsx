import React from 'react';
import { ReactComponent as DownArrowSvg } from './assets/arrow-down.svg';
import { ReactComponent as UpArrowSvg } from './assets/arrow-up.svg';
import { DropdownList, ListItem, SelectHeader, Wrapper } from './styled';
import { useToggle } from '../../hooks/useToggle';

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
  const [isOpen, toggle] = useToggle(false);

  const handleSelectItem = option => {
    onChange(option);
    toggle();
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
