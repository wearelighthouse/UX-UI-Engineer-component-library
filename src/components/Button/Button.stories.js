import React from 'react';
import { withKnobs, text, select, boolean, object } from '@storybook/react';

import Button from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        variant: {
            options: ['default', 'primary', 'secondary'],
            control: {
                type: 'select'
            }
        },
        size: {
            options: ['large', 'medium', 'small'],
            control: {
                type: 'select'
            }
        }
    }
}

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Default button',
    size: 'large',
    variant: 'default',
    disabled: false,
}

export const Primary = Template.bind({});
Primary.args = {
    children: 'Primary button',
    size: 'large',
    variant: 'primary',
    disabled: false,
}

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Secondary Button',
    size: 'large',
    variant: 'secondary',
    disabled: false,
}

export const Large = Template.bind({});
Large.args = {
    children: 'Large Button',
    size: 'large',
    variant: 'primary',
    disabled: false,
}

export const Medium = Template.bind({});
Medium.args = {
    children: 'Medium Button',
    size: 'medium',
    variant: 'secondary',
    disabled: false,
}

export const Small = Template.bind({});
Small.args = {
    children: 'Small Button',
    size: 'small',
    variant: 'primary',
    disabled: false,
}

export const Desabled = Template.bind({});
Desabled.args = {
    disabled: true,
    children: 'Disabled Button',
    size: 'large',
}