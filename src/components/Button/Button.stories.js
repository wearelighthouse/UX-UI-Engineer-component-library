import React from 'react';
import { withKnobs, text, select, boolean, object } from '@storybook/react';

import Button from './Button';

export default {
    title: 'Components/Button',
    component: {Button},
    argTypes: {
        variant: {
            options: ['none', 'default', 'primary', 'secondary'],
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
    label: 'Default button',
    size: 'large',
    variant: 'default',
}

export const Primary = Template.bind({});
Primary.args = {
    label: 'Primary button',
    size: 'large',
    variant: 'primary',
}

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Secondary Button',
    size: 'large',
    variant: 'secondary',
}

export const Large = Template.bind({});
Large.args = {
    label: 'Large Button',
    size: 'large',
    variant: 'primary',
}

export const Medium = Template.bind({});
Medium.args = {
    label: 'Medium Button',
    size: 'medium',
    variant: 'secondary',
}

export const Small = Template.bind({});
Small.args = {
    label: 'Small Button',
    size: 'small',
    variant: 'primary',
}

export const Desabled = Template.bind({});
Desabled.args = {
    disabled: true,
    label: 'Disabled Button',
    size: 'large',
}