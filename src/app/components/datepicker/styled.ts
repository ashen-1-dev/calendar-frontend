import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import DatePicker from 'react-datepicker';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.625em;
  .react-datepicker-wrapper {
    width: inherit;
  }
`;
export interface StyledDatePickerProps {
  type?: 'time' | 'date';
}
export const StyledDatePicker = styled(DatePicker)<StyledDatePickerProps>`
  width: 14.375em;
  height: 3.125em;
  padding-left: 1.25rem;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  background-color: ${Colors.LightGrey3};
  color: ${({ type }) =>
    type === 'date' ? Colors.LightGrey2 : Colors.DefaultDark};
  :focus-within {
    outline: none;
    border: 1px solid ${Colors.Blue};
  }
  ::placeholder {
    color: ${Colors.LightGrey2};
  }
export `;
