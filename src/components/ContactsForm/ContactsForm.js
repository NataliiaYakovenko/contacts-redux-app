import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { CONTACT_VALIDATION_SCHEMA } from "../../utils/validationSchema";
import { createContact } from "../../store/slices/contactsSlice";

function ContactsForm({newContactCreate}) {
  const initialValues = {
    fullname: "",
    phoneNumber: "",
  };

  const submitHandler = (values, formickBag) => {
    newContactCreate(values)
    formickBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={CONTACT_VALIDATION_SCHEMA}
    >
      <Form>
        <label>
          Name:
          <Field
            name="fullName"
            type="text"
            placeholder="your full name"
            autoFocus
          />
          <ErrorMessage name="fullName" component="div" />
        </label>

        <label>
          Phone number:
          <Field
            name="phoneNumber"
            type="text"
            placeholder="+XX XXX XXX XX XX"
            autoFocus
          />
          <ErrorMessage name="phoneNumber" component="div" />
        </label>

        <button type='submit'>Add</button>
      </Form>
    </Formik>
  );
}

const mapDispatchToProps = (dispatch) => ({
newContactCreate:(data)=>dispatch(createContact(data))
}
)



export default connect(null, mapDispatchToProps)(ContactsForm);
