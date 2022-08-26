import styled from 'styled-components';
import { Colors } from '../../../../styles/colors';

export const Label = styled.div`
  margin-bottom: 0.625rem;
  font-size: 0.875rem;
  color: ${Colors.DefaultDark};
  font-weight: 500;
`;

export const Wrapper = styled.div`
  padding: 2.188rem 1.875rem;
`;

export const VerticalLine = styled.div`
  margin: 1.563rem 0 0;
  border: solid 2px ${Colors.LightGrey3};
`;

export const Row = styled.div`
  padding-bottom: 1.875rem;
`;

export const ButtonContainer = styled.div`
  padding-top: calc(2.188rem - 1.875rem);
`;
