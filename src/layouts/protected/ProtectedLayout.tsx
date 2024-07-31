// ProtectedLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
// import { Box } from '@mui/material';
// import Header from '../../components/Header/Header';

const ProtectedLayout: React.FC = () => {
    const { user } = useAuth();

    // if (user === 'admin') {
    //     return <AdminLayout />;
    // } else {
    //     return <UserLayout />;
    // }

    return (
        <section className="layout protected">
            {/* <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Header />
                <main style={{ height: `calc(100vh - 68px)` }}>
                    <Outlet />
                </main>
            </Box> */}
            <Outlet />
        </section>
    );
};

export default ProtectedLayout;
