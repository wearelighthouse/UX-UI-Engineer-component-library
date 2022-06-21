import React from 'react';

import Button from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        variant: {
            options: ['text', 'primary', 'secondary'],
            control: {
                type: 'select'
            }
        },
        size: {
            options: ['lg', 'md', 'sm'],
            control: {
                type: 'select'
            }
        }
    }
}

const Template = (args) => <Button {...args} />;

export const Text = Template.bind({});
Text.args = {
    children: 'Text button',
    size: 'lg',
    variant: 'text',
    disabled: false,
}

export const Primary = Template.bind({});
Primary.args = {
    children: 'Primary button',
    size: 'lg',
    variant: 'primary',
    disabled: false,
}

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Secondary Button',
    size: 'lg',
    variant: 'secondary',
    disabled: false,
}

export const Desabled = Template.bind({});
Desabled.args = {
    disabled: true,
    children: 'Disabled Button',
    size: 'lg',
}