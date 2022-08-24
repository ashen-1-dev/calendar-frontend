import styled from 'styled-components';
import { Colors } from '../../../styles/colors';

export const StyledForm = styled.form`
  display: flex;
  padding-top: 2.188rem;
  padding-bottom: 2.188rem;
  gap: 0.625rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #fff;
  padding: 0 1.875rem 2.188rem 1.875rem;
`;
export const VerticalLine = styled.div`
  margin: 1.563rem 0 0;
  width: calc(100% - 1.875rem);
  border: solid 2px ${Colors.LightGrey3};
`;
