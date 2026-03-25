import React from 'react';
import './neubrutalism.css';
import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Start } from './flow/start.jsx'

export default function App() {
    return (
        <BrowserRouter>
            <div className="p-4">
                <Routes>
                    <Route path='/' element={<Start />} exact />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <footer className="absolute inset-x-4 bottom-4 text-body nb-card">
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