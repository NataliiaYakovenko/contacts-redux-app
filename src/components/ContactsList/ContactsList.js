import React from "react";
import { connect } from "react-redux";

function ContactsList({ contacts }) {
  return (
    <ul>
      {contacts.map((contact) => {
        return <li key={contact.id}>{JSON.stringify(contact)}</li>;
      })}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return state.contactsData;
};

export default connect(mapStateToProps)(ContactsList);
