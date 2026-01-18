// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { Form } from "../components/Form";
export const Demo = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()
  console.log(store);
  return (
    <div className="container">
      <Form
        title="Crear contacto"
        placeholders={{
          name: "Nombre completo",
          email: "Correo personal",
          phone: "Número móvil",
          address: "Dirección completa"
        }}
        onSubmit={() => console.log("Creando contacto...")}
      />
    

      <br />

      <Link to="/">
        <span className="text-decoration-underline"> Back home </span>
      </Link>
    </div>
  );
};
