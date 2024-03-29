import css from './App.module.css'
import { useState, useId, useEffect } from 'react'
import ContactForm from '../ContactForm/ContactForm'
import ContactList from '../ContactList/ContactList'
import SearchBox from '../SearchBox/SearchBox'

export default function App() {

  return (
    <div className={css.phonebookContainer}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm/>
      <SearchBox />
      <ContactList/>
    </div>
  )
}


