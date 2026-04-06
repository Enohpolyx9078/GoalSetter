import React from 'react';
import './neubrutalism.css';
import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Start } from './flow/start.jsx'
import { Timeline } from './flow/timeline.jsx';
import { Breakdown } from './flow/breakdown.jsx';
import { Finalize } from './flow/finalize.jsx';
import { Ending } from './flow/ending.jsx';

export default function App() {
    const [goalName, setGoalName] = React.useState("");
    const [timeline, setTimeline] = React.useState("");
    const [breakdown, setBreakdown] = React.useState("");

    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen p-4">
                <main className="flex-grow">
                    <Routes>
                        <Route path='/' element={<Start setGoalName={setGoalName} />} exact />
                        <Route path='/timeline' element={<Timeline goalName={goalName} setTimeline={setTimeline} />} />
                        <Route path='/breakdown' element={<Breakdown goalName={goalName} timeline={timeline} setBreakdown={setBreakdown} />} />
                        <Route path='/finalize' element={<Finalize goalName={goalName} timeline={timeline} breakdown={breakdown} />} />
                        <Route path='/ending' element={<Ending goalName={goalName} timeline={timeline} breakdown={breakdown} />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </main>
                <footer className="mt-4 text-body nb-card h-min">
                    <p>Authored by Howard Crawford
                        <a href="https://github.com/Enohpolyx9078/GoalSetter" className="nb-btn ms-2" target="_blank"> Github</a>
                    </p>
                </footer>
            </div>
        </BrowserRouter>
    );
}

function NotFound() {
    return (
        <main>
            <h1 className="text-display text-3xl nb-card">404: Well that's awkward...</h1>
            <p className="text-body mt-4 mb-4">We couldn't find what you're looking for!</p>
        </main>
    );
}