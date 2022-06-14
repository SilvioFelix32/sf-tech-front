/* eslint-disable prettier/prettier */
export function addTimeZoneToDate(date: Date | string): Date {
  const newDate = new Date(date);
  const newDateTZ = new Date(
    newDate.valueOf() + newDate.getTimezoneOffset() * 60 * 1000,
  );

  return newDateTZ;
}
