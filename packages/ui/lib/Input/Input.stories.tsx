import type { Meta, StoryObj } from '@storybook/react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { Input, type InputProps } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    mode: {
      options: ['text', 'password'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: InputProps = {
  width: 280,
  disabled: false,
  label: 'hello',
  mode: 'text',
  placeholder: 'text',
  fontsize: 14,
};

export const DefaultInput: Story = {
  args: {
    ...defaultProps,
  },
};

export const ExampleInput: Story = {
  args: {
    ...defaultProps,
    label: <span>userName</span>,
    placeholder: 'hello',
  },
};

// export const IconInput: Story = {
//   args: {
//     ...defaultProps,
//     label: <h1>hello</h1>,
//   },
// };
