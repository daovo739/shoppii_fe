import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import GlobalStyles from './components/GlobalStyles'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './hooks/useAuth'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import { GoogleOAuthProvider } from '@react-oauth/google';

const initialOptions = {
    'client-id': import.meta.env.REACT_APP_PAYPAL_CLIENT_ID,
    'merchant-id': import.meta.env.REACT_APP_PAYPAL_MERCHANT_ID,
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Router>
            <GoogleOAuthProvider clientId={import.meta.env.REACT_APP_GOOGLE_CLIENT_ID}>
                <AuthProvider>
                    <GlobalStyles>
                        <PayPalScriptProvider options={initialOptions}>
                            <App />
                        </PayPalScriptProvider>
                    </GlobalStyles>
                    <ToastContainer
                        position="top-right"
                        autoClose={600}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss={false}
                        draggable
                        pauseOnHover
                        theme="dark"
                    />
                </AuthProvider>
            </GoogleOAuthProvider>
        </Router>
    </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
