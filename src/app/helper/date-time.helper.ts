export const isSameDay = (d1: Date, d2: Date): boolean => d1.getFullYear() === d2.getFullYear() &&
  d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();

const monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export const setDate = (newDateTime: string, showOnlyTime: boolean): string => {
  const today = new Date();
  const yesterday = new Date();
  const inputDate = new Date(newDateTime);
  yesterday.setDate(today.getDate() - 1);
  let hours = new Date().getHours();
  const TimeLabel = hours >= 12 ? 'PM' : 'AM';
  const minutes = inputDate.getMinutes() < 10 ? '0' + inputDate.getMinutes() : inputDate.getMinutes();
  const month = monthNames[ inputDate.getMonth() ];
  const date = inputDate.getDate();
  const year = inputDate.getFullYear();
  hours = hours % 12 === 0 ? 12 : hours % 12;
  const onlyTime = `${ hours }:${ minutes } ${ TimeLabel }`;
  const dateAndTime = `${ month } ${ date }, ${ year } at ${ hours }:${ minutes } ${ TimeLabel } `;
  return isSameDay(inputDate, today)
    ? showOnlyTime
      ? onlyTime
      : dateAndTime
    : dateAndTime;
};
