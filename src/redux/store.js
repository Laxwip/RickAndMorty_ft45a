import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer.js";
import thunkMiddleware from "redux-thunk";

// Permite utilizar la extensión Redux DevTools para facilitar el seguimiento del estado de la aplicación durante el desarrollo.
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer,
	// Permite hacer peticiones asíncronas:
	composeEnhancer(applyMiddleware(thunkMiddleware))
);

//En resumen, esta configuración del store utiliza Redux DevTools para el desarrollo, middleware thunk para manejar acciones asíncronas, y el reducer para especificar cómo cambia el estado en respuesta a las acciones.

//* CONFIGURACION DE STORE STANDAR, NO LE MUEVAS SI FUNCIONA PAPI :V

export default store;