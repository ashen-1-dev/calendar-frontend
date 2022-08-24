import styled from 'styled-components';
import { ReactNode } from 'react';
import { Colors } from '../../../styles/colors';
import { TableRowProps } from './TagTable';

export const Wrapper = styled.table<{ children: ReactNode | ReactNode[] }>`
  display: grid;
  border-radius: 5px;
  background-color: white;
`;

export const TableRow = styled.tr<TableRowProps>`
  background-color: ${({ selected }) =>
    selected ? Colors.HoverGrey : 'white'};
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 17fr 83fr;
  border-bottom: solid 2px #f8fafe;

  &:first-child {
    border-top-left-radius: 5px;
    border-top: solid 2px #f8fafe;
  }
`;

export const TableItem = styled.td`
  display: flex;
  align-items: center;
  padding: 0.938rem 1.188rem 1.25rem 0.938rem;
  justify-content: space-between;
  border-right: solid 2px #f8fafe;
  :first-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: solid 2px #f8fafe;
  }
`;

export const TableHeader = styled(TableItem)`
  color: ${Colors.LightGrey2};
`;
