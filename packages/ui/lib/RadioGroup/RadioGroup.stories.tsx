import type { Meta, StoryObj } from '@storybook/react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';
import { RadioGroup, type RadioGroupProps } from './RadioGroup';
import { Radio } from '../Radio/Radio';

const handleRadioChange = (value: string) => {
  console.log('Selected value:', value);
  //   setSelect(value);
};
const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: RadioGroupProps = {
  direction: 'vertical',
  value: '',
  onChange: () => {},
};

export const DefaultRadioGroup: Story = {
  args: {
    ...defaultProps,
  },
};

export const ExampleRadioGroup: Story = {
  args: {
    ...defaultProps,
    onChange: handleRadioChange,
    value: 'nodejs',
    children: (
      <>
        <Radio value="nodejs">nodejs</Radio>
        <Radio value="vuejs">vuejs</Radio>
        <Radio value="react">react</Radio>
      </>
    ),
  },
};
