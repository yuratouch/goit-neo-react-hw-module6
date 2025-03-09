import "./App.css";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ContactForm from "/src/components/ContactForm/ContactForm";
import SearchBox from "/src/components/SearchBox/SearchBox";
import ContactList from "/src/components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : [];
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  function addContact(values, actions) {
    setContacts((prevContacts) => {
      return [
        ...prevContacts,
        {
          id: nanoid(),
          name: values.name,
          number: values.number,
        },
      ];
    });

    actions.resetForm();
  }

  function deleteContact(id) {
    console.log("deleteContact", id);
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== id);
    });
  }

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm submitHandler={addContact} />
      <SearchBox value={filter} onFileterChange={setFilter} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </>
  );
}

export default App;
