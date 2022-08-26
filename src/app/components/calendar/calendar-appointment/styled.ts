import styled from 'styled-components';
import { AppointmentType } from '../../../models/Appointment';
import { Colors } from '../../../../styles/colors';

export const Wrapper = styled.div<{ type: AppointmentType }>`
  display: flex;
  align-items: center;
  padding-left: 0.625rem;
  color: white;
  width: 11.563rem;
  height: 1.875rem;
  border-radius: 5px;
  background-color: ${({ type }) => {
    switch (type) {
      case AppointmentType.Holiday:
        return Colors.Pink;
      case AppointmentType.Event:
        return Colors.Green;
      case AppointmentType.Other:
        return Colors.Yellow;
    }
  }};
`;
