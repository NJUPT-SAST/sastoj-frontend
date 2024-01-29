import React, { useEffect, useRef, useState } from 'react';
import { Button } from '..';
import classNames from 'classnames';
import styles from './Carousel.module.scss';

export interface CarouselProps {
  /**
   * width of the carousel
   */
  width: number;
  /**
   * number of the item
   */
  number: number;
}

export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ width = 400, number = 4 }, ref) => {
    const [select, setSelect] = useState<number>(0);
    const [startX, setStartX] = useState<number>(0);
    const [endX, setEndX] = useState<number>(0);
    const [startTime, setStartTime] = useState<number>(0);
    const [endTime, setEndTime] = useState<number>(0);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [difference, setDifference] = useState<number>(0);
    const [isChanged, setIsChanged] = useState<boolean>(false);

    const divRef = useRef<HTMLDivElement>(null);

    const pre = () => {
      select !== 0 && setSelect(select - 1);
    };

    const next = () => {
      select !== number - 1 && setSelect(select + 1);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
      setStartX(e.clientX);
      setStartTime(Date.now());
      setIsDragging(true);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!isDragging) return;
      const currentX = e.clientX;
      const difference = startX - currentX;
      setDifference(difference);
    };

    useEffect(() => {
      if (divRef.current) {
        divRef.current.style.transition = 'auto';
        if (select === 0) divRef.current.style.transform = `translateX(${-difference}px)`;
        else divRef.current.style.transform = `translateX(-${width * select + difference}px)`;
      }
    }, [difference, select, width]);

    useEffect(() => {
      if (difference === 0 && divRef.current) {
        divRef.current.style.transition = '';
        divRef.current.style.transform = `translateX(-${width * select}px)`;
      }
    }, [select, width, difference]);

    const handleMouseUp = (e: React.MouseEvent) => {
      setEndX(e.clientX);
      setEndTime(Date.now());
      if (Math.abs(difference) >= 200 && difference > 0 && select !== number - 1) {
        setSelect(select + 1);
        setIsChanged(true);
      }
      if (Math.abs(difference) >= 200 && difference < 0 && select !== 0) {
        setSelect(select - 1);
        setIsChanged(true);
      }
      if (Math.abs(difference) < 200 && divRef.current && select === number - 1 && select === 0) {
        divRef.current.style.transform = `translateX(-${width * select}px)`;
      }
      setDifference(0);
      setIsDragging(false);
    };

    useEffect(() => {
      if (difference === 0 && !isChanged) {
        const duration = endTime - startTime;
        const space = endX - startX;
        const v = space / duration;
        v < -0.3 && select !== number - 1 && setSelect(select + 1);
        v > 0.3 && select != 0 && setSelect(select - 1);
      }
      setIsChanged(false);
    }, [difference]);

    const carouselClass = classNames(styles['base']);

    return (
      <>
        <div
          className={carouselClass}
          ref={ref}
        >
          <div
            className={styles['carouselAll']}
            ref={divRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            <div style={{ background: 'black', height: '200px', width: '400px' }}></div>
            <div style={{ background: 'red', height: '200px', width: '400px' }}></div>
            <div style={{ background: 'green', height: '200px', width: '400px' }}></div>
            <div style={{ background: 'blue', height: '200px', width: '400px' }}></div>
          </div>
        </div>
        <Button onClick={pre}>Pre</Button>
        <Button onClick={next}>Next</Button>
      </>
    );
  },
);

Carousel.displayName = 'Carousel';
