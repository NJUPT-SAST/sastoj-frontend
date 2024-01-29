import type { Meta, StoryObj } from '@storybook/react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { Carousel, type CarouselProps } from './Carousel';

const meta = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: CarouselProps = {};

export const DefaultCarousel: Story = {
  args: {
    ...defaultProps,
  },
};

export const ExampleCarousel: Story = {
  args: {
    ...defaultProps,
  },
};
