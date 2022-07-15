import React from "react";
import LinkCards from "./LinkCards";

export default {
    title: 'Components/LinkCards',
    component: LinkCards
}

const cards = [
    {id: 1, name: 'Link card 1', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
    {id: 2, name: 'Link card 2', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
    {id: 3, name: 'Link card 3', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
    {id: 4, name: 'Link card 4', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
    {id: 5, name: 'Link card 5', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
]

const MapLinkCards = () => {
    return (
        <div className="card-wrapper">
            {cards.map(card => (
                <a href="/" className="card-link" key={card.id}>
                    <article className="card">
                        <h2>{card.name}</h2>
                        <p>{card.description}</p>
                    </article>
                </a>
            ))}
        </div>
    )
}

const Template = (args) => <LinkCards {...args} />;

export const LinkCardsComponent = Template.bind({});
LinkCardsComponent.args = {
    children: <MapLinkCards />
}