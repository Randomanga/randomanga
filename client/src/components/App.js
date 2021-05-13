import React from 'react';
import { AuthProvider } from '../context/AuthContext';
import routes, { RenderRoutes } from '../routes';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import Navbar from './Navbar/Navbar';
import theme from '../theme';
import ThemeContext from '../context/ThemeContext';

function App() {
    return (
        <AuthProvider>
            <ThemeContext.Provider value={theme}>
                <Navbar />
                <RenderRoutes routes={routes} />
                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </ThemeContext.Provider>
        </AuthProvider>
    );
}

export default App;
