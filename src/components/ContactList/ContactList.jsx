import Contact from '../Contact/Contact'

const ContactList = ({contacts, onDelete}) => {
    return (
        <ul>{contacts.map((contact) => {
            return (
                <li key={contact.id}>
                    <Contact contactInfo={contact} onDelete={onDelete} />
                </li>
            );
        })}
        </ul>
    );
}

export default ContactList
