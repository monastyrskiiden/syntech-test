import React from 'react';

const DatesError = fields => {
  const { day, month, year } = fields;
  const { touched: dayTouched, error: dayError } = day.meta;
  const { touched: monthTouched, error: monthError } = month.meta;
  const { touched: yearTouched, error: yearError } = year.meta;

  if (dayTouched && dayError)
    return <label className="date__error">{dayError}</label>;
  if (monthTouched && monthError)
    return <label className="date__error">{monthError}</label>;
  if (yearTouched && yearError)
    return <label className="date__error">{yearError}</label>;

  return <label className="date__error" />;
};

export default DatesError;
