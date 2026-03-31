import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Breakdown({ goalName, timeline }) {
    const nav = useNavigate();

    async function toNext() {
        //TODO
    }

    return (
        <main>
            <div className="nb-card nb-yellow">
                <h1 className="text-display text-3xl">{goalName}</h1>
                <h2 className="text-heading text-2xl">To be done { timeline }</h2>
            </div>
            <section className="mt-4">
                <div className="nb-card nb-blue">
                    <h2 className="text-heading text-2xl">-</h2>
                    <button onClick={toNext} className="nb-btn nb-orange mt-4">-</button>
                </div>
            </section>
        </main>
    );
}