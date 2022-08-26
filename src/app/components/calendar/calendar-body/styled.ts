import styled from 'styled-components';
import { CALENDAR_COLUMN, CALENDAR_ROW } from '../../../constants/constants';
import { Colors } from '../../../../styles/colors';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${CALENDAR_COLUMN}, 1fr);
  grid-template-rows: 4.5rem repeat(${CALENDAR_ROW}, minmax(7.74rem, 1fr));
  grid-column-gap: 0;
  grid-row-gap: 0;
`;

export const Header = styled.div`
  display: flex;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  border: solid 2px ${Colors.LightGrey3};
  border-bottom: solid 1px ${Colors.LightGrey3};
  border-right: 0;
`;
