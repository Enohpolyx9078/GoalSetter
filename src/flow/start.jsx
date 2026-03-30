import React from 'react';

export function Start() {
    return (
        <main>
            <h1 className="text-display text-3xl nb-card nb-pink">Ready to get started?</h1>
            <section className="mt-4">
                <div className="nb-card nb-yellow">
                    <h2 className="text-heading text-2xl">Name your goal:</h2>
                    <input className="nb-input" name="goalName" placeholder="Type your future..." />
                    <button className="nb-btn mt-4">Keep Going</button>
                </div>
            </section>
        </main>
    );
}