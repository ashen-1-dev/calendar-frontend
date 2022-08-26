import styled from 'styled-components';
import { Colors } from '../../../../styles/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VerticalLine = styled.div`
  width: inherit;
  border: solid 2px ${Colors.LightGrey3};
`;
