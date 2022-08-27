import styled from 'styled-components';
import { Colors } from '../../../../styles/colors';
import { AppointmentType } from '../../../models/Appointment';

export const Wrapper = styled.div<{ hover: boolean }>`
  display: flex;
  background-color: ${({ hover }) => (hover ? Colors.HoverGrey : 'white')};
  flex-direction: column;
  font-size: 1.125rem;
  gap: 0.625rem;
  width: 28.125rem;
  min-height: 8.188rem;
  padding: 1.25rem;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  flex-direction: row;
`;

export const ButtonContainer = styled(Row)`
  margin-left: auto;
`;
export const TagContainer = styled.div`
  padding: 0.413rem 0.938rem;
  font-size: 0.875rem;
  border-radius: 14px;
  background-color: ${Colors.LightGrey3};
`;

export const ColoredText = styled.span<{ type: AppointmentType }>`
  color: ${({ type }) => {
    switch (type) {
      case AppointmentType.Holiday: {
        return Colors.Pink;
      }
      case AppointmentType.Event: {
        return Colors.Green;
      }
      case AppointmentType.Other: {
        return Colors.Yellow;
      }
    }
  }};
`;

export const Circle = styled.div<{ type: AppointmentType }>`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50px;
  background-color: ${({ type }) => {
    switch (type) {
      case AppointmentType.Holiday: {
        return Colors.Pink;
      }
      case AppointmentType.Event: {
        return Colors.Green;
      }
      case AppointmentType.Other: {
        return Colors.Yellow;
      }
    }
  }};
`;

export const RemainingTime = styled.div`
  margin-left: auto;
  color: ${Colors.Blue};
  font-size: 0.875rem;
  font-weight: 500;
  font-style: italic;
`;
