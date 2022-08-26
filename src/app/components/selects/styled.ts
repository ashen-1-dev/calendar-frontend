import styled from 'styled-components';
import { Colors } from '../../../styles/colors';

export const Wrapper = styled('div')`
  display: inline-block;
  flex-direction: column;
  text-align: left;
  border-radius: 5px;
  font-size: 0.875rem;
  color: var(--default-dark);
  user-select: none;
`;
export const SelectHeader = styled.div`
  display: flex;
  position: relative;
  background-color: ${Colors.LightGrey3};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid transparent;
  border-radius: 5px;
  width: 21.9em;
  height: 3.125rem;
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
export const DropdownList = styled('ul')`
  display: flex;
  position: absolute;
  background-color: white;
  margin-top: 0.313rem !important;
  gap: 0.625em;
  z-index: 1;
  flex-direction: column;
  border-radius: 5px;
  border: solid 1px var(--ligth-grey3);
`;
export const ListItem = styled('li')`
  :first-child {
    padding-top: 0.938rem;
  }
  :last-child {
    padding-bottom: 1rem;
  }
  background-color: inherit;
  padding-left: 1.25em;
`;
