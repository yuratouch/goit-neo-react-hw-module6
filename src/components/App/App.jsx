import "./App.css";
import ContactForm from "/src/components/ContactForm/ContactForm";
import SearchBox from "/src/components/SearchBox/SearchBox";
import ContactList from "/src/components/ContactList/ContactList";
import { Provider } from "react-redux";
import { store, persistor } from "/src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <h1>Phonebook</h1>
          <ContactForm />
          <SearchBox />
          <ContactList />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
