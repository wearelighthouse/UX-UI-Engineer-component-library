import React from 'react';
import Button from './Button';

export default {
    title: 'Components/Button',
    component: Button,
}

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.arg = {
    primary: true,
    label: 'Button'
}

export const Secondary = Template;

Secondary.args = {
    label: 'Button'
}

export const Large = Template;

Large.args = {
    large: true,
    label: 'Button'
}

export const Small = Template;

Small.args = {
    small: true,
    label: 'Button'
}