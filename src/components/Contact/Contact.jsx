// import React from 'react'

const Contact = ({ contactInfo: {id, name, number}, onDelete}) => {
    return (
    <>
        <span>{name}:</span>
            <span>{number}</span>
            <button>Delete</button>
    </>
  )
}

export default Contact
