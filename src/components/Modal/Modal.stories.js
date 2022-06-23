import React from 'react';
import Button from '../Button/Button';
import Modal from './Modal';

export default {
    title: 'Components/FullscreenModal',
    Component: Modal
}

const Template = (args) => <Modal {...args} />

export const FullscreenModal = Template.bind({});

FullscreenModal.args = {
    children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}
