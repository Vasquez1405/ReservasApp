import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { LoginPage } from './auth/pages/LoginPage.jsx'
import { store } from './store'
import './styles.css'
import { ReservasApp } from './ReservasApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ReservasApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
