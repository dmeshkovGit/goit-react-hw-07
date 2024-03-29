import css from './ContactList.module.css'
import Contact from '../Contact/Contact'
import { useSelector } from 'react-redux'
import { selectContacts } from '../../redux/contactsSlice'
import { selectNameFilter } from '../../redux/filtersSlice'



export default function ContactList({  }) {
    const filter = useSelector(selectNameFilter);
    const contacts = useSelector(selectContacts)
    const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
    const sortedContacts = filteredContacts.sort((a, b) =>{ 
    const nameA = a.name.toUpperCase(); 
    const nameB = b.name.toUpperCase(); 
    if (nameA < nameB) {
    return -1;
    }
    if (nameA > nameB) {
    return 1;
    }
    return 0;
    });

    return (
        <ul className={css.contactsList}>
            {sortedContacts.map((contact) => {
                return <li key={contact.id}>
                    <Contact contact={contact}/>
             </li>
         })}
        </ul>
    )
}