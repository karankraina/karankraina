import styles from './contact.module.css';
import ContactItem from './contact-item';

export default function ContactList(props) {
    return (
        <div class={styles.ContactList}>
            {
                props.contacts.map(contact => (
                    <ContactItem key={contact.id} contact={contact} />
                ))
            }
        </div>
    );
}