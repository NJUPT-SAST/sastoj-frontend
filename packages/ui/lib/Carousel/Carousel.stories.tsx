import type { Meta, StoryObj } from '@storybook/react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { Carousel, type CarouselProps } from './Carousel';

const test = (value: number) => {
  console.log('select number', value);
};

const styles = {
  width: '280px',
  height: '280px',
  border: '1px solid black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '10px',
  fontSize: '40px',
  fontWeight: '1000',
  boxShadow: '0px 3px 10px #808080',
};

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
    width: 300,
    height: 300,
    CarouselItems: [
      { children: <div style={styles}>1</div> },
      { children: <div style={styles}>2</div> },
      { children: <div style={styles}>3</div> },
      { children: <div style={styles}>4</div> },
      { children: <div style={styles}>5</div> },
    ],
    onChange: test,
    defaultSelected: 2,
    selected: 1,
  },
};

export const ExampleCarousel: Story = {
  args: {
    ...defaultProps,
  },
};
