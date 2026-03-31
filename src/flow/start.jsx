import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Start({ setGoalName }) {
    const name = React.useRef();
    const nav = useNavigate();

    async function toNext() {
        setGoalName(name.current.value);
        nav('/timeline');
    }

    return (
        <main>
            <h1 className="text-display text-3xl nb-card nb-pink">Ready to get started?</h1>
            <section className="mt-4">
                <div className="nb-card nb-yellow">
                    <h2 className="text-heading text-2xl">Name your goal:</h2>
                    <input ref={ name } className="nb-input mr-4" name="goalName" placeholder="Type your future..." />
                    <button onClick={toNext} className="nb-btn mt-4">Let's Go!</button>
                </div>
            </section>
        </main>
    );
}