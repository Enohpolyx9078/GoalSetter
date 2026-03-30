import React from 'react';

export function Timeline({ goalName, timeline }) {

    return (
        <main>
            <h1 className="text-display text-xl nb-card nb-blue">When will { goalName.current } be done?</h1>
            <section className="mt-4">
            </section>
        </main>
    );
}