import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StorePage from './pages/store/StorePage';
import LayoutPage from './pages/layout/LayoutPage';
import SupportPage from './pages/support/SupportPage';
import NoPage from './pages/nopage/NoPage';
import HeaderComponent from './components/header/Header.component';
import FooterComponent from './components/footer/Footer.component';

const App: React.FC = () => {
    return (
        <section className="app">
            <HeaderComponent />
            <section className="main">
                <BrowserRouter>
                    <Routes>
                        <Route index element={<StorePage />}></Route>
                        <Route path="store" element={<StorePage />}></Route>
                        <Route path="support" element={<SupportPage />}></Route>
                        <Route path="*" element={<NoPage />} />
                        {/* <Route path="/" element={<LayoutPage />}></Route> */}
                    </Routes>
                </BrowserRouter>
            </section>
            <FooterComponent />
        </section>
    );
};

export default App;
