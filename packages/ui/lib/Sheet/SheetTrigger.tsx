import React from 'react';

export interface SheetTrigger {
  /**
   * children of the sheetTrigger
   */
  children: React.ReactNode;
}

export const SheetTrigger = React.forwardRef<HTMLDivElement, SheetTrigger>(({ children }, ref) => {
  return (
    <>
      <div ref={ref}>{children}</div>
    </>
  );
});

SheetTrigger.displayName = 'SheetTrigger';
