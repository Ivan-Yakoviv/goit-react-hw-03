// import s from './Contact.module.css'

const Contact = ({ contactInfo: {id, name, number}, onDelete}) => {
    return (
    <>
        <span>{name}:</span>
            <span>{number}</span>
            <button onClick={()=>onDelete(id)} className='onDelete'>Delete</button>
    </>
  )
}

export default Contact
