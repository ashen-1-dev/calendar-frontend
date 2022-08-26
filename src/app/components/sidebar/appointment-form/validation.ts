import { Appointment } from '../../../models/Appointment';

export const validation = (values: Appointment) => {
  const errors: {
    name?: string;
    date?: string;
    state?: { value?: string; type?: string };
  } = {};
  if (!values.name) {
    errors.name = 'Обязательное поле';
  }
  if (!values.date) {
    errors.date = 'Обязательное поле';
  }
  if (!values.state?.type) {
    errors.state = {};
    errors.state.type = 'Обязательное поле';
  }
  return errors;
};
