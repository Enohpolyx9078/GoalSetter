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
        <section>
            <h1 className="text-display text-3xl nb-card nb-pink">Jesus Christ is the Center!</h1>
            <section className="mt-4">
                <div className="nb-card nb-blue">
                    <h2 className="text-heading text-2xl">Ready to get started?</h2>
                    <div className="nb-card nb-bg">
                        <img src="christ.jpeg" />
                    </div>
                    <div className="text-body mt-4">
                        <p>Remember, there's exactly one person that can truly get you to your goal.</p>
                        <p>That's <strong>Jesus Christ</strong>!</p>
                        <p>While you're making your plans, include Him in each step. That's what will get you to the end.</p>
                    </div>
                </div>
                <div className="nb-card nb-yellow mt-4">
                    <h2 className="text-heading text-2xl">Name your goal:</h2>
                    <input ref={name} className="nb-input mr-4" name="goalName" placeholder="Type your future..." />
                    <button onClick={toNext} className="nb-btn mt-4">Let's Go!</button>
                </div>
            </section>
        </section>
    );
}