import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { RadioProps } from './Radio';

export const Wrapper = styled('div')<RadioProps>`
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
      switch (option.value) {
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

export const RadioBox = styled.div<{ selected: boolean }>`
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

export const RadioCircle = styled.div`
  margin: auto;
  width: 0.375em;
  height: 0.375em;
  background-color: white;
  border-radius: 50px;
`;
