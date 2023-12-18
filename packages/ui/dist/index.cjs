'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const React = require('react');

const Button = React.forwardRef(({ ...rest }, ref) =>
  /* @__PURE__ */ jsxRuntime.jsx('button', {
    ref,
    ...rest,
  }),
);
Button.displayName = 'Button';

exports.Button = Button;
