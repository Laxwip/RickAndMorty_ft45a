import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import store from "./redux/store.js"
import { Provider } from 'react-redux'

import App from './App.jsx'
import './main.css'

// Crea una raíz de React utilizando ReactDOM.createRoot y especifica el elemento DOM con el id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
// Utiliza React.StrictMode para activar una serie de verificaciones adicionales en el desarrollo
<React.StrictMode>
  {/* Utiliza BrowserRouter para proporcionar la capacidad de enrutamiento a la aplicación */}
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>
</React.StrictMode>,
)
