import React from 'react'
import ContactsForm from '../../components/ContactsForm/ContactsForm'
import ContactsList from '../../components/ContactsList/ContactsList'

function ContactPage() {
  return (
    <main>
        <h2>Contacts</h2>
        <ContactsForm/>
        <ContactsList/>
    </main>
  )
}

export default ContactPage