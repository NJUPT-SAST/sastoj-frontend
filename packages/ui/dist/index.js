import { jsx } from 'react/jsx-runtime';
import React from 'react';

const Button = React.forwardRef(({ ...rest }, ref) =>
  /* @__PURE__ */ jsx('button', {
    ref,
    ...rest,
  }),
);
Button.displayName = 'Button';

export { Button };
