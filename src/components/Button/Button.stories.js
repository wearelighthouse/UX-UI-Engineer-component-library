import React from 'react';
import Button from './Button';

export default {
    title: 'Components/Button',
    component: Button,
}

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: 'primary',
    label: 'Primary button',
    size: 'large'
}

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary',
    label: 'Secondary Button',
    size: 'large'
}

export const Large = Template.bind({});
Large.args = {
    label: 'Large Button',
    size: 'large'
}

export const Medium = Template.bind({});
Medium.args = {
    label: 'Medium Button',
    size: 'medium'
}

export const Small = Template.bind({});
Small.args = {
    label: 'Small Button',
    size: 'small'
}

export const Desabled = Template.bind({});
Desabled.args = {
    disabled: false,
    disabled: true,
    label: 'Disabled Button',
    size: 'large'
}