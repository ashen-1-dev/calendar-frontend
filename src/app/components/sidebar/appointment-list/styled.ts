import styled from 'styled-components';
import { Colors } from '../../../../styles/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0.563rem;
    background: white;
  }
  ::-webkit-scrollbar-thumb {
    background: ${Colors.Scrollbar};
  }
`;

export const VerticalLine = styled.div`
  width: inherit;
  border: solid 2px ${Colors.LightGrey3};
`;
