export const getPrevMonth = (date: Date) => {
  if (date.getMonth() === 0) {
    return new Date(date.getFullYear() - 1, 11, 1);
  }
  return new Date(date.getFullYear(), date.getMonth() - 1, 1);
};

export const getNextMonth = (date: Date) => {
  if (date.getMonth() === 11) {
    return new Date(date.getFullYear() + 1, 0, 1);
  }
  return new Date(date.getFullYear(), date.getMonth() + 1, 1);
};
