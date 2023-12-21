import type { Meta, StoryObj } from '@storybook/react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { Accordion, type AccordionProps } from './Accordion';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: AccordionProps = {
  color: 'primary',
  size: 'medium',
  accordionTrigger: <span>hello</span>,
  accordionContent: <span>hi</span>,
};

export const DefaultCard: Story = {
  args: {
    ...defaultProps,
  },
};

export const ExampleCard: Story = {
  args: {
    ...defaultProps,
  },
};
