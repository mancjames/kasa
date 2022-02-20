import React from 'react';
import HomeHero from '../components/components__home/HomeHero'
import Card from '../components/components__home/Card'
import '../styles/Home.css'

export default function Home(props){
    const cards = props.data.map(accommodation => {
        return (
                <Card
            key={accommodation.id}
            {...accommodation}
            />
        )
    })        
    return (
        <div>
            <HomeHero />
            <section className="card__section container">
                {cards}
            </section>
        </div>
    )
}