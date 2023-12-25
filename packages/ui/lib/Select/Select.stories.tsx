import type { Meta, StoryObj } from '@storybook/react';

import { Select, type SelectProps } from './Select';

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: SelectProps = {
  optionsList: [
    { value: 'nextjs', label: 'nextjs', key: 1 },
    { value: 'nuxtjs', label: 'nuxtjs', key: 2 },
  ],
  title: 'which framwork?',
  onChange: function () {},
  disabled: false,
};

export const DefaultButton: Story = {
  args: {
    ...defaultProps,
  },
};

export const DisabledButton: Story = {
  args: {
    ...defaultProps,
  },
};
