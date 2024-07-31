// PublicLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderComponent from '../../components/header/Header.component';
import FooterComponent from '../../components/footer/Footer.component';

const PublicLayout: React.FC = () => {
    return (
        // <section className="layout protected">
        //     <header>
        //         <nav>
        //             <h1>Public Header</h1>
        //             {/* Add public navigation links here */}
        //         </nav>
        //     </header>
        //     <main>
        //         <Outlet />
        //     </main>
        // </section>
        <section className="app layout__protected">
            <HeaderComponent />
            <section className="main">
                {/* <BrowserRouter> */}
                {/* <Routes>
                        <Route index element={<StorePage />}></Route>
                        <Route path="store" element={<StorePage />}></Route>
                        <Route path="support" element={<SupportPage />}></Route>
                        <Route path="*" element={<NoPage />} />
                    </Routes> */}
                {/* </BrowserRouter> */}
                <Outlet />
            </section>
            <FooterComponent />
        </section>
    );
};

export default PublicLayout;
