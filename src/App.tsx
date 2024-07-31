import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StorePage from './pages/store/StorePage';
import LayoutPage from './pages/layout/LayoutPage';
import SupportPage from './pages/support/SupportPage';
import NoPage from './pages/nopage/NoPage';
import HeaderComponent from './components/header/Header.component';
import FooterComponent from './components/footer/Footer.component';
import AppRoutes from './routes/AppRoutes';

interface IProps {
    appConfig?: any;
    userConfig?: any;
}
const App: React.FC<IProps> = ({ appConfig, userConfig }) => {
    return (
        <AppRoutes />
    );
};

export default App;
