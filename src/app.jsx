import React from 'react';
import './neubrutalism.css';
import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
    return (
        <BrowserRouter>
            <div className="body">
                <Routes>
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <footer className="text-body">
                    <small>Authored by Howard Crawford</small>
                    <small><a href="#" target="_blank"> Github</a></small>
                </footer>
            </div>
        </BrowserRouter>
    );
}

function NotFound() {
    return (
        <main>
            <h1 className="text-display text-3xl">404</h1>
            <h2 className="text-heading">Well that's awkward...</h2>
            <p className="text-body">We couldn't find what you're looking for!</p>
        </main>
    );
}