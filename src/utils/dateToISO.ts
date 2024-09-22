interface IProps {
  calendar: {
    identifier: string;
  };
  day: number;
  era: string;
  month: number;
  year: number;
}

export const dateToISOString = (date: IProps) => {
  return new Date(`${date.month}-${date.day}-${date.year}`).toISOString();
};
