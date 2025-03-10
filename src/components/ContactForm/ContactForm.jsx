import style from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "/src/redux/contactsSlice";

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

function ContactForm() {
  const dispatch = useDispatch();

  const submitHandler = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={ContactFormSchema}
    >
      <Form className={style.contactForm}>
        <label>
          Name
          <Field className="inputField" type="text" name="name" />
          <ErrorMessage
            name="name"
            component="span"
            className={style.errorMessage}
          />
        </label>

        <label>
          Number
          <Field className="inputField" type="text" name="number" />
          <ErrorMessage
            name="number"
            component="span"
            className={style.errorMessage}
          />
        </label>

        <button className={`button ${style.submitBtn}`} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
