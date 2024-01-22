import type { Meta, StoryObj } from '@storybook/react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';
import { RadioGroup, type RadioGroupProps } from './RadioGroup';

const handleRadioChange = (value: string | string[] | null) => {
  console.log('Selected value:', value);
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
  defaultValue: '',
  onChange: () => {},
  isMultipe: false,
  options: [
    { children: 'nodejs', value: 'nodejs' },
    { children: 'vuejs', value: 'vuejs' },
    { children: 'react', value: 'react' },
  ],
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
    defaultValue: ['nodejs'],
    isMultipe: true,
  },
};
