import style from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";

function Contact({ id, username, phone, deleteContact }) {
  return (
    <li key={id} id={id} className={style.contact}>
      <div className={style.contactInfo}>
        <p>
          <FaUser className={style.contactInfoIcon} /> {username}
        </p>
        <p>
          <FaPhone className={style.contactInfoIcon} /> {phone}
        </p>
      </div>
      <button
        className="button"
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;
