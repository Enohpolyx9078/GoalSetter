import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Start({ goalName }) {
    const nav = useNavigate()
    const name = React.useRef();

    async function toNext() {
        nav('/timeline');
    }

    return (
        <main>
            <h1 className="text-display text-3xl nb-card nb-pink">Ready to get started?</h1>
            <section className="mt-4">
                <div className="nb-card nb-yellow">
                    <h2 className="text-heading text-2xl">Name your goal:</h2>
                    <input ref={ goalName } className="nb-input mr-4" name="goalName" placeholder="Type your future..." />
                    <button onClick={toNext} className="nb-btn mt-4">Let's Go!</button>
                </div>
            </section>
        </main>
    );
}