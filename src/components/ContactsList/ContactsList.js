import React from "react";
import { connect } from "react-redux";
import { deleteContact } from "../../store/slices/contactsSlice";

function ContactsList({ contacts, deleteContactById }) {



  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            {JSON.stringify(contact)}{" "}
            <button
              onClick={() => {
                deleteContactById(contact.id);
              }}
            >
              Delet
            </button>
          </li>
        );
      })}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return state.contactsData;
};

const mapDispatchToProps = (dispatch) => ({
  deleteContactById: (id) => {
    return dispatch(deleteContact(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
