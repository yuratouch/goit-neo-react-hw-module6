import style from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";

function Contact({ contact, onDelete }) {
  return (
    <li key={contact.id} id={contact.id} className={style.contact}>
      <div className={style.contactInfo}>
        <p>
          <FaUser className={style.contactInfoIcon} /> {contact.name}
        </p>
        <p>
          <FaPhone className={style.contactInfoIcon} /> {contact.number}
        </p>
      </div>
      <button
        className="button"
        type="button"
        onClick={() => onDelete(contact.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;
