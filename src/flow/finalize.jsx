import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Finalize({ goalName, timeline, breakdown }) {
    const breakdown = React.useRef();
    const nav = useNavigate();

    async function toNext() {
        setBreakdown(breakdown.current.value);
        nav('/finalize');
    }

    return (
        <main>
            <div className="nb-card nb-yellow">
                <h1 className="text-display text-3xl">{goalName}</h1>
                <h2 className="text-heading text-2xl">To be done by { timeline }</h2>
            </div>
            <section className="mt-4">
                <div className="nb-card nb-blue">
                    <h2 className="text-heading text-2xl">Break it down</h2>
                    <textarea ref={ breakdown } className="nb-input" placeholder="Make your plan..."></textarea>
                    <button onClick={toNext} className="nb-btn nb-orange mt-4">Finish Up</button>
                </div>
            </section>
        </main>
    );
}