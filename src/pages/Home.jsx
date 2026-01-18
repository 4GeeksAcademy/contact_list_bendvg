import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

const apiUrl = import.meta.env.VITE_API_URL;
const agendaName = import.meta.env.VITE_AGENDA_NAME;

export const Home = () => {
	const [contacts, setContacts] = useState([])
	const { store, dispatch  } = useGlobalReducer();

  useEffect(() => {
    const loadAgenda = async () => {
      try {
        let response = await fetch(`${apiUrl}/agendas/${agendaName}`);

        if (response.status === 404) {
          await fetch(`${apiUrl}/agendas/${agendaName}`, {
            method: "POST"
          });
          response = await fetch(`${apiUrl}/agendas/${agendaName}`);
        }

        const data = await response.json();
		setContacts(data.contacts)
		dispatch({ type: "SET_AGENDA", payload: data.slug });
      } catch (error) {
        console.error(error);
      }
    };

    loadAgenda();
  }, []);

  return (
    <div className="text-center mt-5">
      <h3>Contactos</h3>

      <div className="container mt-4">{
        contacts.length === 0 ? (
          <p>No tienes contactos</p>
        ) : (
          contacts.map(contact => (
            <div key={contact.id} className="card p-3 mb-2 text-start">
              <h5>{contact.name}</h5>
              <p>{contact.email}</p>
              <p>{contact.phone}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
