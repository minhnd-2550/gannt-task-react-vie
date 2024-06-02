import dayjs from 'dayjs';

export const FULL_DATE_SLASH = 'YYYY/MM/DD';

export const getDateTimeWithFormat = (dateString: string | Date, displayFormat: string = FULL_DATE_SLASH) => {
  if (!dateString) return '';
  return dayjs(dateString).format(displayFormat);
};
