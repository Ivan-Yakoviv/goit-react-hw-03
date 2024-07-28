import s from './Contact.module.css'

const Contact = ({ contactInfo: {id, name, number}, onDelete}) => {
    return (
    <div className={s.contact}>
        <div className={s.contactInfo}>
          <span className={s.contactValue}>{name}:</span>
          <span className={s.contactValue}>{number}</span>
        </div>
          <button onClick={()=>onDelete(id)} className={s.onDelete}>Delete</button>
    </div>
  )
}

export default Contact
