import React from 'react';
import Hero from '../components/components__home/Hero'
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
        <main>
            <Hero />
            <section className="card__section container">
                {cards}
            </section>
        </main>
    )
}