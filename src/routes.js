import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favorites from './pages/Favorites';
import Header from './pages/Header';

import Home from './pages/Home';
import Movie from './pages/Movie';
import NotFound from './pages/NotFound';

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/movie/:id" element={ <Movie /> } />
                <Route path="/favorites" element={ <Favorites /> } />
                <Route path="*" element={ <NotFound /> } />
            </Routes>
        </BrowserRouter>
    );
}