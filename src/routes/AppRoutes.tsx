import { BrowserRouter, Route, Routes } from "react-router-dom";
// import LoginPage from "../pages/Login/LoginPage";
// import HomePage from "../pages/Home/HomePage";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import { useAuth } from "../contexts/AuthContext";
import PublicLayout from "../layouts/public/PublicLayout";
import ProtectedLayout from "../layouts/protected/ProtectedLayout";
import StorePage from "../pages/store/StorePage";
import SupportPage from "../pages/support/SupportPage";
import NoPage from "../pages/nopage/NoPage";
// import AdminPage from "../pages/Admin/AdminPage";
// import PublicLayout from "../layouts/public/PublicLayout";
// import ProtectedLayout from "../layouts/protected/ProtectedLayout";
// import AlertsPage from "../pages/Alerts/AlertsPage";

const AppRoutes: React.FC = () => {
    // const isAuthenticated = true; // Replace with actual authentication logic
    const { isAuthenticated, user } = useAuth();
    const userPermissions: string[] = ['admin']; // Replace with actual user permissions

    return (
        // <BrowserRouter>

        <Routes>

            <Route element={<PublicLayout />}>
                <Route path="/" element={<PublicRoute isAuthenticated={isAuthenticated} />}>
                    <Route index element={<StorePage />}></Route>
                    <Route path="store" element={<StorePage />}></Route>
                    <Route path="support" element={<SupportPage />}></Route>
                    <Route path="*" element={<NoPage />} />
                    {/* <Route index element={<h1>Public page</h1>} /> */}
                    {/* <Route index element={<HomePage />} /> */}
                    {/* <Route path="login" element={<LoginPage />} /> */}
                </Route>
            </Route>

            <Route element={<ProtectedLayout />}>
                <Route path="alerts" element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
                    <Route index element={<h1>Protected layout</h1>} />
                    {/* <Route index element={<DashboardPage />} /> */}
                    {/* <Route index element={<AlertsPage />} /> */}
                </Route>

                <Route path="admin" element={<ProtectedRoute isAuthenticated={isAuthenticated} requiredPermission="admin" userPermissions={userPermissions} />}>
                    <Route index element={<h1>Admin page</h1>} />
                    {/* <Route index element={<AdminPage />} /> */}
                    {/* <Route index element={<AlertsPage />} /> */}
                    {/* <Route path="alerts" element={<AlertsPage />} /> */}
                    {/* <Route index element={<AdminPage />} />
                    <Route path="overview" element={<Overview />} />
                    <Route path="settings" element={<Settings />} /> */}
                </Route>
            </Route>



        </Routes>

        // </BrowserRouter>
    );
}

export default AppRoutes;