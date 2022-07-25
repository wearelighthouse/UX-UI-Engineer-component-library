import React from 'react';
import SearchInput from "./SearchInput";

export default {
    title: 'Components/SearchInput',
    component: {SearchInput},
    argTypes: {
        size: {
            options: ['lg', 'md', 'sm'],
            control: {
                type: 'select'
            }
        },
        icon: {
            control: {
            type: 'select',
            options: ['search', 'at-sign'],
            },
        },
    }
}

const Template = (args) => <SearchInput {...args} />

export const SearchInputIcon = Template.bind({});
SearchInputIcon.args = {
    placeholder: 'Search…',
    label: 'Search Input with icon',
    icon: 'search',
    size: 'lg',
    onChange: () => console.log('Search Input')
}

export const SearchInputOutline = Template.bind({});
SearchInputOutline.args = {
    outline: 'outline',
    placeholder: 'Search…',
    label: 'Search Input with outline',
    size: 'lg',
    onChange: () => console.log('Search Input')
}

export const NoOutlineNoIcon = Template.bind({});
NoOutlineNoIcon.args = {
    placeholder: 'Search…',
    label: 'Search Input with no icon or outline',
    size: 'lg',
    onChange: () => console.log('Search Input')
}