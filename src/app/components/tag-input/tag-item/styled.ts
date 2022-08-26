import styled from 'styled-components';
import { Colors } from '../../../../styles/colors';

export const Item = styled.div`
  display: flex;
  color: white;
  border-radius: 3px;
  justify-content: space-between;
  padding: 0.313rem 0.625rem 0.313rem 0.563rem;
  font-size: 0.875rem;
  background-color: ${Colors.Blue};
  white-space: nowrap;
`;
export const ItemDescription = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  margin-top: 0.125rem;
  width: 14.375rem;
  height: 2.275rem;
  font-size: 0.75rem;
  background-color: white;
`;
