import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { ContactCard } from "../components/ContactCard";
import { API_URL, AGENDA_NAME } from "../env";

export const Home = () => {
  const [contacts, setContacts] = useState([]);
  const { dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  useEffect(() => {
    const loadAgenda = async () => {
      try {
        let response = await fetch(`${API_URL}/agendas/${AGENDA_NAME}`);

        if (response.status === 404) {
          await fetch(`${API_URL}/agendas/${AGENDA_NAME}`, { method: "POST" });
          response = await fetch(`${API_URL}/agendas/${AGENDA_NAME}`);
        }

        const data = await response.json();
        setContacts(data.contacts || []);
        dispatch({ type: "SET_AGENDA", payload: data });
      } catch (error) {
        console.error(error);
      }
    };

    loadAgenda();
  }, []);

  return (
    <div className="text-center mt-5">
      <h3>Contactos</h3>

      <div className="container mt-4 d-flex flex-column gap-3">
        {contacts.length === 0 ? (
          <p>No tienes contactos</p>
        ) : (
          contacts.map(contact => (
            <ContactCard
              key={contact.id}
              id={contact.id}
              name={contact.name}
              email={contact.email}
              phone={contact.phone}
              address={contact.address}
              image={contact.image}
              onEdit={() => navigate(`/single/${contact.id}`)}
              onDelete={async () => {
                await fetch(`${API_URL}/agendas/${AGENDA_NAME}/contacts/${contact.id}`, {
                  method: "DELETE"
                });

                const resp = await fetch(`${API_URL}/agendas/${AGENDA_NAME}`);
                const agendaData = await resp.json();
                dispatch({ type: "SET_AGENDA", payload: agendaData });
                setContacts(agendaData.contacts || []);
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};
