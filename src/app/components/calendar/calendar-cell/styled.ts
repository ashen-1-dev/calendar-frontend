import styled from 'styled-components';
import { Colors } from '../../../../styles/colors';

export const Wrapper = styled.div<{ selected: boolean }>`
  display: flex;
  position: relative;
  flex-direction: column;
  border: solid 1px ${Colors.LightGrey3};
  width: 12.313rem;
  padding: 0 0.325rem;
  background-color: ${({ selected }) =>
    selected ? Colors.HoverGrey : 'white'};
`;

export const AppointmentGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.313rem;
`;

export const Date = styled.span<{ selected: boolean }>`
  padding: 0.938rem 0 0.313rem 0.938rem;
  font-weight: bold;
  color: ${({ selected }) => (selected ? Colors.Blue : Colors.DefaultDark)};
`;
