import css from './App.module.css'
import { useState, useId, useEffect } from 'react'
import ContactForm from '../ContactForm/ContactForm'
import ContactList from '../ContactList/ContactList'
import SearchBox from '../SearchBox/SearchBox'
import { useDispatch } from 'react-redux'
import { fetchContacts } from '../../redux/contactsOps'

export default function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])

  return (
    <div className={css.phonebookContainer}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm/>
      <SearchBox />
      <ContactList/>
    </div>
  )
}


