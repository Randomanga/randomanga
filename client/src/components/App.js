import React from 'react';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from '../context/auth';
import routes, { RenderRoutes } from "../routes"
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
    return (
        <AuthProvider>
            <h1>NAVBAR</h1>
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
                pauseOnHover />
        </AuthProvider>
    );
}

export default App;
