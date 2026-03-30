import React from 'react';

export function Timeline({ goalName, timeline }) {

    return (
        <main>
            <h1 className="text-display text-3xl nb-card nb-blue">{ goalName.current }</h1>
            <section className="mt-4">
                <div className="nb-card nb-orange">
                    <h2 className="text-heading text-2xl">When will this be done?</h2>
                    <input ref={ timeline } className="nb-input mr-4" name="timeline" type="date" />
                    <button onClick={toNext} className="nb-btn nb-pink mt-4">Keep Going</button>
                </div>
            </section>
        </main>
    );
}