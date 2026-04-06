import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Finalize({ goalName, timeline, breakdown }) {
    const nav = useNavigate();

    async function toNext() {
        nav('/ending');
    }

    return (
        <section>
            <div className="nb-card nb-pink">
                <h1 className="text-display text-3xl">{goalName}</h1>
                <h2 className="text-heading text-2xl">To be done by { timeline }</h2>
            </div>
            <div className="nb-card nb-orange mt-4">
                <h2 className="text-heading text-2xl">The Plan</h2>
                <p>{ breakdown }</p>
            </div>
            <section className="mt-4">
                <div className="nb-card nb-blue">
                    <h2 className="text-heading text-2xl">Wrapping Up...</h2>
                    <div className="nb-card nb-bg">
                        <img src="christ.jpeg"/>
                    </div>
                    <div className="text-body mt-4">
                        <p>Remember, there's exactly one person that can truly get you to your goal.</p>
                        <p>That's <strong>Jesus Christ</strong>!</p>
                        <p>While you're making your plans, include Him in each step. That's what will get you to the end.</p>
                    </div>
                    <button onClick={toNext} className="nb-btn nb-yellow mt-4">View Your Goal</button>
                </div>
            </section>
        </section>
    );
}