// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = ({kontak}) => {
    return (
        <div className='listKontak'>
            <div className='kontakpp'>
                <img alt='pp' src={kontak.photo} />
            </div>
            <div className='kontakDetail'>
                <p className='name'>{kontak.name}</p>
                <p>{kontak.phone}</p>
                <p>{kontak.email}</p>
            </div>
        </div>
    )
}

export default Contact;