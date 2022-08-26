import styled from 'styled-components';
import Button from '../buttons/Button';
import { Colors } from '../../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const DateText = styled.span`
  font-weight: bold;
  font-size: 1.25rem;
  text-align: center;
`;

export const NoAppointments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25.625rem 5.375rem;
`;

export const AppointmentContainer = styled.div`
  height: 100%;
  border-radius: 10px;
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const ButtonContainer = styled.div`
  margin-left: auto;
  margin-top: auto;
  position: sticky;
  padding-bottom: 1.25rem;
  padding-right: 0.688rem;
  bottom: 0;
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 1.25rem 0;
`;

export const ReverseButton = styled(Button)`
  && {
    width: 3.125rem;
    border-radius: 5px;
    background-color: ${Colors.LightGrey3};
  }
`;
