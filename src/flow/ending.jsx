import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Ending({ goalName, timeline, breakdown }) {
    const nav = useNavigate();

    async function toNext() {
        nav('/ending');
    }

    return (
        <section>
            <p className="text-center text-body m-1">Screenshot this page!</p>
            <div className="flex justify-center nb-card nb-blue">
                <img className="h-[100px]" src="christ.jpeg" />
            </div>
            <div className="nb-card nb-orange mt-4 ">
                <h1 className="text-display text-2xl">Imma get <b>{goalName}</b> done by <b>{timeline}</b></h1>
            </div>
            <div className="nb-card nb-yellow mt-4">
                <p className="text-heading text-2xl">{breakdown}</p>
            </div>
        </section>
    );
}