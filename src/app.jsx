import React from 'react';
import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
    return (
        <BrowserRouter>
            <div className="body">
                <Routes>
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <footer>
                    <small>Authored by Howard Crawford</small>
                    <small><a href="#" target="_blank"> Github</a></small>
                </footer>
            </div>
        </BrowserRouter>
    );
}

function NotFound() {
    return <main className="flex-centered">404: Well that's awkward... We couldn't find what you're looking for!</main>;
}