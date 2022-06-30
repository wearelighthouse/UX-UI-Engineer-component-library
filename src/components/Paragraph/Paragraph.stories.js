import React from 'react';
import Paragraph from './Paragraph';

export default {
    title: 'Components/Paragraph',
    Component: Paragraph
}



const Template = (args) => <Paragraph {...args} />

export const FirstParagraph = Template.bind({});

FirstParagraph.args = {
    background: "#1380ec",
    color: "#FFFFFF",
    children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
}
