import React from 'react';
import Icon from '../Icon/Icon';

import Button from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        variant: {
            options: ['text', 'primary', 'secondary', 'danger'],
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

const LeftIconsWrapper = () => {
    return (
        <div className="left__icon">
            <div className="icon__wrapper" style={{width: '24px', height: '24px'}}>
                <Icon id={'search'} strokeWidth={1} size={24} />
            </div>
            <span>Button</span>
        </div>
    )
}

const RightIconsWrapper = () => {
    return (
        <div className="right__icon">
            <span>Button</span>
            <div className="right-icon__wrapper" style={{width: '24px', height: '24px'}}>
                <Icon id={'shopping-card'} strokeWidth={1} size={24} />
            </div>
        </div>
    )
}

const Template = (args) => <Button {...args} />;

export const Text = Template.bind({});
Text.args = {
    children: 'Text button',
    size: 'lg',
    variant: 'text',
    disabled: false,
    onClick: () => console.log('Text button')
}

export const Primary = Template.bind({});
Primary.args = {
    children: 'Primary button',
    size: 'lg',
    variant: 'primary',
    disabled: false,
    onClick: () => console.log('Primary button')
}

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Secondary Button',
    size: 'lg',
    variant: 'secondary',
    disabled: false,
    onClick: () => console.log('Secondary button')
}

export const Danger = Template.bind({});
Danger.args = {
    children: 'Danger Button',
    size: 'lg',
    variant: 'danger',
    disabled: false,
    onClick: () => console.log('Danger button')
}

export const LeftIcon = Template.bind({});
LeftIcon.args = {
    children: <LeftIconsWrapper />,
    size: 'lg',
    variant: 'primary',
    disabled: false,
    onClick: () => console.log('Left icon button')
}

export const RightIcon = Template.bind({});
RightIcon.args = {
    children: <RightIconsWrapper />,
    size: 'lg',
    variant: 'danger',
    disabled: false,
    onClick: () => console.log('Right icon button')
}

export const Desabled = Template.bind({});
Desabled.args = {
    disabled: true,
    children: 'Disabled Button',
    size: 'lg'
}