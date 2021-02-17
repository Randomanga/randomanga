import React from 'react';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from '../context/auth';
import routes, { RenderRoutes } from '../routes';
import 'react-toastify/dist/ReactToastify.min.css';
import Navbar from './Navbar/Navbar';

function App() {
    return (
        <AuthProvider>
            <Navbar />
            <RenderRoutes routes={routes} />
            <ToastContainer
                position="top-center"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </AuthProvider>
    );
}

export default App;
