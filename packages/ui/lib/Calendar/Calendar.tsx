import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import styles from './Calendar.module.scss';
import DayItem from './DayItem';

export interface CalendarProps {
  /**
   * the onChange of the calendar
   */
  onChange?: (value: Date) => void;
  /**
   * the selected of the date
   */
  selected?: Date;
  /**
   * defaultselected of the calendar
   */
  defaultSelected?: Date;
}

export const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  ({ onChange, selected, defaultSelected }, ref) => {
    // Initialize the state to store the selected date
    const [selectDate, setSelectDate] = useState<Date>(defaultSelected || new Date());
    const [currentDate] = useState<Date>(new Date());
    const [numberOfDaysFromPrevMonth, setNumberOfDaysFromPrevMonth] = useState<number>(0);
    const [numberOfDaysInLastMonth, setNumberOfDaysInLastMonth] = useState<number>(0);
    const [numberOfDaysInMonth, setNumberOfDaysInMonth] = useState<number>(0);
    const [numberOfDaysFromAfterMonth, setNumberOfDaysFromAfterMonth] = useState<number>(0);
    const [selectMonth, setSelectMonth] = useState<number>(new Date().getMonth());

    // Function to generate the calendar grid
    useEffect(() => {
      const numberOfDaysInMonth = new Date(currentDate.getFullYear(), selectMonth + 1, 0).getDate();
      setNumberOfDaysInMonth(numberOfDaysInMonth);

      const numberOfDaysInLastMonth = new Date(currentDate.getFullYear(), selectMonth, 0).getDate();
      setNumberOfDaysInLastMonth(numberOfDaysInLastMonth);

      const firstDayOfMonth = new Date(currentDate.getFullYear(), selectMonth, 1).getDay();

      const numberOfDaysFromPrevMonth = (firstDayOfMonth + 6) % 7;
      setNumberOfDaysFromPrevMonth(numberOfDaysFromPrevMonth);

      const lastDayOfMonth = new Date(
        currentDate.getFullYear(),
        selectMonth,
        numberOfDaysInMonth,
      ).getDay();

      const numberOfDaysFromAfterMonth = Math.abs(lastDayOfMonth - 7) % 7;
      setNumberOfDaysFromAfterMonth(numberOfDaysFromAfterMonth);
    }, [currentDate, selectMonth]);

    useEffect(() => {
      selected && setSelectDate(selected);
    }, [selected]);

    const weekdays = () => {
      const weekdays = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

      const weekdaysFlex = [];

      weekdaysFlex.push(
        <div
          key="weekdays"
          className={styles['weekdays']}
        >
          {weekdays.map((weekday, index) => (
            <div
              key={index}
              className={`${styles['weekday']} `}
            >
              {weekday}
            </div>
          ))}
        </div>,
      );
      return weekdaysFlex;
    };
    const calendarClass = classNames(`${styles['base']}`);

    const changeMonth = (isBack: boolean) => {
      isBack && setSelectMonth(selectMonth - 1);
      !isBack && setSelectMonth(selectMonth + 1);
    };

    useEffect(() => {
      onChange && onChange(selectDate);
    }, [selectDate, onChange]);

    return (
      <div
        className={calendarClass}
        ref={ref}
      >
        <div className={styles['calendarTitle']}>
          <div className={styles['buttonContainer']}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => changeMonth(true)}
            >
              <rect
                width="24"
                height="24"
                rx="5"
                fill="white"
              />
              <rect
                x="0.5"
                y="0.5"
                width="23"
                height="23"
                rx="4.5"
                stroke="#808080"
              />
              <path
                d="M17.25 12.0001C17.25 11.8454 17.1885 11.697 17.0791 11.5876C16.9697 11.4782 16.8213 11.4167 16.6666 11.4167H7.62496C7.47025 11.4167 7.32188 11.4782 7.21248 11.5876C7.10308 11.697 7.04163 11.8454 7.04163 12.0001C7.04163 12.1548 7.10308 12.3032 7.21248 12.4126C7.32188 12.522 7.47025 12.5834 7.62496 12.5834H16.6666C16.8213 12.5834 16.9697 12.522 17.0791 12.4126C17.1885 12.3032 17.25 12.1548 17.25 12.0001Z"
                fill="black"
              />
              <path
                d="M11.2457 16.204C11.3551 16.0946 11.4165 15.9463 11.4165 15.7916C11.4165 15.6369 11.3551 15.4886 11.2457 15.3792L7.86649 11.9999L11.2457 8.62066C11.352 8.51064 11.4108 8.36329 11.4095 8.21034C11.4081 8.0574 11.3468 7.91109 11.2386 7.80293C11.1305 7.69478 10.9842 7.63343 10.8312 7.6321C10.6783 7.63077 10.5309 7.68957 10.4209 7.79583L7.04166 11.1751C6.82294 11.3939 6.70007 11.6906 6.70007 11.9999C6.70007 12.3093 6.82294 12.606 7.04166 12.8247L10.4209 16.204C10.5303 16.3134 10.6786 16.3748 10.8333 16.3748C10.988 16.3748 11.1363 16.3134 11.2457 16.204Z"
                fill="black"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => changeMonth(false)}
            >
              <rect
                width="24"
                height="24"
                rx="5"
                fill="white"
              />
              <rect
                x="0.5"
                y="0.5"
                width="23"
                height="23"
                rx="4.5"
                stroke="#808080"
              />
              <path
                d="M6.75 12.0001C6.75 11.8454 6.81146 11.697 6.92085 11.5876C7.03025 11.4782 7.17862 11.4167 7.33333 11.4167H16.375C16.5297 11.4167 16.6781 11.4782 16.7875 11.5876C16.8969 11.697 16.9583 11.8454 16.9583 12.0001C16.9583 12.1548 16.8969 12.3032 16.7875 12.4126C16.6781 12.522 16.5297 12.5834 16.375 12.5834H7.33333C7.17862 12.5834 7.03025 12.522 6.92085 12.4126C6.81146 12.3032 6.75 12.1548 6.75 12.0001Z"
                fill="black"
              />
              <path
                d="M12.7543 16.204C12.6449 16.0946 12.5835 15.9463 12.5835 15.7916C12.5835 15.6369 12.6449 15.4886 12.7543 15.3792L16.1335 11.9999L12.7543 8.62066C12.648 8.51064 12.5892 8.36329 12.5906 8.21034C12.5919 8.0574 12.6532 7.91109 12.7614 7.80293C12.8695 7.69478 13.0159 7.63343 13.1688 7.6321C13.3218 7.63077 13.4691 7.68957 13.5791 7.79583L16.9584 11.1751C17.1771 11.3939 17.3 11.6906 17.3 11.9999C17.3 12.3093 17.1771 12.606 16.9584 12.8247L13.5791 16.204C13.4697 16.3134 13.3214 16.3748 13.1667 16.3748C13.012 16.3748 12.8637 16.3134 12.7543 16.204Z"
                fill="black"
              />
            </svg>
          </div>
          <span>
            {(([, month, , year]) => `${month}, ${year}`)(
              new Date(currentDate.getFullYear(), selectMonth, 0).toDateString().split(' '),
            )}
          </span>
        </div>
        {weekdays()}
        <div className={styles['calendarItems']}>
          {[...Array(numberOfDaysFromPrevMonth)].map((_, index) => (
            <DayItem
              index={numberOfDaysInLastMonth - numberOfDaysFromPrevMonth + index + 1}
              isOtherMonth="pre"
              key={index}
              selectDate={selectDate}
              currentDate={currentDate}
              onChange={setSelectDate}
              selectMonth={selectMonth}
            />
          ))}

          {[...Array(numberOfDaysInMonth)].map((_, index) => (
            <DayItem
              index={index + 1}
              isOtherMonth="this"
              key={index}
              selectDate={selectDate}
              currentDate={currentDate}
              onChange={setSelectDate}
              selectMonth={selectMonth}
            />
          ))}

          {[...Array(numberOfDaysFromAfterMonth)].map((_, index) => (
            <DayItem
              index={index + 1}
              isOtherMonth="after"
              key={index}
              selectDate={selectDate}
              currentDate={currentDate}
              onChange={setSelectDate}
              selectMonth={selectMonth}
            />
          ))}
        </div>
      </div>
    );
  },
);

Calendar.displayName = 'Calendar';
