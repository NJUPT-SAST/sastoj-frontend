import type { Meta, StoryObj } from '@storybook/react';

import { OptionProps, Select, type SelectProps } from './Select';

const test = (option: OptionProps) => {
  console.log('selectOption', option);
};

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
    { value: 'nodejs', label: 'nodejs', key: 3 },
    { value: 'vuejs', label: 'vuejs', key: 5 },
    { value: 'react', label: 'react', key: 4 },
  ],
  onchange: test,
  disabled: false,
  defaultSelectKey: 2,
  selectKey: 2,
};

export const FirstSelect: Story = {
  args: {
    ...defaultProps,
  },
};
