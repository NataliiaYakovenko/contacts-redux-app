import React from "react";
import { connect } from "react-redux";
import { deleteContact, updateContact } from "../../store/slices/contactsSlice";

function ContactsList({ contacts, deleteContactById, updateContactById }) {
  return (
    <ul>
      {contacts.map((c) => {
        return (
          <li key={c.id}>
            <label>
              <input
                type="checkbox"
                checked={c.isFavourite}
                onChange={({ target: { checked } }) => {
                  updateContactById({
                    id: c.id,
                    data: { isFavourite: checked },
                  });
                }}
              />
              {JSON.stringify(c)}{" "}
            </label>

            <button
              onClick={() => {
                deleteContactById(c.id);
              }}
            >
              Delete
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

  updateContactById: ({ id, data }) => {
    return dispatch(updateContact({ id, data }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
