import React from 'react';

export interface CalendarProps {}

export const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(() => {
  return <>Calendar</>;
});

Calendar.displayName = 'Calendar';
