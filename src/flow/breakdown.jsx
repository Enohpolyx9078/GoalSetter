import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Breakdown({ goalName, timeline }) {
    const nav = useNavigate();

    async function toNext() {
        //TODO
    }

    return (
        <main>
            <h1 className="text-display text-3xl nb-card nb-blue">{ goalName.current.value }</h1>
            <section className="mt-4">
                <div className="nb-card nb-orange">
                    <h2 className="text-heading text-2xl">-</h2>
                    <button onClick={toNext} className="nb-btn nb-pink mt-4">-</button>
                </div>
            </section>
        </main>
    );
}