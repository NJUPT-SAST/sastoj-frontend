import React, { useEffect, useState, type ReactNode } from 'react';
import styles from './Pagination.module.scss';
import classNames from 'classnames';

export interface PaginationProps {
  /**
   * the total of the number 一共的总条数
   */
  total: number;
  /**
   * the pageSize of the total 每页条数
   */
  pageSize: number;
  /**
   * the onchange of the Pagination
   */
  onChange?: (value: number) => void;
  /**
   * currentpage of the Pagination
   */
  activePage?: number | undefined;
  /**
   * defaultActivePage of the Pagination
   */
  defaultActivePage?: number;
  /**
   * disabled of the Pagination
   */
  disabled?: boolean;
}

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      pageSize = 10,
      total = 80,
      onChange = function () {},
      activePage,
      defaultActivePage = 1,
      disabled = false,
      ...rest
    },
    ref,
  ) => {
    const [pageNumber, setPageNumber] = useState<number>(0);
    const [itemList, setItemList] = useState<ReactNode[]>();
    const [currentPage, setCurrentPage] = useState<number>(defaultActivePage);

    useEffect(() => {
      const pageNumber = total / pageSize;
      setPageNumber(Math.ceil(pageNumber));
    }, [total, pageSize]);

    useEffect(() => {
      onChange(currentPage);
    }, [currentPage, onChange]);

    useEffect(() => {
      if (activePage) setCurrentPage(activePage);
    }, [activePage]);

    useEffect(() => {
      const newItems: ReactNode[] = [];
      //当页面数小于等于7时，全部展示，没有省略
      if (pageNumber <= 7)
        for (let i = 0; i < pageNumber; i++) {
          newItems.push(
            <div
              className={`${styles['item']} ${styles[i + 1 === currentPage ? 'active' : '']}`}
              key={i}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </div>,
          );
        }
      else {
        //这是currentPage出现在前三个时的省略情况
        if (currentPage <= 3) {
          for (let i = 0; i < 4; i++) {
            newItems.push(
              <div
                className={`${styles['item']} ${styles[i + 1 === currentPage ? 'active' : '']}`}
                key={i}
                onClick={() => !disabled && setCurrentPage(i + 1)}
              >
                {i + 1}
              </div>,
            );
          }
          newItems.push(
            <div className={`${styles['item']} ${styles['more']}`}>
              <span>...</span>
            </div>,
          );
          for (let i = pageNumber - 3; i < pageNumber; i++) {
            newItems.push(
              <div
                className={`${styles['item']} ${styles[i + 1 === currentPage ? 'active' : '']}`}
                key={i}
                onClick={() => !disabled && setCurrentPage(i + 1)}
              >
                {i + 1}
              </div>,
            );
          }
        }
        //这是currentPage出现在后三个时的省略情况
        if (currentPage >= pageNumber - 2) {
          for (let i = 0; i < 3; i++) {
            newItems.push(
              <div
                className={`${styles['item']} ${styles[i + 1 === currentPage ? 'active' : '']}`}
                key={i}
                onClick={() => !disabled && setCurrentPage(i + 1)}
              >
                {i + 1}
              </div>,
            );
          }
          newItems.push(
            <div className={`${styles['item']} ${styles['more']}`}>
              <span>...</span>
            </div>,
          );
          for (let i = pageNumber - 4; i < pageNumber; i++) {
            newItems.push(
              <div
                className={`${styles['item']} ${styles[i + 1 === currentPage ? 'active' : '']}`}
                key={i}
                onClick={() => !disabled && setCurrentPage(i + 1)}
              >
                {i + 1}
              </div>,
            );
          }
        }
        //这是currentPage出现在中间时的省略情况
        if (currentPage < pageNumber - 2 && currentPage > 3) {
          newItems.push(
            <div
              className={`${styles['item']}`}
              key={1}
              onClick={() => !disabled && setCurrentPage(1)}
            >
              {1}
            </div>,
          );
          newItems.push(
            <div className={`${styles['item']} ${styles['more']}`}>
              <span>...</span>
            </div>,
          );
          for (let i = currentPage - 2; i < currentPage + 2; i++) {
            newItems.push(
              <div
                className={`${styles['item']} ${styles[i + 1 === currentPage ? 'active' : '']}`}
                key={i}
                onClick={() => !disabled && setCurrentPage(i + 1)}
              >
                {i + 1}
              </div>,
            );
          }
          newItems.push(
            <div className={`${styles['item']} ${styles['more']}`}>
              <span>...</span>
            </div>,
          );
          newItems.push(
            <div
              className={`${styles['item']}`}
              key={pageNumber}
              onClick={() => !disabled && setCurrentPage(pageNumber)}
            >
              {pageNumber}
            </div>,
          );
        }
      }
      setItemList(newItems);
    }, [pageNumber, currentPage, disabled]);

    const PaginationClass = classNames(`${styles['base']} ${styles[disabled ? 'disabled' : '']}`);

    return (
      <>
        <div
          ref={ref}
          {...rest}
          className={PaginationClass}
        >
          <div
            className={`${styles['item']} ${styles[currentPage === 1 ? 'disabled' : '']}`}
            onClick={() => currentPage > 1 && !disabled && setCurrentPage(currentPage - 1)}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7267 12L12.6667 11.06L9.61341 8L12.6667 4.94L11.7267 4L7.72675 8L11.7267 12Z"
                fill="#333333"
              />
              <path
                d="M7.33344 12L8.27344 11.06L5.2201 8L8.27344 4.94L7.33344 4L3.33344 8L7.33344 12Z"
                fill="#333333"
              />
            </svg>
          </div>
          {itemList}
          <div
            className={`${styles['item']} ${styles[currentPage === pageNumber ? 'disabled' : '']}`}
            onClick={() => currentPage < pageNumber && !disabled && setCurrentPage(currentPage + 1)}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.27325 4L3.33325 4.94L6.38659 8L3.33325 11.06L4.27325 12L8.27325 8L4.27325 4Z"
                fill="black"
              />
              <path
                d="M8.66656 4L7.72656 4.94L10.7799 8L7.72656 11.06L8.66656 12L12.6666 8L8.66656 4Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </>
    );
  },
);

Pagination.displayName = 'Pagination';
