import type { Meta, StoryObj } from '@storybook/react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { Card, type CardProps } from './Card';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      options: ['dark', 'light'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: CardProps = {
  theme: 'light',
  size: 'medium',
  header: <span>header</span>,
  content: <span>content</span>,
  footer: <span>footer</span>,
};

export const DefaultCard: Story = {
  args: {
    ...defaultProps,
  },
};

export const ExampleCard: Story = {
  args: {
    ...defaultProps,
    header: (
      <>
        <h3 style={{ color: 'rgba(128, 128, 128)' }}>SAST</h3>
        <h1>基础知识竞赛</h1>
      </>
    ),
    content: (
      <>
        <div>
          基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛
          基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛
          基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛
          基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛
          基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛
          基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛基础知识竞赛
        </div>
      </>
    ),
    footer: (
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 20 }}>
        <Button color="danger">cancel</Button>
        <Button>enter</Button>
      </div>
    ),
  },
};

export const LoginCard: Story = {
  args: {
    ...defaultProps,
    header: (
      <>
        <h3 style={{ color: 'rgba(128, 128, 128)' }}>SASTOJ</h3>
        <h1>LOGIN</h1>
      </>
    ),
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
        <Input label={<span>studentId</span>}></Input>
        <Input
          label={<span>password</span>}
          type="password"
        ></Input>
      </div>
    ),
    footer: (
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 20 }}>
        <Button color="danger">cancel</Button>
        <Button>enter</Button>
      </div>
    ),
  },
};
